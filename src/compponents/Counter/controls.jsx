// import React from 'react'

const Controls = ({ onIncrement, onDecrement }) => {
    return (
        <div className='Counter__controls' >
            <button type="button"
                onClick={onIncrement}
                >increase by 1
            </button>
            <button type="button"
                onClick={onDecrement}
                >decrease by 1
            </button>

         </div>
    )
    
}

export default Controls;