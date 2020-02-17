import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({ name }) => (
  <h1>{name}</h1>
)

const Contents = ({ parts }) => (
  <div>
    <Part name={parts[0].name} exercises={parts[0].exercises}/>
    <Part name={parts[1].name} exercises={parts[1].exercises}/>
    <Part name={parts[2].name} exercises={parts[2].exercises}/>
  </div>
)

const Part = ({ name, exercises }) => (
  <p>{name} {exercises}</p>
)

const Total = ({ parts }) => (
  <p>Total {parts[0].exercises + parts[1].exercises + parts[2].exercises} exercises</p>
)

const App = () => {
  const course = {
    name: 'Superadvanced web and mobile programming',

    parts: [
      {
        name: 'Basics of React',
        exercises: 8
      },
      {
        name: 'Using props',
        exercises: 10
      },
      {
        name: 'Component states',
        exercises: 12
      }
    ]
  }

  return (
    <div>
      <Header name={course.name} />
      <Contents parts={course.parts} />
      <Total parts={course.parts}/>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)