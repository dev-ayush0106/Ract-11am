import { Hello, Hello1, Hello2 } from "./App1";
import Card from "./Card";
import State from "./Class 2/State";
import State1 from "./Class 3/State1";
import Form from "./Class 4/Form";
import Wrapper from "./Class 4/Wrapper";
import Form1 from "./Class 5/Form1";

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

      <Form1/>
    </>
  )
}

export default App;