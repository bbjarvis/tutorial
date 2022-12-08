import ReactDom from 'react-dom'

//CSS
import './index.css'

// setup vars
const books = [
  {
    img: 'https://images-na.ssl-images-amazon.com/images/I/71PNGYHykrL._AC_UL600_SR600,400_.jpg',
    title: 'It Starts with Us: A Novel (Volume 2)',
    author: 'Colleen Hoover',
  },
  {
    img: 'https://images-na.ssl-images-amazon.com/images/I/51-j3rNPY0L._AC_UL600_SR600,400_.jpg',
    title:
      'Things To Do While You Poo On The Loo: Activity Book With Funny Facts, Bathroom Jokes, Poop Puzzles, Sudoku & Much More. Perfect Gag Gift.',
    author: 'Alex Smart',
  },
  {
    img: 'https://images-na.ssl-images-amazon.com/images/I/91OBt05JVeL._AC_UL600_SR600,400_.jpg',
    title: 'Guinness World Records 2023',
    author: 'Guinness World Records',
  },
]

function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book book={book}></Book>
      })}
    </section>
  )
}
// destructring props, note that "children" is a specail name that refers to children elements
const Book = (props) => {
  const { img, title, author, children } = props.book
  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {children}
    </article>
  )
}

ReactDom.render(<BookList />, document.getElementById('root'))
