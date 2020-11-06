import React from 'react'

const InpButton = ({ type, text }) => {
    return (
        <div>
			<button className="btn btn-primary mt-2" type={type}>{text}</button>
		</div>
    )
}
export default InpButton