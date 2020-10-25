import React from 'react'

const InpNumber = ({ type, value, onChange }) => {
    return (
        <div className="form-group">
            <label>Phone:</label>
            <input className="form-control" 
                type={type}
                value={value}
                onChange={onChange}
            />
        </div>
    )
}
export default InpNumber