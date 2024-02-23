import { useAuth } from "../context/AuthContext"

function TasksPage(){

    const {user} = useAuth()

    return (
        <div>Tasks Page</div>
    )
}

export default TasksPage