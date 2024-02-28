import Task from '../models/task.model.js'

export const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({
            user: req.user.id
        }).populate('user')
        res.json(tasks)
    } catch (e) {
        return res.status(404).json({ message: "Tasks not founded!" })
    }
}

export const getTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id)
        res.json(task)
    } catch (e) {
        return res.status(404).json({ message: "Task not found!" })
    }
}

export const createTask = async (req, res) => {
    try {
        const { title, description, date } = req.body
        const newTask = new Task({
            title,
            description,
            date,
            user: req.user.id
        })
        const savedTask = await newTask.save()
        res.json(savedTask)
    } catch (e) {
        return res.status(404).json({ message: "Task not created!" })
    }
}

export const updateTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
        res.json(task)
    } catch (e) {
        return res.status(404).json({ message: "Task not updated!" })
    }
}

export const deleteTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id)
        res.sendStatus(204)
    } catch (e) {
        return res.status(404).json({ message: "Task not deleted!" })
    }
}