import { useState } from "react";
import { useEffect } from "react";
import React from 'react';
import Axios from "axios";
import style from './style.module.scss';

const HomeScreen = () => {
  const [loadingPerishables, setLoadingPerishables] = useState(true);
  const [perishables, setperishables] = useState(null);

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
              </div>

            ))}
          </ul>
        </div>
      }

    </div>
  )
}

export default HomeScreen;