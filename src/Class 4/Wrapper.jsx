import { useState } from "react"

function Wrapper(){
    let [status,setStatus]=useState(false);
    console.log(status);
    return(
        <>
            {/* Element show when status is true */}

            {/* ternary operator is used when you have work on two statements */}
            {/* {(status)?"Element is Present When Status is True":""} */}

            {/* Wrapper Elememt is used when you have to work on single Statement*/}
            {status && "Element is Present When Status is True"}
            <button onClick={()=>{setStatus(!status)}}>Update</button>
        </>
    )
}

export default Wrapper;