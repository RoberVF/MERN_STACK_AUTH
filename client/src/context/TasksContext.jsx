import { createContext } from 'react'
import { useState, useContext } from 'react'
import { createTaskRequest, getTasksRequest, deleteTaskRequest, getTaskRequest, updateTaskRequest } from '../api/tasks'

const TaskContext = createContext()

export const useTasks = () => {
    const context = useContext(TaskContext)

    if (!context) {
        throw new Error("useTasks must be used within a TaskProvider")
    }

    return context
}

export function TaskProvider({ children }) {

    const [tasks, setTasks] = useState([])

    const getTasks = async () => {
        try {
            const res = await getTasksRequest()
            setTasks(res.data)
        } catch (e) {
            console.log(e)
        }
    }

    const createTask = async (task) => {
        const res = await createTaskRequest(task)
        console.log(res)
    }

    const deleteTask = async (id) => {
        try{
            const res = await deleteTaskRequest(id)
            if(res.status == 204) setTasks(tasks.filter(task => task._id != id))
        } catch(e){
            console.log(e)
        }
    }

    const getTask = async (id) => {
        try{
            const res = await getTaskRequest(id)
            return res.data
        } catch(e){
            console.log(e)
        }
    }

    const updateTask = async (oldTaskID, updatedTask) => {
        try{
           await updateTaskRequest(oldTaskID, updatedTask)
           // Como se "recarga" la pagina porque cambiamos de ruta, no es necesario volver a 
           // recorrer las tareas como haciamos en el deleteTask
        } catch(e){
            console.log(e)
        }
    }

    return (
        <TaskContext.Provider value={{ tasks, createTask, getTasks, deleteTask, getTask, updateTask }}>
            {children}
        </TaskContext.Provider>
    )
}