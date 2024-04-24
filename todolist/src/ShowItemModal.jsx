const ShowItemModal = ({task}) => {
  return (
    <div className="modal fade" id={"showItemModal"+task.id}>
        <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
        <div class="modal-header">
            <h5 className="modal-title">
                {task.task} 
            </h5>
            <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            ></button>
        </div> 
        <div className="modal-body">
            <div className="row">
                <p>{task.description}</p>
            </div>
            <div className="row text-center">
                <div className="col">
                    <i className="bi bi-geo-alt-fill"></i>
                    {task.location}
                </div>
            <div className="col">
                <i className="bi bi-clock-fill"></i>
                {task.limit}
            </div>
            </div>
            </div>
        <div className="modal-footer">
          <button className="btn btn-sm btn-outline-danger">
            <i className="bi bi-trash"></i>
            Delete
            </button>
        <button className="btn btn-sm btn-outline-primary">
            <i className="bi bi-pencil-square"></i>
            Edit
            </button>
            <button
            type="button"
            className="btn btn-sm btn-outline-secondary"
            data-bs-dismiss="modal">
            <i className="bi bi-x-lg"></i>
                Close
            </button>
        </div>
        </div>
        </div>
    </div>
  )
}

export default ShowItemModal