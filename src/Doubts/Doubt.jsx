import React, { useEffect, useReducer, useRef, useState } from 'react'


let initalState={count:0};
const Doubt = () => {

    // let [count,setCount]=useState(0);

    // let updateRef=useRef(); // create
    // useRef(): object {current:value}

    // let val=1; // reset
    // let val=useRef(0); // value ko persist(hold) do not change at re rendering
    // useEffect(()=>{
    //     val.current=val.current+1;
    //     // val+=1;
    //     console.log(val);
    // },[count]);
        // console.log(val);

    // function update(){
    //     console.log(updateRef)
    //     // updateRef.current.focus();
    //     updateRef.current.style.border="2px solid red"
    //     updateRef.current.style.height="200px"
    // }

    function reducer(state,action){
        console.log(action.type);
        switch(action.type){
            case "increase" : return({count:state.count+1})
            case "decrease" : return({count:state.count-1})
        }
    }

    function incCount(){
        dispatch({type:"increase"})
    }

    function decCount(){
        dispatch({type:"decrease"})
    }

    let [state,dispatch]=useReducer(reducer,initalState);
    console.log(state.count)

    return (
    <div>
      <h1>Doubt Session</h1>

      {/* useRef : Two Use
        -- creating mutable variable (secondary)
        -- updating dom elements (primary)
      */}

      {/* <button onClick={()=>{setCount(count+1)}}>+</button>
      <span>Count:{count}</span>
      <button onClick={()=>{setCount(count-1)}}>-</button> */}

        {/* create , link : using an attribute ref , update */}
      {/* <input type="text" ref={updateRef}/>
      <button onClick={update}>Update Input</button> */}

      {/* useReducer : it is hook to manage multiple state */}
      {/* let[state,dispatch]=useReducer(reducer,intialState) */}

      <button onClick={decCount}>-</button>
      <span>{state.count}</span>
      <button onClick={incCount}>+</button>
    </div>
  )
}

export default Doubt
