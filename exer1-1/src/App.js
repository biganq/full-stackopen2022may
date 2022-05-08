// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = 'Fundamentals of React'
//   const exercises1 = 10
//   const part2 = 'Using props to pass data'
//   const exercises2 = 7
//   const part3 = 'State of a component'
//   const exercises3 = 14

//   const Header = () =>{
//     return(
//       <div>
//         <h1>{course}</h1>
//       </div>
//     )
//   }

//   const Part = (props) =>{
//     return(
//       <div>
//         <p>{props.part} {props.exercises}</p>
//       </div>
//     )
//   }

//   const Total = () =>{
//     return(
//       <div>
//         Number of exercises is {exercises1+exercises2+exercises3}
//       </div>
//     )
//   }

//   return (
//     <div>
//       <Header />
//       <Part part={part1} exercises={exercises1} />
//       <Part part={part2} exercises={exercises2} />
//       <Part part={part3} exercises={exercises3} />
//       <Total />
//     </div>
//   )
// }
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  const Header = (props) =>{
    return(
      <div>
        <h1>{props.course.name}</h1>
      </div>
    )
  }
  
  const Content = (props) =>{
    return(
      <div>
        <p>{props.parts[0].name}</p>
        <p>{props.parts[1].name}</p>
        <p>{props.parts[2].name}</p>
      </div>
    )
  }
  const Total = (props) =>{
    return(
      <div>
        <p>{props.parts[0].exercises+props.parts[1].exercises+props.parts[2].exercises}</p>
      </div>
    )
  }
  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}
export default App;
