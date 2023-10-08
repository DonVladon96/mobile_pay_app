"use client";
import React, { useCallback, useState } from "react";
import styles from "./page.module.css";

import { AmountInput } from "@alfalab/core-components-amount-input";



function AmountInputFunc() {

  const [value, setValue] = React.useState(0);
  const [suggests] = React.useState([
    { currency: "RUR", value: 900 },
    { currency: "RUR",  value: 500 },
    { currency: "RUR",  value: 100 },
    { currency: "RUR",  value: 0 },
  ]);
  // @ts-ignore
    const handleChange = (event, payload) => {
    if (value > 1000) {

    }
    setValue(payload.value);
    
    console.log(payload)
  };

  

  return (
    <div className={styles.container}>
      <AmountInput
      style={{ margin:10}}
        key='RUB'
        value={value}
        currency='RUB'
        onChange={handleChange}
        
        className={styles.input}
        maxLength={1000}
        integerLength={3}  
        integersOnly={false}
        bold={true}
      />

      <div style={{  border: "solid 2px green", borderRadius: '10px', padding: "10px" , opacity: '1' }} >
        {suggests.map((s) => (
          <button key={s.value} onClick ={() => setValue(s.value as number*100)}>
            Установить {String(s.value)}
          </button>
        ))}
      </div>
    </div>
  );
}

export default AmountInputFunc;
