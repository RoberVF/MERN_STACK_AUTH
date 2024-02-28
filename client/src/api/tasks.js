import axios from './axios'

export const getTasksRequest = () => axios.get('/tasks')

export const getTaskRequest = (id) => axios.get(`/tasks/${id}`)

export const createTaskRequest = async (task) => axios.post('/tasks/', task)

export const updateTaskRequest = (oldTaskID, updatedTask) => axios.put(`/tasks/${oldTaskID}`, updatedTask)

export const deleteTaskRequest = (id) => axios.delete(`/tasks/${id}`)
