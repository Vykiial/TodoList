import Button from './Button'

const Header = (props) => {
      
  return (
    <header className = 'header'>
        <h1>{props.title}</h1>
        <Button 
            onClick={props.onAdd} 
            color='black' 
            text={!props.showAdd ? 'Add Task' : 'Close'}
        />
    </header>
  )
}

Header.defaultProps = {
    title: 'Task Tracker'
}
// // const headingStyle = { 
// //     color: 'red',
// //     backgroundColor: 'black',
// }

export default Header