import { useForm } from "./Hooks/useForm"

const taskInfo = {
    task:'',
    description:'',
    location:'',
    limit:''
}

const TaskModal = ({taskList}) => {
    const [values, handleInputChange, reset] = useForm(taskInfo)

  return (
    <div className="modal fade" id="taskModal">
        <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
        <div class="modal-header">
            <h5 className="modal-title">
                Add New Task
            </h5>
            <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            ></button>
        </div> 
        <div className="modal-body">
            <div className="row">
                <div className="col text-start">
                    <label 
                        htmlFor="task" 
                        className="form-label">
                    Task</label>
                    <input 
                        id="task"
                        name="task"
                        className="form-control"
                        onChange={handleInputChange}
                        type="text" 
                        value={values.task}
                    />
                    {/*------------------------------ */}
                    <label 
                        htmlFor="description" 
                        className="form-label">
                    Description</label>
                    <textarea 
                        id="description"
                        onChange={handleInputChange}
                        className="form-control"
                        value={values.description}
                    />
                    {/*------------------------------ */}
                    <label 
                        htmlFor="location" 
                        className="form-label">
                    Location</label>
                    <input 
                        id="location"
                        name="location"
                        className="form-control"
                        onChange={handleInputChange}
                        type="text" 
                        value={values.location}
                    />
                    {/*------------------------------ */}
                    <label 
                        htmlFor="limit" 
                        className="form-label">
                    Limit</label>
                    <input 
                        id="limit"
                        name="limit"
                        className="form-control"
                        onChange={handleInputChange}
                        type="time" 
                        value={values.limit}
                    />
                </div>
            </div>
            </div>
        <div className="modal-footer">
        <button 
        className="btn btn-sm btn-outline-primary"
        onClick={() => {console.log(values)}}
        >
            <i className="bi bi-pencil-square"></i>
            Save
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

export default TaskModal