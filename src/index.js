import ReactDom from 'react-dom'

function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  )
}

const Person = () => <h2>John doe</h2>
const Message = () => {
  return <p>this is a message</p>
}
ReactDom.render(<Greeting />, document.getElementById('root'))
