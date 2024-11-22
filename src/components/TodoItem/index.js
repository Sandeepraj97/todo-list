
import "./index.css"
const TodoItem = (props) =>{
    return (
        <li className="list-item">
           
            <p className={props.item.completed ? "completed" : "not-completed"}>{props.item.name}</p>
            <div className="list-bitton">
                <button className="button" onClick={() => props.onDone(props.item)}>Completed</button>
                <button className="button" onClick={ ()=>props.onDelete(props.item)}>Delete</button>
            </div>
        </li>
    )
}

export default TodoItem
