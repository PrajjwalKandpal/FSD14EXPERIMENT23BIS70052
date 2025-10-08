const Student = require('../models/Student'); 
 
 
 
exports.getAllStudents = async (req, res) => { 
    try { 
        const students = await Student.find(); 
        res.status(200).json(students); 
    } catch (err) { 
        res.status(500).json({ message: err.message }); 
    } 
}; 
 
exports.getStudentById = async (req, res) => { 
    try { 
        const student = await Student.findById(req.params.id); 
        if (!student) return res.status(404).json({ message: 'Student not found' }); 
        res.status(200).json(student); 
    } catch (err) { 
        res.status(500).json({ message: err.message }); 
    } 
}; 
 
exports.createStudent = async (req, res) => { 
    const student = new Student({ 
        name: req.body.name, 
        age: req.body.age, 
        course: req.body.course 
    }); 
    try { 
        const newStudent = await student.save(); 
        res.status(201).json(newStudent); 
    } catch (err) { 
        res.status(400).json({ message: err.message }); 
    } 
}; 
 
exports.updateStudent = async (req, res) => { 
    try { 
        const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true }); 
        if (!student) return res.status(404).json({ message: 'Student not found' }); 
        res.status(200).json(student); 
    } catch (err) { 
        res.status(400).json({ message: err.message }); 
    } 
}; 
exports.deleteStudent = async (req, res) => { 
try { 
const student = await Student.findByIdAndDelete(req.params.id); 
if (!student) return res.status(404).json({ message: 'Student not found' }); 
res.status(200).json({ message: 'Student deleted', student }); 
} catch (err) { 
res.status(500).json({ message: err.message }); 
} 
};