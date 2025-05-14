import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
import DashBoard from "./Class 8/DashBoard";
import 'bootstrap/dist/css/bootstrap.min.css';
import MainComponent from "./Class 8/MainComponent";
import { createContext } from "react";
import ThemeProvider from "./Class 8/context/ThemeProvider";
import Hooks1 from "./Class 9/Hooks1";
import Doubt from "./Doubts/Doubt";

// creation of context
export const DataContext=createContext()

function App(){
  const s={
    backgroundColor:"red"
  }
  let age=20; // variable
  let option=["Hitech","Durable","Money Saving"]

  let option2={
    a:"Super",
    b:"Fantastic",
    c:"Hitech"
  }

  let router=createBrowserRouter(
    [
      {
        path:'/',
        element: <><Navbar/> <Routing/></> 
      },
      {
        path:"/courses",
        element:<><Navbar/> <Courses/></>,
        children:[
          {
            path:"uiux",
            element:<UIUX/>
          },
          {
            path:"frontend",
            element:<Frontend/>
          },
          {
            path:"backend",
            element:<Backend/>
          }
        ]
      },
      {
        path:'/dashboard',
        element:<><Navbar/> <Dashboard/></>
      },
      {
        path:"/contactus",
        element:<><Navbar/> <Contactus/></>
      },
      {
        path:"*",
        element:<NotFound/>
      },
      {path:'/student/:id',
        element:<><Navbar/><StudentDetail/></>

      }
    ]
  )

  let detail={
    name:"Ayush",
    city:"GZB"
  }

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

      <Doubt/>
    </>
  )
}

export default App;