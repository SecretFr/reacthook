import React, {useState, useEffect, useRef, Fragment} from 'react';

const useClick = onClick => {
    // if(typeof onClick !== 'function'){
    //     return;
    // }
    const element = useRef();
    useEffect(()=>{
        // const element = ref.current
        if(element.current){
            element.current.addEventListener("click", onClick);
        }
        //componentWillUnMount 일때 실행
        return () => {
            if(element.current){
                element.current.removeEventListener("click", onClick);
            }
        }
    },[])
    return element
}

export default function UseClick(){
    //useRef는 getelementgetbyid와 같은것
    // const potato = useRef();

    // //? -> mount 되고나서 실행
    // setTimeout(() => potato.current?.focus(), 5000)
    const sayHello = () => console.log("say Hello");
    // const onClick = useClick(sayHello)
    const title = useClick(sayHello);
    return(
        <Fragment>
            <h1 ref={title}>HI</h1>
            {/* <input ref={potato} placeholder="la"/> */}
        </Fragment>
    )
}
