import Button from './Button'
import App from '../App'

const Header = (props) => {
    const onClick = () => {
        console.log('hi');
        App.tasks.setTasks({
            id: 4,
            text: 'Take Dog Out',
            day: 'Feb 5th at 2:30pm',
            reminder: true,
        });
      }
      
  return (
    <header className = 'header'>
        <h1>{props.title}</h1>
        <Button onClick={onClick} color='green' text='Add'/>
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