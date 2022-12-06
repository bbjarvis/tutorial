import ReactDom from 'react-dom'

//CSS
import './index.css'

// setup vars
const firstBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/71PNGYHykrL._AC_UL600_SR600,400_.jpg',
  title: 'It Starts with Us: A Novel (Volume 2)',
  author: 'Colleen Hoover',
}
const secondBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/51-j3rNPY0L._AC_UL600_SR600,400_.jpg',
  title:
    'Things To Do While You Poo On The Loo: Activity Book With Funny Facts, Bathroom Jokes, Poop Puzzles, Sudoku & Much More. Perfect Gag Gift.',
  author: 'Alex Smart',
}

function BookList() {
  return (
    <section className='booklist'>
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, est
          voluptates. Delectus sapiente vero sed laboriosam obcaecati,
          accusantium est! Similique earum at dolor saepe, alias quibusdam
          itaque iste ratione molestias.
        </p>
      </Book>
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      ></Book>
    </section>
  )
}
// destructring props, note that "children" is a specail name that refers to children elements
const Book = ({ img, title, author, children }) => {
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
