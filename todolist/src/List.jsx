import ListItem from "./ListItem"

const List = ({taskList}) => {

return(
    <>
        
    <div className="row m-2">
        <div className="col-6">
          <h4>Tasks</h4>
        </div>

        <div className="col-2">
            <h4>Limit</h4>
        </div>
        <div className="col">
            <h4>Actions</h4>
        </div>
    </div>
    
    {
        taskList.map((task) => (
            <ListItem 
            key={task.id}
            task={task.task}
            limit={task.limit}
            />
        ))
    }
    </>
)
}
export default List