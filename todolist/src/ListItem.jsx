import ShowItemModal from "./ShowItemModal"

const ListItem = ({task, limit}) => {
return(
    <>
    <div className="row m-2">
        <div className="col-6">
          <ShowItemModal/>
            <button
            className="btn bt n-link"
            data-bs-target="#showItemModal"
            data-bs-toggle="modal">
            {task}
          </button>
        </div>

        <div className="col-2">
          {limit} 
        </div>

        <div className="col">
          <button className="btn btn-sm btn-primary">
            <i className="bi bi-pencil-square"></i>
            </button>
          <button className="btn btn-sm btn-danger">
            <i className="bi bi-trash"></i>
            </button>
        </div>
        </div>
    </>
)
}
export default ListItem