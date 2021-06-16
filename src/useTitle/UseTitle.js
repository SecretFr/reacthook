import React, {useState, useEffect, Fragment} from 'react';

const useTitle = (initialTitle) => {
    const [title, setTitle] = useState(initialTitle);
    const updateTitle =()=>{
        const htmlTitle = document.querySelector("title")
        htmlTitle.innerHTML = title;
    }   
    useEffect(updateTitle, [title])
    // console.log("setTitle",setTitle)
    return setTitle
}

export default function UseTitle(){
    const titleUpdater = useTitle("Loading....");
    //titleUpdater = setTitle()
    
    setTimeout(() => titleUpdater("Home"), 5000)
    
    return(
        <Fragment>

        </Fragment>
    )
}
