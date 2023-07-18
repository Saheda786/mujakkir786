import logo from './logo.svg';
import './App.css';
import ExpenseItem from './Components/ExpenseItem';
import  events from  "./Assets/events.png";
import  components from  "./Assets/components.png";
import  keyconcepts  from  "./Assets/keyconcepts.png";
import  state from  "./Assets/state.png";
import Picture from "./Components/Picture";

function App() {
  const concepts = [
    {
      title: 'Components',
      image: components,
      description:
        'Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Components can receive data via props, and they can render dynamic output using JSX.',
    },
    {
      title: 'State',
      image: state,
      description:
        'State is data that may change over time. As it changes, the UI should be updated to reflect the updated data. Each component can maintain its own state and multiple components can share state.',
    },
    {
      title: 'Events',
      image: events,
      description:
        'Event handlers are added via props to (built-in) components. You pass functions as values to such event handlers to control which functions gets executed for which event.',
    },
  ];
  
  const pictures=[
    {
     
      pic: components
    },
    {
     
      pic: events
    },
    {
    
      pic: keyconcepts
    },
    {
  
      pic:state

    }

  ]
  return (
    <div className="App">
      <header className="App-header">
      <img src={keyconcepts} alt="Medal badge with a star" />
        <h1>Key React Concepts</h1>
        <p>Selected key React concepts you should know about</p>
        <ul  id="concepts">   
        <li  className="concept">
        <Picture  img={concepts[0].image}  title={concepts[0].title} description={concepts[0].description} ></Picture>
        
        </li>
        <li  className="concept">
        <Picture  img={concepts[1].image}   title={concepts[1].title} description={concepts[1].description}></Picture>
        </li>
        <li  className="concept">
        <Picture  img={concepts[2].image}  title={concepts[2].title} description={concepts[2].description} ></Picture>
      
        </li>
    
    
        
        </ul>
      </header>
    </div>
  );
}

export default App;
