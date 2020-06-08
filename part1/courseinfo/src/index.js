import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content parts={[part1, part2, part3]} exercises={[exercises1, exercises2, exercises3]} />
      <Total exercises = {[exercises1, exercises2, exercises3]} />
    </div>
  )
}

const Header = ({course}) => {
  return (
    <h1>{course}</h1>
  )
}

const Content = ({parts, exercises}) => {
  let [part1, part2, part3] = parts
  let [exercises1, exercises2, exercises3] = exercises
  return (
    <div>
      <Part part={part1} exercise={exercises1}/>
      <Part part={part2} exercise={exercises2}/>
      <Part part={part3} exercise={exercises3}/>
    </div>
  )
}

const Part = ({part, exercise}) => {
  return (
    <p>
      {part} {exercise}
    </p>
  )
}

const Total = ({exercises}) => {
  const reducer = (accumulator, currentValue) => accumulator + currentValue

  return (
    <p>
      {`Number of exercises ${exercises.reduce(reducer, 0)}`}
    </p>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

