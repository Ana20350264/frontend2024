const ShowItemModal = () => {
  return (
    <div className="modal fade" id="showItemModal">
        <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
        <div class="modal-header">
            <h5 className="modal-title">
                Show Item 
            </h5>
            <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            ></button>
        </div> 
        <div className="modal-body">
            Select Item Information
            </div>   
        <div className="modal-footer">
            <button
            type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal"
            ></button>
        </div>
        </div>
        </div>
    </div>
  )
}

export default ShowItemModal