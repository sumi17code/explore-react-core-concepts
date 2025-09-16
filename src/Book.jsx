
export default function Book({book}){
    console.log('book', book)
    return(
        <li>Name: {book.name} <br />
          Price: {book.price}
        </li>
    )
}