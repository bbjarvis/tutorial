export const Book = ({ img, title, author, children }) => {
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
