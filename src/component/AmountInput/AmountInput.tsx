"use client";
import React, { useCallback, useState } from "react";
import styles from "./page.module.css";

import { AmountInput } from "@alfalab/core-components-amount-input";



function AmountInputFunc() {

  const [value, setValue] = React.useState(0);
  const [suggests] = React.useState([
    { currency: "RUR", minorUnits: 0, value: 900 },
    { currency: "RUR", minorUnits: 1, value: 500 },
    { currency: "RUR", minorUnits: 1, value: 100 },
    { currency: "RUR", minorUnits: 1, value: 0 },
  ]);
  // @ts-ignore
    const handleChange = (event, payload) => {
    if (value > 1000) {
    alert('ti lox')
    }
    setValue(payload.value);
    
    console.log(payload)
  };

  

  return (
    <div className={styles.container}>
      <AmountInput
        value={value}
        currency='RUB'
        onChange={handleChange}
        hint={`value: ${value}`}
        className={styles.input}
        maxLength={1000}
        integerLength={4}
      />

      <div style={{  border: "solid 2px green", borderRadius: '10px', padding: "10px" , opacity: '1' }} >
        {suggests.map((s) => (
          <button onClick={() => setValue(s.value as number)}>
            Установить {s.value}
          </button>
        ))}
      </div>
    </div>
  );
}

export default AmountInputFunc;
