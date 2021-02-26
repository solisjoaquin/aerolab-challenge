import * as React from "react";

import logo from "../assets/logo.svg";
import { useState, useEffect } from 'react'
import styles from "./App.module.scss";
import axios from 'axios'


const App: React.FC = () => {
  const url = 'https://coding-challenge-api.aerolab.co/'
  const [user, setUser] = useState({
    _id: "",
    name: "",
    points: 0
  });

  const [products, setProducts] = useState([{
    _id: "",
    name: "",
    cost: 0,
    category: "",
    img: {
      url: ""
    }
  }])


  useEffect(() => {
    axios.get(url + 'user/me', {
      params: {
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDM1MjcxMDdlNzE4NzAwMjBlMzhmMTUiLCJpYXQiOjE2MTQwOTYxNDR9.Z28iG1T8EBdxLexCAgDiik1-1R6zYY8dvGYy8ENDPeg'
      }
    })
      .then(res => {
        //console.log(res.data)
        setUser(res.data)
      })
      .catch(e => console.log(e))
  }, [user]);

  useEffect(() => {
    axios.get(url + 'products', {
      params: {
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDM1MjcxMDdlNzE4NzAwMjBlMzhmMTUiLCJpYXQiOjE2MTQwOTYxNDR9.Z28iG1T8EBdxLexCAgDiik1-1R6zYY8dvGYy8ENDPeg'
      }
    })
      .then(res => {
        console.log(res.data)
        setProducts(res.data)
      })
      .catch(e => console.log(e))
  }, []);


  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1>
          <img alt="Aerolab" src={logo} width={128} />
        </h1>
        <div>
          <h3>Welcome: {user.name}</h3>
          <h2>points: {user.points}</h2>
        </div>
      </header>
      <div>

        <button>1000</button>
        <button>5000</button>
        <button>7500</button>

      </div>
      <div className={styles.cardContainer}>
        <div className={styles.cardContainerFlex}>
          {products.map(product =>
            <div className={styles.cardProduct} key={product._id}>
              <img src={product.img.url} alt="" />

              <div className={styles.cardDetail}>
                <p className={styles.cardTitle}>{product.name}</p>
                <div className={styles.cardPrice}>
                  <p>{product.cost}</p>

                  <button className={styles.cardButton}>

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="mx-auto" fill="white" viewBox="0 0 1792 1792">
                      <path d="M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z">
                      </path>
                    </svg>
                  </button>
                </div>
              </div>



            </div>
          )}
        </div>
      </div>

    </main>
  );
};

export default App;
