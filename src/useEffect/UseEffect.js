import React, {useState, useEffect, Fragment} from 'react';

export default function UseEffect(){
    const sayHello = () => console.log("hello")

    //componentDidMount, componentDidUpdate, componentWillUnMount 역할을 함
    const [number, setNumber] = useState(0);
    const [aNumber, setAnumber] = useState(0);
    useEffect(sayHello,[number]);

    return(
        <Fragment>
            <button onClick={()=>setNumber(number+1)}>{number}</button>
            <button onClick={()=>setAnumber(aNumber+1)}>{aNumber}</button>

        </Fragment>
    )
}
