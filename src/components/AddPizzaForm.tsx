import { log } from 'console';
import './styles.css';
import Pizza from '../models/Pizza';
import React,{FC, useState,ChangeEvent,FormEvent} from "react";

interface AddPizzaFormProps {
    addPizza:(newPizza: Pizza) => void;
}

const initState ={
    title:'',
    price:'',
    img:'',
}


const AddPizzaForm:FC<AddPizzaFormProps> = ({addPizza}) =>{
    const [newPizza,setNewPizza]=
    useState<{title:string,price:string,img:string}>(initState);


    const handleChange =(e: ChangeEvent<HTMLInputElement>) => {
        // console.log('handle change >>', e.target);
        const {name,value} =e.target;

        setNewPizza({
            ...newPizza,
            [name]:value
        });
    }

    const handleSubmit =(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // console.log('handle change >>', e.target);

        const {title,price,img} = newPizza;
        if(title&& price && img ){
            addPizza({
                title,
                img,
                price:Number(price),
                id:Date.now()
            })
            setNewPizza(initState)
        }

    }
    console.log('new pizza>>>>',newPizza);
    
    return<>
    <form  onSubmit={handleSubmit}>
      <input
      name="title"
      placeholder='Название'
      onChange={handleChange}
      type="text"
      value={newPizza.title}
      />
      <input
      name="price"
      placeholder='Стоимость'
      onChange={handleChange}
      type="text"
      value={newPizza.price}
      />
       <input
      name="img"
      placeholder='Изображение'
      onChange={handleChange}
      type="text"
      value={newPizza.img}
      />
      <button type='submit'> Добавить в меню</button>

    </form>
    
    </>

}

export default AddPizzaForm;