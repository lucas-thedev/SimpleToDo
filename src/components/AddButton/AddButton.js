import './AddButton.css'

function AddButton (props) {
    return (
        <div className='button-container'>
            <button
                onClick={() => props.handleSubmit()}
            >
                +
            </button>
        </div>
    )
}

export default AddButton