import ShowItemModal from "./ShowItemModal"

const ListItem = ({task}) => {
return(
    <>
    <div className="row">
        <div className="col-6">
          <ShowItemModal task={task}/>
          <input type="checkbox"/>
            <button
            className="btn bt n-link"
            data-bs-target={"#showItemModal"+task.id}
            data-bs-toggle="modal">
            {task.task}
          </button>
        </div>

        <div className="col-3">
          {task.limit} 
        </div>

        <div className="col">
          {task.location}
        </div>
        </div>
    </>
)
}
export default ListItem