import { useState } from 'react';

function Traffic(props) {

    const style = {
        background: props.fondo,
    }

    return (
        <div className="container">
            <button type="button" className={props.fondoActive ? 'shadowLight formLight' : 'formLight'} style={style}
                onClick={props.onClick}></button>
        </div>
    )

}

export default Traffic;