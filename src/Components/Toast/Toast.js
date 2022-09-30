import React, { useState, forwardRef , useImperativeHandle } from 'react';
import './Toast.css'

const  Toast = forwardRef((props , ref) => {


    const [showTostbar, setTostbar] = useState(false);

    useImperativeHandle(ref,()=> ({
        show(){
            setTostbar(true);
            setTimeout(()=> {
                setTostbar(false)
            },3000);
        }
    }));

    return (
        <div className='toast' id={showTostbar ? "show" : "hide"} style={{backgroundColor: props.type === "success" ? "#00F593" : "#FF0033"}}>
            <div className="symbol">
                {props.type === 'success' ? <h1>&#x2713;</h1> : <h1>&#x2613;</h1>}
            </div>
            <div className="message">{props.message}</div>
        </div>
    );
});

export default Toast;