import React, {Fragment} from 'react';

const usePreventLeave = () => {
    const listener = event => {
        event.preventDefault();
        event.returnValue = "";
    }
    const enablePrevent = () => window.addEventListener("beforeunload", listener)
    
    const disablePrevent = () => window.removeEventListener("beforeunload", listener)
    
    return {enablePrevent, disablePrevent}
}

export default function UsePreventLeave(){
    const {enablePrevent, disablePrevent} = usePreventLeave(); 
    console.log(enablePrevent)
    console.log(disablePrevent)

    return(
        <Fragment>
            <button onClick={enablePrevent}>Protect</button>
            <button onClick={disablePrevent}>Unprotect</button>

        </Fragment>
    )
}
