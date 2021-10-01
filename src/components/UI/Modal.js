import React from 'react';
import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';



const ModalOverlay = (props) =>{
    return(
        <div className={classes.modal}>
            <div className={classes.content}>
                {props.children}
            </div>
        </div>
    )
};

const BackDrop = (props) => {
return(
<div className={classes.backdrop} onClick={props.hide} /> 
)
};


function Modal(props) {
    
    return (
      <Fragment>
        {ReactDOM.createPortal(<BackDrop hide={props.hide}/>,document.getElementById('overlays'))}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,document.getElementById('overlays'))}
      </Fragment>
    )
}

export default Modal
