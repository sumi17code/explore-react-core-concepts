
// export default function Todo ({task, isDone}) {

//     return (
//         <li style={{color: 'red', listStyle: 'none'}}>Task : {task} {isDone}</li>
//     )
// }
// export default function Todo ({task, isDone}) {

//     if (isDone === true){
//          return (
//         <li style={{color: 'red', listStyle: 'none'}}>Task : {task}</li>
//     )
//     }
//     else{
//         return(
//             <li style={{color: 'red', listStyle: 'none'}}>Pending: {task}</li>
//         )
//     }

   
// }


// export default function Todo ({task, isDone, time = 0}) {

//     if(isDone === true){
//         return (
//         <li style={{color: 'red', listStyle: 'none'}}>Task : {task} Duration: {time}</li>
//     )
//     }
//     return <li style={{color: 'red', listStyle: 'none'}}>To be done : {task}</li>


// }

// conditional rendering : 3 ternary
// condition ? true : false

// export default function ToDo ({task, isDone, time = 0}){
//     return isDone ? 
//         <li>Done : {task} time: {time}</li> 
//             : 
//         <li>Not Done : {task}</li>
// }

// conditional rendering: 4 && 

// export default function ToDo ({task, isDone, time = 0}){
//     return isDone && <li>Done Task : {task} time = {time} </li>
// }

// conditional rendering : 5 ||

// export default function ToDo ({task, isDone, time = 0}){
//     return isDone || <li>Done Task : {task} time = {time} </li>
// }



// export default function Todo ({task, isDone}) {

//     if (isDone === true){
//          return null
//     }
//     else{
//         return(
//             <li style={{color: 'red', listStyle: 'none'}}>Pending: {task}</li>
//         )
//     }
// }

// conditional rendering : 6 use variable

// export default function Todo ({task, isDone, time}) {
//     const displayTime = time ? time : 100;
//     let listItem;

//     if (isDone === true){
//          return(
//         listItem = <li style={{color: 'red', listStyle: 'none'}}>Task : {task} time : {displayTime}</li>
//     )
//     }
//     else{
        
//             listItem = <li style={{color: 'red', listStyle: 'none'}}>Pending: {task}</li>
        
//     }
//     return listItem;
// }
export default function Todo ({task, isDone, time}) {
    // const displayTime = time ? time : 100;
    let listItem;

    if (isDone === true){
         return(
        listItem = <li style={{color: 'red', listStyle: 'none'}}>Task : {task} , time : {time ? 'I am done' : 'not done yet'}</li>
    )
    }
    else{
        
            listItem = <li style={{color: 'red', listStyle: 'none'}}>Pending: {task}</li>
        
    }
    return listItem;
}

