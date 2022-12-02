import ReactDom from 'react-dom'

//CSS
import './index.css'

function BookList() {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <article className='book'>
      <Image />
      <Title />
      <Author />
    </article>
  )
}

const Image = () => (
  <img src='https://images-na.ssl-images-amazon.com/images/I/71PNGYHykrL._AC_UL300_SR300,200_.jpg' />
)

const Title = () => <h1>It Starts with Us: A Novel (Volume 2)</h1>

const Author = () => <h4>Colleen Hoover</h4>

ReactDom.render(<BookList />, document.getElementById('root'))
