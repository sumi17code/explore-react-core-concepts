
import './App.css'

function App() {
   return (
    <>
   
      <h1>React Core Concepts</h1>
      {/* <Person></Person>
      <Person></Person>
      <Sports></Sports>
      <Person></Person>
      <Sports></Sports>
      <Sports></Sports>
      
      <Car></Car> */}

      <Students></Students>
      
    </>
  )
}

function Students () {
  return (
    <div className='student'>
      <h2>Name: </h2>
      <h2>Dept: </h2>
    </div>

  )
}


function Person() {
  console.log()
  const age = 20;
  const name = 'Shahil';
  return(
    <p>I am a Person: {name} {age}</p>
  )
}

function Car() {
  return (
    <div>
      <h2>Toyota</h2>
      <p>My Car is good</p>
      <p>A car, or automobile, is a wheeled motor vehicle designed to <br /> primarily transport people on roads, typically <br /> seating one to eight people and having four wheels.</p>
    </div>

  )
}

function Sports () {
  return (
    <div>
      <h3>Cricket</h3>
      <p>Playing and loosing</p>
      <ul>
        <li>Kabi</li>
        <li>Rohit</li>
      </ul>
    </div>
  )
}

export default App
