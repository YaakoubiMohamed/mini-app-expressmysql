const {check, validationResult} = require('express-validator');


exports.register = [
    check("nom")
    .trim()//supprimer les espaces blanc au debut et a la fin du chaine de caractere
    .not()
    .isEmpty()
    .withMessage("Le nom ne peut pas être vide"),
    check("prenom")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Le prenom ne peut pas être vide"),
    check("email")
    .trim()
    .not()
    .isEmpty({msg: "L'email est obligatoire"})
    .isEmail()
    .withMessage("L'email est invalide"),
    check("password")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Le mot de passe ne peut pas être vide")
    .isLength({min:6, max: 26})
    .withMessage("Le mot de passe doit contenir entre 6 et 26 caractères")
    ,
    check("adresse")
    .trim()
    .not()
    .optional(),
    check("telephone")
    .trim()
    .not()
    .matches(/^\+216\s?[0-9]{2}\s?[0-9]{3}\s?[0-9]{4}$/) //regex pour verifier le format +216 xx xxxxxx
    .withMessage(),
    check("role")
    .trim()
    .optional()
    .isIn(["admin", "client", "entrepise"])
    .withMessage("le role n'est pas valide"),
    (req, res, next)=>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({error: errors.array()});
        }
        next();
    }
];