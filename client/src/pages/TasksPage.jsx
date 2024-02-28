import { useEffect } from "react"
import { useTasks } from "../context/TasksContext"
import TaksCard from '../components/TaskCard'
import TaskCard from "../components/TaskCard"

function TasksPage() {

    const { getTasks, tasks } = useTasks()

    useEffect(() => {
        getTasks()
    }, [])

    if (tasks.length == 0) return (<h1>No tasks !!!</h1>)

    return (
        <div className="block md:grid md:gap-4 md:grid-cols-3">
            {
                tasks.map(task => (
                    <TaskCard task={task} key={task._id} />
                ))
            }
        </div>
    )
}

export default TasksPage