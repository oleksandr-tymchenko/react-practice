import React from 'react'
import ReactDOM from 'react-dom/client'


import {Card} from './compponents/Card'

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


ReactDOM.createRoot(document.getElementById('root')).render(<Card/>)
// import ReactDOM from 'react-dom/client';
// import './index.css';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode> 
//   </React.StrictMode>
// );


