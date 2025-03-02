import React from 'react'

export default function Alert(props) {
    const capitalize = (word) =>{
        const Lower = word.toLowerCase();
        return Lower.charAt(0).toUpperCase() + Lower.slice(1);
    }
    return (
        <>
            {props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>}
        </>
    )
}
