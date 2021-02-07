import './InputTask.css'

function InputTask (props) {
    return (
        <div className='input-container'>
            <input 
                type='text' 
                value={props.value} 
                onChange={(event) => props.handleChange('text', event.target.value)}
            />
        </div>
    )
}

export default InputTask