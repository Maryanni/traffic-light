import { useState } from 'react';

function Traffic(props) {
    const [shadow, setShadow] = useState(false);

    const style = {
        background: props.fondo,
    }

    return (
        <div className="container">
            <button type="button" className={shadow === true ? 'shadowLight formLight' : 'formLight'} style={style}
                onClick={() =>
                    setShadow(!shadow)
                }></button>
        </div>
    )

}

export default Traffic;