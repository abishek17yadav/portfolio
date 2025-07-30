// import React, { useState } from 'react';

// function ItemList() {
//   const [items, setItems] = useState([]);
//   const [inputValue, setInputValue] = useState('');

//   const addItem = () => {
//     if (inputValue) {
//       setItems([...items, inputValue]);
//       setInputValue('');
//     }
//   };

//   return (
//     <div>
//       <input 
//         type="text" 
//         value={inputValue} 
//         onChange={(e) => setInputValue(e.target.value)} 
//         placeholder="Add an item" 
//       />
//       <button onClick={addItem}>Add Item</button>
//       <ul>
//         {items.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ItemList;


// // App.js
// import './App.css';

// // import React, { useState, useEffect } from 'react';
// // import Hooks from './components/Hooks';
import Counter from './components/Counter';
// // import img from './images/download.jpg'
// import { BrowserRouter, Routes, Route } from 'react-router-dom';


// function App() {
//   return (
//     <div className="App">

//       <BrowserRouter>
//       <Routes>
//         <Route path='' element={Counter}>hii</Route>

//       </Routes>
//       </BrowserRouter>

//       {/* <Hooks></Hooks> */}

//       <Counter></Counter>


//       {/* <img src="https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/d8/08/94/c0/96/v1_E10/E104MXR6.jpg?w=800&cf_fit=scale-down&mark-alpha=18&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark4.png&q=85&format=auto&s=bd0033212f92c8adda044814f6e10ebb7e939f8d641233bb184a75cb0a374ed9" alt="" /> */}

//       {/* <img src={img} alt="" /> */}

//     </div>
//   );
// }

// export default App;
// import React from 'react';
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// function Home() {
//   return <h2>This is Home Page</h2>;
// }

// function About() {
//   return <h2>This is About Page</h2>;
// }

// function App() {
//   return (
//     <BrowserRouter>
//       <nav>
//         <Link to="/">Home</Link> | <Link to="/about">About</Link>
//         <Link to="/cc">contact</Link>
//       </nav>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/cc" element={<Counter />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }
// import { createStore } from 'redux';

// function counterReducer(state = { count: 0 }, action) {
//   if (action.type === 'INCREMENT') {
//     return { count: state.count + 1 };
//   } else if (action.type === 'DECREMENT') {
//     return { count: state.count - 1 };
//   }
//   return state;
// }

// const store = createStore(counterReducer);
// export default store;

// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';

// function App() {
//   const count = useSelector(function(state) {
//     return state.count;
//   });

//   const dispatch = useDispatch();

//   function increase() {
//     dispatch({ type: 'INCREMENT' });
//   }

//   function decrease() {
//     dispatch({ type: 'DECREMENT' });
//   }

//   return (
//     <div style={{ textAlign: 'center', marginTop: '50px' }}>
//       <h2>Redux Counter</h2>
//       <h3>Count: {count}</h3>
//       <button onClick={increase}>➕</button>{' '}
//       <button onClick={decrease}>➖</button>
//     </div>
//   );
// }

// export default App;


// import React, { useState } from 'react';

// function App() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [submitted, setSubmitted] = useState(false);

//   function handleNameChange(event) {
//     setName(event.target.value);
//   }

//   function handleEmailChange(event) {
//     setEmail(event.target.value);
//   }

//   function handleSubmit(event) {
//     event.preventDefault(); // prevents page reload
//     setSubmitted(true);
//   }

//   return (
//     <div style={{ textAlign: 'center', marginTop: '50px' }}>
//       <h2>Simple React Form</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <input 
//             type="text" 
//             placeholder="Enter your name" 
//             value={name} 
//             onChange={handleNameChange} 
//           />
//         </div><br />
//         <div>
//           <input 
//             type="email" 
//             placeholder="Enter your email" 
//             value={email} 
//             onChange={handleEmailChange} 
//           />
//         </div><br />
//         <button type="submit">Submit</button>
//       </form>

//       {submitted && (
//         <div style={{ marginTop: '20px' }}>
//           <h3>Form Submitted</h3>
//           <p><strong>Name:</strong> {name}</p>
//           <p><strong>Email:</strong> {email}</p>
//         </div>
//       )}
//     </div>
//   );
// }

export default App;

// import React, { useContext } from 'react';
// import { UserContext } from './UserContext'; // Assume it's defined in another file

// function Profile() {
//   const user = useContext(UserContext);
//   return <h2>Welcome, {user.name}</h2>;
// }

// export default App;
// import React, { useState, useEffect } from 'react';

// function App() {
//   const [users, setUsers] = useState([]); // to store API data

//   useEffect(function () {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then(function (response) {
//         return response.json(); // convert to JSON
//       })
//       .then(function (data) {
//         setUsers(data); // update state
//       })
//       .catch(function (error) {
//         console.log("Error fetching data:", error);
//       });
//   }, []); // empty [] = only run on first load

//   return (
//     <div style={{ textAlign: 'center' }}>
//       <h1>User List</h1>
//       {users.length === 0 ? (
//         <p>Loading...</p>
//       ) : (
//         <ul>
//           {users.map(function (user) {
//             return (
//               <li key={user.id}>
//                 {user.name} - {user.email}
//               </li>
//             );
//           })}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default App;
