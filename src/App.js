import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      {/* <Counter></Counter> */}
      <ExternalUsers></ExternalUsers>
    </div>
  );
}
function ExternalUsers (){
  const [users, setUsers] = useState([]);
  // useEffect( ()=>{}, [])
  useEffect( () =>{
    
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))

  }, []);

  return (
    <div>
      <h2>External Users</h2>
      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      }
    </div>
  )
}

function User(props){
  return (
    <div style={{border: '2px solid red', margin:'20px', backgroundColor: 'lightblue'}}>
      <h3>Name: {props.name}</h3>
      <p>Email: {props.email}</p>
    </div>
  )
}

function user(props){
  return(
    <div>
      <h2>Name: {props.name}</h2>
      <p>Email: {props.email}</p>
    </div>
  )
}

function Counter () {
  const [count,setCount] = useState(0);
  const increaseCounter = () => setCount(count+1);
  const decreaseCounter = () => setCount(count-1);
  return(
    <div>
    <h1>Count:{count}</h1>
    <button onClick={increaseCounter}>Increase</button> <br></br>
    <button onClick={decreaseCounter}>decrease</button>
    </div>
  )
}

// function App() {
//   const products =[{name: 'laptop',price: '30000'},
//                    {name: 'mobile',price: '12000'},
//                    {name: 'watch',price: '5000'}]
//   return (
//       products.map(product => <Product name={product.name} price={product.price}></Product>)    
//   )
// }
// function Product (props){
//   return(
//     <div className='product'>
//       <h4>Product: {props.name}</h4>
//       <p>Price: {props.price}</p>
//     </div>
//   )
// }
export default App;
