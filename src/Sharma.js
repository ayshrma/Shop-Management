import React, { useState } from 'react';
// import Input from '@mui/joy/Input';
// import bg from '../src/newimage.jpg'
import bg from '../src/bg.jpg'
import masalaChai from './images/Masala-Chai-.jpg'
import coffee from './images/coffee.jpeg'

import './App.css'
// import ImageSlider from './Imageslider';

export default function Sharma() {
  let [data, setData] = useState(null)
  const [date, setDate] = useState(new Date());
 
  
  
  return (
    <div>
      <h1 className='heading'> BUSSINESS & ACCOUNT MANAGEMENT SOFTWARE</h1>
      <button className='sideBarButton'>=</button>
      <button className='searchQuerryButton'> Billing </button>
      <button className='searchQuerryButton'>Records </button>
      <button className='searchQuerryButton'>Add Items</button>


     <input className='mainQuerry' placeholder='Search Here' value={data} type="text" />
     <button className='searchQuerryButton'>Search </button>
     {/* <h3>{dates}</h3> */}
     <p>Date: {date.toDateString()}</p>
      <img className='firstImage' src={bg} alt=""/>    
      <h2 className='itemTitle'>Our Famous Food</h2>

      <h2 className='itemContainerChaiHeading'>
          Chai
        </h2>
      <div className='itemContainerChai'>
        
        <img className='ChaiImage' src={masalaChai} alt=""/>
        

        <p className='itemContainerChaiDiscription'><h3>History:</h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, vero eaque pariatur porro velit similique dicta voluptatibus cupiditate facilis quaerat rem aut laudantium aperiam minima error assumenda delectus quo blanditiis nisi nostrum asperiores vel. Est ea obcaecati autem fugit eligendi quis voluptas quia ratione! Quaerat praesentium vero quasi, rerum cumque voluptates laboriosam deserunt maxime magni, a placeat. Non animi ipsam vero dolores ipsum mollitia dignissimos placeat sed quisquam obcaecati voluptatum, repellat assumenda accusamus exercitationem quam dolorum architecto iusto in suscipit possimus iure minima dolorem. Delectus deserunt cumque, labore aliquid molestiae soluta esse placeat reprehenderit sit inventore. Veniam vero voluptatem nihil!</p>
      </div>

      <h2 className='itemContainerCoffeeHeading'>
          COFFEE
        </h2>

      <div className='itemContainerCoffee'>
        
       
        <p className='itemContainerCoffeeDiscription'><h3>History:</h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, vero eaque pariatur porro velit similique dicta voluptatibus cupiditate facilis quaerat rem aut laudantium aperiam minima error assumenda delectus quo blanditiis nisi nostrum asperiores vel. Est ea obcaecati autem fugit eligendi quis voluptas quia ratione! Quaerat praesentium vero quasi, rerum cumque voluptates laboriosam deserunt maxime magni, a placeat. Non animi ipsam vero dolores ipsum mollitia dignissimos placeat sed quisquam obcaecati voluptatum, repellat assumenda accusamus exercitationem quam dolorum architecto iusto in suscipit possimus iure minima dolorem. Delectus deserunt cumque, labore aliquid molestiae soluta esse placeat reprehenderit sit inventore. Veniam vero voluptatem nihil!</p>
        <img className='coffeeImage' src={coffee} alt=""/>
      </div>
</div>
  )
}
