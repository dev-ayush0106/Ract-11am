import { useState } from "react";
import './State1.css';
function State1(){
    let s={
        width:"300px",
        height:"300px",
        border:"2px solid black"
    }

    let [data,setData]=useState(0)
    let [value,setValue]=useState(false);
    console.log(data);
    console.log(value);

    function inc(){
        setData(data+1);
    }
    
    function dec(){
        setData(data-1);
        
    }
    
    function reset(){
        setData(0);

    }
    return(
        <>
            {/* <h1>Hello</h1> */}

            <div>{data}</div>
            <button onClick={dec}> - </button>
            <button onClick={inc}> + </button>
            <button onClick={reset}> Reset </button>
            <br /> <br />

            {(value)?"ClickEd True":"Clicked False"}
            <button onClick={()=>{setValue(!value)}}>Click</button>

            <br /> <br />

            <div style={{backgroundColor:(value)?"red":"blue"}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, voluptate!
            </div>

            <br /> <br />

            <div className={(value)?"box1":"box2"}>

            </div>

            <br /> <br />

            <div style={s}>

            </div>

        </>
    )
}

export default State1;