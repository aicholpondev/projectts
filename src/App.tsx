
import './App.css';
import React, {FC, useState} from 'react';
import AddPizzaForm from './components/AddPizzaForm';
import Pizza from './models/Pizza';
import { log } from 'console';
// import pizzaOne from './image/pizza-1.webp'
// interface BMW {
//   model:string,
//   year:number
// }

// type X =BMW & {
//   a:string,
//   b:number
// }




const App: FC =() => {
  const [pizzaList,setPizzaList] = useState<Pizza[]>([]);

  const addPizza = (newPizza:Pizza) =>{
    setPizzaList([...pizzaList,newPizza])
  }
  console.log('pizzaList >>>>>', pizzaList);
  

  return (
    <div className="App">
          <div className="App">
            <span className='heading'>Наша пиццерия</span>
            <AddPizzaForm 
            addPizza={addPizza}/>

      </div>
    </div>
  );
}

export default App;
