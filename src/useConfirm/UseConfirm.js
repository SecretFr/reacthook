import React, {useState, useEffect, useRef, Fragment} from 'react';
//사용자가 뭐 하기 전에 확인

const useConfirm = (message = "", onConfirm, onCancel) => {
    if(!onConfirm || typeof onConfirm !== 'function'){
        return;
    }
    if(onCancel && typeof onCancel !== 'function'){
        return;
    }
    const confirmAction = () => {
        if(window.confirm(message)){
            onConfirm();
        }else{
            onCancel();
        }
    }
    return confirmAction;
}

export default function UseConfirm(){
    const deleteWorld = () => {
        console.log("Deleting the World!...");
    }
    const abort =()=>{
        console.log("Aborting");
    }
    const confirmDelete = useConfirm("Are you sure?", deleteWorld, abort);
    return(
        <Fragment>
            <button onClick={confirmDelete}>Delete the world</button>
        </Fragment>
    )
}
