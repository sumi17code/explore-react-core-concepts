
import './App.css'

function App() {
   return (
    <>
   
      <h1>React Core Concepts</h1>
      {/* <Person></Person>
      <Person></Person>
      <Sports></Sports>
      <Person></Person> */}
      <Sports></Sports>
      <Sports></Sports>
      
      <Car></Car>

      <Students name = "Shahil" dept = 'CSE'></Students>
      <Students name = "Mishu" dept = "EEE"></Students>
      <Students name = "Shishu" dept = "English" ></Students>
        {/* with props here data can be added dynamically */}

      <Person></Person>

      <Player name = "Tamim" run = "5000"></Player>
      
    </>
  )
}

function Students (Props) {
  console.log(Props)
  // Props is an object. Props is ready only. we can not change props value. with this we can pass data from one component to another component.

  return (
    <div className='student'>

    {/* here style added from external css file */}

      <h2>Name: {Props.name} </h2>
      <h2>Dept: {Props.dept}</h2>
    </div>

  )
}


function Person() {
  

 
  const age = 20;
  const name = 'Shahil';

   const personStyle = {
    border : '2px solid red',
    margin : '10px',
    borderRadius : '15px',
    textAlign : 'center',
    color : 'blue',
    padding : '20px'
  
  }
  // style can be added like this also.

  return(
    <p style={personStyle}>I am a Person: {name} {age}</p>
  )
}

function Car() {
  return (
    <div style={{ border: '2px dashed blue', margin: '10px', padding: '20px', borderRadius: '15px', textAlign: 'center'}}>    

      {/* style can be added like this */}

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


function Player ({name, run}) {
  return (
    <div className='student'>
      <h4>Name : {name}</h4>
      <p>Total run : {run}</p>
    </div>
  )
}

export default App
