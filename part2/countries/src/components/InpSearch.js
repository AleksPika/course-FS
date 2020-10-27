import React from 'react'

const InpSearch = ({ type, value, onChange }) => {
    return (
        <div className="form-group">
            <label>Find countries:</label>
            <input className="form-control" 
                type={type}
                value={value}
                onChange={onChange}
            />
        </div>
    )
}
export default InpSearch