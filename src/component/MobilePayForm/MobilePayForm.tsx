'use client'
import { IntlPhoneInput } from '@alfalab/core-components-intl-phone-input';
import React, { useCallback, useState } from 'react';
import styles from "./page.module.css"



function MobilePayForm() {
  const [count, setCount] = useState<number>(0);
  const [value, setValue] = useState<string>("+7");
  const [selectedCountry, setSelectedCountry] = useState<string>("RU");
  const handleChange = useCallback(
    (newValue: string) => {
      setValue(newValue);
    },
    [setValue]
  );
  const handleCountryChange = useCallback((countryCode: any) => {
    setSelectedCountry(countryCode);
  }, []);
  const handleClear = useCallback(() => setValue(""), []);
 
  return (
    <div style={{ width: "320px", border: "solid 2px green", borderRadius: '10px', padding: "10px" , opacity: '1' }}>
    <IntlPhoneInput
      inputProps={{
        clear: true,
        onClear: handleClear,
      }}
      value={value}
      onChange={handleChange}
      block={true}
      label="Номер телефона"
      defaultCountryIso2="RU"
      readOnly={false}
      onCountryChange={handleCountryChange}
      className={styles.inputPhone}
      colors='default'
      
    />
    <br />
    Код выбранной страны: <strong>{selectedCountry}</strong>
  </div>
  );
}

export default MobilePayForm;
