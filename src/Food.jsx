
// export default function Food({name}){
//     return(
//         <h2>Food: {name}</h2>
//     )
// }
// export default function Food({name, isEat}){

//     if(isEat === true){
//           return(
//         <h2>Food: {name} {isEat}</h2>
       
//     )
//     }
//     else{
//         <p>I will not eat : {isEat} </p>
//     }
  
// }
export default function Food({name, isEat}){

    if(isEat === false){
          return(
        <h2>Food: {name} {isEat}</h2>
       
    )
    }
    else{
        <p>I will not eat : {isEat} </p>
    }
  
}

