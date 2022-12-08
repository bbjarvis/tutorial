import ReactDom from 'react-dom'

//CSS
import './index.css'

// setup vars
const books = [
  {
    id: 1,
    img: 'https://images-na.ssl-images-amazon.com/images/I/71PNGYHykrL._AC_UL600_SR600,400_.jpg',
    title: 'It Starts with Us: A Novel (Volume 2)',
    author: 'Colleen Hoover',
  },
  {
    id: 2,
    img: 'https://images-na.ssl-images-amazon.com/images/I/51-j3rNPY0L._AC_UL600_SR600,400_.jpg',
    title:
      'Things To Do While You Poo On The Loo: Activity Book With Funny Facts, Bathroom Jokes, Poop Puzzles, Sudoku & Much More. Perfect Gag Gift.',
    author: 'Alex Smart',
  },
  {
    id: 3,
    img: 'https://images-na.ssl-images-amazon.com/images/I/91OBt05JVeL._AC_UL600_SR600,400_.jpg',
    title: 'Guinness World Records 2023',
    author: 'Guinness World Records',
  },
]

function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book {...book} key={book.id}></Book>
      })}
    </section>
  )
}
// destructring props, note that "children" is a specail name that refers to children elements
const Book = ({ img, title, author, children }) => {
  // attribute, eventHandler
  // onClick, onMouseOver
  const complexExample = (e) => {
    console.log(e)
    console.log(e.target)
  }
  return (
    <article
      className='book'
      onMouseOver={() => {
        console.log(title)
      }}
    >
      <img src={img} alt='' />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type='button' onClick={complexExample}>
        complex example
      </button>
    </article>
  )
}

ReactDom.render(<BookList />, document.getElementById('root'))
