
export default function Todo ({task, isDone}) {

    return (
        <li style={{color: 'red', listStyle: 'none'}}>Task : {task} {isDone}</li>
    )
}

