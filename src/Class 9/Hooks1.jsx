import React, { useEffect, useReducer, useRef, useState } from 'react'

let intialState={count:0};

const Hooks1 = () => {

    let [count,setCount]=useState(0);

    let updateRef=useRef(); // create

    // function handleClick(){
    //     setCount(count+1);
    // }

    // let a=useRef(0);
    // console.log(a.current);
    // useRef hook means it will create mutable re-renders

    // useEffect(()=>{
    //     console.log("I am rendering again");
    //     a.current=a.current+1;
    //     console.log(a) 
    // }) // with no dependency

    // function change(){
    //     // console.log(updateRef.current);
    //     updateRef.current.style.backgroundColor="red";    
    //     updateRef.current.style.width="600px";
    //     updateRef.current.style.height="600px";
        
    // }

    
    let[state,dispatch]=useReducer(reducer,intialState)

    function reducer(state,action){
        console.log(action)

        switch(action.type){
            case "increase":
                return({count:state.count+1});
            case "decrease":
                return({count:state.count-1});
        }
    }
    function incCount(){
        dispatch({type:"increase"})
    }
    
    function decCount(){
        dispatch({type:"decrease"})
    }
  return (
    <div>
      <h1>useRef</h1>
      <h1>useReducer</h1>

      {/* <h1>useRef</h1> */}
      {/* Mutable re renders
          Dom Elements Edit
      */}

      {/* <h2>Count: {count}</h2>
      <button onClick={handleClick}>Increase Count</button> */}
{/* 
        <div ref={updateRef} style={{border:"2px solid black",width:"300px",height:"300px"}}>

        </div>

        <button onClick={change}>Change Background</button> */}

        <h1>Use Reducer</h1>

        <button onClick={incCount}>Increase</button>  
            {state.count}
        <button onClick={decCount}>Decrease</button>

    </div>
  )
}

export default Hooks1
