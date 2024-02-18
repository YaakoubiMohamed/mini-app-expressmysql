const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')

const db = require('./models/index');
  
const  sequelize = db.sequelize;
   
const app = express();
   
const PORT= process.env.APP_PORT;
   
app.use(bodyparser.json());
app.use(cors());
const path = require('path');

// Set EJS as the view engine
app.set('view engine', 'ejs');

const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const categorieRoutes = require('./routes/categorieRoutes');
const produitRoutes = require('./routes/produitRoutes');
const commandeRoutes = require('./routes/commandeRoutes')
const ligneCommandeRoutes = require('./routes/ligneCommandeRoutes')
const messageRoutes = require('./routes/messageRoutes')
const reclamationRoutes = require('./routes/reclamationRoutes')

app.use('/api/auth', authRoutes)
app.use('/api', userRoutes);
app.use("/api",categorieRoutes)
app.use("/api",produitRoutes)
app.use("/api",commandeRoutes)
app.use("/api",ligneCommandeRoutes)
app.use("/api",messageRoutes)
app.use("/api",reclamationRoutes)


sequelize.authenticate()
.then(() => {
  console.log('Connection has been established successfully.');
})
.catch(err => {
  console.error('Unable to connect to the database:', err);
});


app.listen(4000, ()=>{
    console.log("Server is running on port 4000")
})