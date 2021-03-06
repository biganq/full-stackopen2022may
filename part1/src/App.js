// const App = () =>{
//   const now = new Date()
//   const a = 10
//   const b = 20
//   return(
//     <div>
//       <p>Hello world,it is {now.toDateString()}</p>
//       <p>
//         {a} plus {b} is {a+b}
//       </p>
//     </div>
//   )
// }

// const Hello = () =>{
//   return(
//     <div>
//       <p>Hello world!</p>
//     </div>
//   )
// }

// const App = () =>{
//   return(
//     <div>
//       <h1>Greeting</h1>
//       <Hello />
//       <Hello />
//       <Hello />
//     </div>
//   )
// }

// const Hello = (props)=>{
//   return(
//     <div>
//       <p>Hello {props.name},you are {props.age} years old</p>
//     </div>
//   )
// }
// const App = () =>{
//   const name = "niuli"
//   const age = 18
//   return(
//     <div>
//       <h1>Greeting</h1>
//       <Hello name={name} age={age}/>
//       <Hello name="anqi" age={23} />
//     </div>
//   )
// }

// const Hello = (props) => {
//   const {name,age} = props
//   const bornYear = () =>{
//     const year = new Date().getFullYear()
//     return year-age
//   }
//   return (
//     <div>
//       <p>
//         Hello {name}, you are {age} years old.
//         So you were born in {bornYear()}
//       </p>
//     </div>
//   )
// }

// const App = () => {
//   const name = 'Peter'
//   const age = 10

//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello name="Maya" age={26 + 10} />
//       <Hello name={name} age={age} />
//       <Hello name="liudehua" age={55} />
//     </div>
//   )
// }
import { useState } from "react";
// const App = (props) =>{
//   const {counter} = props
//   const [counters,setCounters] = useState(counter)
//   setTimeout(() => {
//     setCounters(counters+1)
//   }, 1000);
//   console.log("rerendering..."+counters)
//   return(
//     <div>
//       <h1>{counters}</h1>
//     </div>
//   )
// }
// const App = () =>{
//   const [counter,setCounter] = useState(0)
//   const increaseByOne = () =>{
//     console.log("clicked")
//     setCounter(counter+1)
//   }
//   const setToZero = () =>{
//     setCounter(0)
//   }
//   const decreaseByOne = ()=>{
//     setCounter(counter-1)
//   }
//   const Display = (props) =>{
//     const counter = props.counter
//     return(
//       <div>
//         {counter}
//       </div>
//     )
//     }
//   const Button = (props) =>{
//     const {onClick,text} = props
//     return(
//       <div>
//         <button onClick={onClick}>{text}</button>
//       </div>
//     )
//   }
//   return(
//     <div>
//       <Display counter={counter} />
//       <Button onClick={increaseByOne} text="plus" />
//       <Button onClick={setToZero} text="zero" />
//       <Button onClick={decreaseByOne} text = "minus"/>
//     </div>
//   )
// }
// const App = () =>{
//   const [left,setLeft] = useState(0)
//   const [right,setRight] = useState(0)

//   return(
//     <div>
//       <span>left:{left}</span><span>right:{right}</span>
//       <button onClick={()=>setLeft(left+1)}>left+1</button>
//       <button onClick={()=>setRight(right+1)}>right+1</button>
//     </div>
//   )
// }

// const History = (props) =>{
//   const {allClicks} = props
//   if (allClicks.length===0){
//     return (
//       <div>
//         the app is used by pressing the buttons
//       </div>
//     )
//   }else{
//     return(
//       <div>
//         the button History is :{allClicks.join(" ")}
//       </div>
//     )
//   }

// }

// const Button = (props) =>{
//   const {text,onClick} = props
//   return(
//     <div>
//       <button onClick={onClick}>{text}</button>
//     </div>
//   )
// }

// const App = () =>{
//   const [left,setLeft] = useState(0)
//   const [right,setRight] = useState(0)
//   const [allClicks,setAll] = useState([])

//   const handleLeft = () =>{
//     setLeft(left+1)
//     setAll(allClicks.concat("L"))
//   }
//   const handleRight = () =>{
//     setRight(right+1)
//     setAll(allClicks.concat("R"))
//   }
//   return(
//     <div>
//       <p>left:{left}</p><p>right:{right}</p>
//       <Button onClick={handleRight} text={"right"} />
//       <Button onClick={handleLeft} text={"left"} />
//       <History allClicks={allClicks} />
//     </div>
//   )
  
// }
const App = () => {
  const [value, setValue] = useState(10)

  const hello = (who) => {
    const handler = () => {
      console.log('hello', who)
    }
    return handler
  }

  return (
    <div>
      {value}
      <button onClick={hello('world')}>button</button>
      <button onClick={hello('react')}>button</button>
      <button onClick={hello('function')}>button</button>
    </div>
  )
}

export default App;
