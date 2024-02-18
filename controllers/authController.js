const User = require("../models/user");

const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const config = require("../config/secret")

exports.register = async (req, res) => {
    const { nom, prenom, email, password, adresse, telephone, role } = req.body;
    console.log(req.body)
    try {

        // Generate a salt
        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);

        // Hash the password with the salt
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create the user with the hashed password
        console.log(role)
        const newUser = await User.create({
            nom,
            prenom,
            email,
            password: hashedPassword,
            adresse,
            telephone,
            role,
        });
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


exports.login = (req, res) => {
    const { email, password} = req.body;
    if (!email || !password) {
        return res.status(400).json({ msg: "Missing fields"});
    }
    User.findOne({where :{email: email}})
    .then(user =>{
        if(!user){
            res.status(400).json({msg:"email ou mot de passe incorrecte"})
        }

        bcrypt.compare(password, user.password,(err,isMatch)=>{
            if(err){
                console.log(err);
            }
            if(!isMatch){
                return res.status(401).json({message: "mot de passe incorrecte"})
            }
            
            const token = jwt.sign(
                {id: user.id, email: user.email, role: user.role},
                config.secret,
                {expiresIn: config.expiresIn}
            )

            res.status(200).json({message:"user connecte avec succe",token})
        })
    })
}


exports.logout = (req, res) =>{
    res.status(200).json({message:" user logged out successfully"});
}

exports.profile = (req, res) =>{
    const id = req.user.id
    const email = req.user.email
    const role = req.user.role

    User.findOne({ where:{id:id}}).then((user)=> {
        console.log(user)
        res.json({message: "user profile",user})
    });
    
}