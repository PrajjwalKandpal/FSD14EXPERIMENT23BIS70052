const express = require('express'); 
const mongoose = require('mongoose'); 
const studentRoutes = require('./routes/studentRoutes'); 
const app = express(); 
const PORT = 3000; 
// Middleware 
app.use(express.json()); 
// Routes 
app.use('/students', studentRoutes); 
// MongoDB Connection 
mongoose.connect('mongodb://127.0.0.1:27017/studentDB', { useNewUrlParser: true, 
useUnifiedTopology: true }) 
.then(() => console.log('MongoDB connected')) 
.catch(err => console.log(err)); 
// Start Server 
 
 
app.listen(PORT, () => { 
    console.log(`Server running on http://localhost:${PORT}`); 
});