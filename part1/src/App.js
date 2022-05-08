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

const Hello = (props)=>{
  return(
    <div>
      <p>Hello {props.name},you are {props.age} years old</p>
    </div>
  )
}
const App = () =>{
  const name = "niuli"
  const age = 18
  return(
    <div>
      <h1>Greeting</h1>
      <Hello name={name} age={age}/>
      <Hello name="anqi" age={23} />
    </div>
  )
}


export default App;
