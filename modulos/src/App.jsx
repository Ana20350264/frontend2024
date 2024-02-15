import ListItem from "./ListItem"

const links = [
  {
    name:'Google',
    url:'https://google.com'
  },
  {
    name:'Facebook',
    url:'https://facebook.com'
  },
  {
    name:'Twitter',
    url:'https://twitter.com'
  },
  {
    name:'GitHub',
    url:'https://github.com'
  }
]
function App() {

  return (
      <div>
        <h1>Links</h1>
        <hr/>
        <ul>
          {
          links.map((link) => (
            <ListItem 
            
            key={link.name}
            name={link.name}
            url={link.name}
            
            />
          ))
          

        //  links.map((link) =>(
        //    <li key = {link.name}>
        //    <a href="{link.ur">{link.name} </a>
        //    </li>
        //  ))

          }
        </ul>
      </div>
  )
}

export default App
