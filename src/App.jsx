import './App.css';
import Header from './MyComponents/Header.jsx';
import { Todos } from './MyComponents/Todos.jsx';
import { Footer } from './MyComponents/Footer.jsx';

function App() {
  const onDelete = () => {
    console.log("I am onDelete function");

  }
  let todos = [
    {
      sno: 1,
      title: "Go to the market",
      desc: "You need to go to the market to buy groceries"
    },
    {
      sno: 2,
      title: "Go to the mall ",
      desc: "You need to go to the market to buy groceries"
    },
    {
      sno: 3,
      title: "Go to the ghat",
      desc: "You need to go to the market to buy groceries"
    },



  ]
  return (
    <>
      <Header title="My Todos List" searchBar={true} />
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer />
    </>
  );
}

export default App
