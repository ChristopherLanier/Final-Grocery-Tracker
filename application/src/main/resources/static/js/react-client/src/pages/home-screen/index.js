import { useState } from "react";
import { useEffect } from "react";
import React from 'react';
import Axios from "axios";
import style from './style.module.scss';

//This is state management for perishables and nonperishables

const HomeScreen = () => {
  const [loadingPerishables, setLoadingPerishables] = useState(true);
  const [perishables, setperishables] = useState(null);

  const [loadingNonPerishables, setLoadingNonPerishables] = useState(true);
  const [nonPerishables, setNonPerishables] = useState(null);

  // ^^^This is state management for perishables and nonperishables^^^


  // requests that renders data upon the page loading//
  useEffect(() => {
    const fetchData = async () => {
      const result = await Axios(`http://localhost:8080/perishables`);
      setperishables(result.data);
    }
    if (perishables) {
      setLoadingPerishables(false)
    }
    !perishables && fetchData();

  }, [perishables]);


  useEffect(() => {
    const fetchData = async () => {
      const result = await Axios(`http://localhost:8080/non-perishables`);
      setNonPerishables(result.data);
    }

    if (nonPerishables) {
      setLoadingNonPerishables(false)
    }
    !nonPerishables && fetchData();

  }, [nonPerishables]);

  // ^^^requests that renders data upon the page loading^^^//


  const handleSubmit = (e, item) => {
    e.preventDefault();

    const userData = {
      name: item.name,
      subTotal: item.price * item.quantity,
      isSelected: false

    };

    Axios.post('http://localhost:8080/list-items/add-item', userData).then((response) => {
      console.log(response.status);
      console.log('DATA', response.data);
    });

  }

  //Logic for displaying data after being rendered//
  return (
    <div>
      {loadingPerishables ? <h3>Loading...</h3> :
        <div>
          <h2>Perishable Items</h2>
          <ul className={style.itemsContainer}>
            {perishables.map(perishableItem => (
              <div key={perishableItem.id}>
                <img src={perishableItem.imageUrl} alt='' />
                <h3>{perishableItem.name}</h3>
                <p>Quantity: {perishableItem.quantity}</p>
                <p>Price: {perishableItem.price}</p>
                <p>Days to Expire: {perishableItem.daysToExpiration}</p>

                <form onSubmit={(e) => handleSubmit(e, perishableItem)}>
                  <button type="submit">Add to Grocery List</button>
                </form>


              </div>


            ))}
          </ul>
        </div>
      }

      {loadingNonPerishables ? <h3>Loading...</h3> :
        <div>
          <h2>Non Perishable Items</h2>
          <ul className={style.itemsContainer}>
            {nonPerishables.map(nonPerishableItem => (
              <div key={nonPerishableItem.id}>
                <img src={nonPerishableItem.imageUrl} alt='' />
                <h3>{nonPerishableItem.name}</h3>
                <p>Quantity: {nonPerishableItem.quantity}</p>
                <p>Price: {nonPerishableItem.price}</p>
                <form onSubmit={(e) => handleSubmit(e, nonPerishableItem)}>
                  <button type="submit">Add to Grocery List</button>
                </form>
              </div>

            ))}
          </ul>
        </div>
      }


    </div>
    //^^Logic for displaying data after being rendered^^//
  )
}

export default HomeScreen;