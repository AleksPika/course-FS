import React from 'react'

const InpName = ({ type, value, onChange }) => {
    return (
        <div className="form-group">
            <label>Name 😎:</label>
            <input className="form-control" style={{width: `250px`}}
                type={type}
                value={value}
                onChange={onChange}
            />
        </div>
    )
}
export default InpName
