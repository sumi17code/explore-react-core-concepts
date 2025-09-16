
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


export default function Todo ({task, isDone, time = 0}) {

    if(isDone === true){
        return (
        <li style={{color: 'red', listStyle: 'none'}}>Task : {task} Duration: {time}</li>
    )
    }
    return <li style={{color: 'red', listStyle: 'none'}}>To be done : {task}</li>


}

