import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { Hello, Hello1, Hello2 } from "./App1";
import Card from "./Card";
import State from "./Class 2/State";
import State1 from "./Class 3/State1";
import Form from "./Class 4/Form";
import Wrapper from "./Class 4/Wrapper";
import Form1 from "./Class 5/Form1";
import Routing from "./Class 6/Routing";
import Courses from "./Class 6/Courses";
import Contactus from "./Class 6/Contactus";
import UIUX from "./Class 6/UIUX";
import Frontend from "./Class 6/Frontend";
import Backend from "./Class 6/Backend";
import Dashboard from "./Class 6/Dashboard";
import Navbar from "./Class 7/Navbar";
import NotFound from "./Class 7/NotFound";
import StudentDetail from "./Class 7/StudentDetail";
import Hooks from "./Class 8/Hooks";
// import Dashboard from "./Redux1/components/Dashboard";
import 'bootstrap/dist/css/bootstrap.min.css';
import MainComponent from "./Class 8/MainComponent";
import { createContext, useState } from "react";
import ThemeProvider from "./Class 8/context/ThemeProvider";
import Hooks1 from "./Class 9/Hooks1";
import Doubt from "./Doubts/Doubt";
import Intro from "./FramerMotion/Intro";
import Home from "./Project1/Home";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount, reset } from "./redux/Feature/CounterSlice";
import Dashboard1 from "./Redux1/components/Dashboard";
import Cart from "./Redux1/components/Cart";
import RootLayout from "./Redux1/components/RootLayout";

// creation of context
export const DataContext=createContext()

function App(){
  const router=createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route index element={<Dashboard1/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
    </Route>
  ))
  // let [amount,setAmount]=useState(0)
  // const s={
  //   backgroundColor:"red"
  // }
  // let age=20; // variable
  // let option=["Hitech","Durable","Money Saving"]

  // let option2={
  //   a:"Super",
  //   b:"Fantastic",
  //   c:"Hitech"
  // }


  // let router=createBrowserRouter(
  //   [
  //     {
  //       path:'/',
  //       element: <><Navbar/> <Routing/></> 
  //     },
  //     {
  //       path:"/courses",
  //       element:<><Navbar/> <Courses/></>,
  //       children:[
  //         {
  //           path:"uiux",
  //           element:<UIUX/>
  //         },
  //         {
  //           path:"frontend",
  //           element:<Frontend/>
  //         },
  //         {
  //           path:"backend",
  //           element:<Backend/>
  //         }
  //       ]
  //     },
  //     {
  //       path:'/dashboard',
  //       element:<><Navbar/> <Dashboard/></>
  //     },
  //     {
  //       path:"/contactus",
  //       element:<><Navbar/> <Contactus/></>
  //     },
  //     {
  //       path:"*",
  //       element:<NotFound/>
  //     },
  //     {path:'/student/:id',
  //       element:<><Navbar/><StudentDetail/></>

  //     }
  //   ]
  // )

  // let detail={
  //   name:"Ayush",
  //   city:"GZB"
  // }

  // function incCount(){
  //   dispatch(increment());
  // }

  // function decCount(){
  //   dispatch(decrement())
  // }

  // function resetCount(){
  //   dispatch(reset())
  // }

  // function update(){
  //   dispatch(incrementByAmount(amount))
  // }

  // const count=useSelector((state)=> state.counter.value)
  // const dispatch=useDispatch();

  return(
    <>
      {/* <Hello/>
      <Hello1/>
      <Hello2/> */}

      {/* {}: for writing js in html */}
      {/* <h1>My name is Yash and my age is {age}</h1> */}


      {/* <Card name="Iphone" price={50000} variant="15" rating={5} features={option[0]} features2={option2.a}/>
      <Card name="Google" price={50000} variant="8" rating={4.5} features={option[1]} features2={option2.b}/>
      <Card name="Oneplus" price={50000} variant="9 Pro" rating={5} features={option[2]} features2={option2.c}/> */}
      {/* <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/> */}
      {/* <h1 style={{backgroundColor:"blue"}}>Hii</h1> */}

      {/* <State/> */}

      {/* <State1/> */}

      {/* <Wrapper/> */}

      {/* <Form/> */}

      {/* <Form1/> */}
      
      {/* <RouterProvider router={router} /> */}
      {/* <Navbar/> */}

      {/* <Hooks/> */}
      {/* <DashBoard/> */}

      {/* Provide  */}
      {/* <DataContext.Provider value={detail}>  
      <MainComponent/>
      </DataContext.Provider> */}

      {/* <ThemeProvider/> */}

      {/* <Hooks1/> */}

      {/* <Doubt/>*/}

      {/* <Intro/> */}

      {/* <Home/> */}

      {/* <button onClick={incCount}>+</button>
      <br /><br />
        <h1>Count:{count}</h1>
        <br /><br />
        <button onClick={decCount}>-</button>
        <br />
        <button onClick={resetCount}>Reset</button>
        <br />
        <input type="number"
          value={amount}
          placeholder="Enter Amount"
          onChange={(e)=>{setAmount(e.target.value)}}
        />
        <button onClick={update}>Update</button> */}

       <RouterProvider router={router}/>
    </>
  )
}

export default App;