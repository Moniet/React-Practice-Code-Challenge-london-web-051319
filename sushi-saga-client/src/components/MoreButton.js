import React from 'react'

const MoreButton = ({ selectFour }) => {
    return <button onClick={() => selectFour()}>
            More sushi!
          </button>
}

export default MoreButton
