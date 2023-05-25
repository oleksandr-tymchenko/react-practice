import React from "react";
import ReactDOM from "react-dom/client";

// import {Card} from './compponents/Card'

// {

//     "id": 1,
//     "title": "accusamus beatae ad facilis cum similique qui sunt",
//     "url": "https://via.placeholder.com/600/92c952",
//     "thumbnailUrl": "https://via.placeholder.com/150/92c952"
//   },

// const paragraph = React.createElement('p', p,})
// const p = <p id = 'test-p-id' >I am p</p>
// const div = React.createElement('div', { a: 5, b: 10, children: p });

// const div = (
//   <div name= 'name' id= 'test' className= 'test-name'> {p} </div>)

// console.log(div)

// сюда приходить об'єкт параметрів які передані при виклику <Head clas='card-title' id='id-123'/>

// const Сard = () => {
//   return data.map((photo) => {
//     return (
//       <div
//         key={photo.id}
//         className="card mx-auto my-2"
//         style={{ width: '18rem' }}>
//         <img
//           src={photo.url}
//           className="card-img-top"
//           alt={photo.title}
//         />
//       <div className="card-body">
//           <h5 className="card-title">Card title: {photo.title}</h5>
//           {/* викликаємо як звич ф-ю */}
//           {/* {Head({clas:'card-title', id:'id-123'})} */}
//           {/* !--викликаємо компонент - іх рез-т буде аналогічним- */}
//           <Head clas='card-title' id='id-123'/>
//         <a href="http" className="btn btn-primary">Go somewhere</a>
//       </div>
//         </div>
//     )

//   })
// }

// console.log('card', )

// ReactDOM.createRoot(document.getElementById('root')).render(<Card/>)
// import ReactDOM from 'react-dom/client';
// import './index.css';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//   </React.StrictMode>
// );

// Виносимо об'єкт із примітивами в константу, щоб було зручно скидати.
// Не можна використовувати, якщо в якійсь властивості стану зберігається складний тип.
const INITIAL_STATE = {
  login: "",
  email: "",
  password: "",
};

class SignUpForm extends React.Component {
  state = { ...INITIAL_STATE };

  // Для всіх інпутів створюємо один обробник
  // Розрізняти інпути будемо за атрибутом name
  handleChange = (evt) => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    const { login, email, password } = this.state;
    console.log(`Login: ${login}, Email: ${email}, Password: ${password}`);
    this.props.onSubmit({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { login, email, password } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            placeholder="Enter login"
            name="login"
            value={login}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Email
          <input
            type="email"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            placeholder="Enter password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
        </label>

        <button type="submit">Sign up as {login}</button>
      </form>
    );
  }
}
