import { useState } from "react";
import { useEffect } from "react";
import React from 'react';
import Axios from "axios";
import style from './style.module.scss';

const GroceryListScreen = () => {
  const [loadingList, setloadinglist] = useState(true);
  const [list, setList] = useState[null];

  const [groceryListPriceTotal, setGroceryListPriceTotal] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await Axios('https://localhost:8080/list-items');
      console.log(result)
      setList(result.data);
    }

    if (list) {
      setloadinglist(false);
    }


    !list && fetchData();
  }, [list]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await Axios('https://localhost:8080/list-items/total-price');
      console.log(result)
      setGroceryListPriceTotal(result.data);
    }

    fetchData();


  }, [groceryListPriceTotal, list]);

  const handleDelete = (id) => {
    Axios.delete(`http://localhost:8080/list-items/${id}/delete-item`).then((response) => {
      console.log('Delete successful');
      console.log('DATA', response.data);
      setList(response.data);
    });
  }

  const handleSelectUpdate = (item) => {
    const userData = {
      name: item.itemName,
      isSelected: !item.selected
    }


    Axios.put(`http://localhost:8080/list-items/${item.id}/select-item`, userData).then((response) => {
      console.log('Update successful');
      console.log('DATA', response.data);
      setList(response.data);
    });
  }


  return (
    <div>
      <h2>My Grocery List</h2>
      {loadingList ? <h3>Loading ... </h3> :
        <div>
          <ul className={style.itemsContainer}>
            {list.map(item => (
              <div key={item.id}>
                <h3 className={item.selected ? style.selected : null} onClick={() => handleSelectUpdate(item)}>{item.name}</h3>
                <p>SubTotal: {item.subTotal}</p>
                <button> onClick={() => handleDelete(item.id)}</button>
              </div>
            ))}


          </ul>
        </div>
      }
      <h2>Cart Total: {groceryListPriceTotal} </h2>
    </div>
  );
}

export default GroceryListScreen;