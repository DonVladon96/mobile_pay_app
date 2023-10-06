import styles from "./page.module.css"

import React, { useState } from 'react';

  // @ts-ignore
function Popup({isOpen, handleClose, message}) {
    if(!isOpen) return null;

    return (
        <div className={styles.popup__container}>
            <div className={styles.popup__form}>
                <h2 className={styles.popup__title}>{message}</h2>
                <button className={styles.PopupButtonSave} onClick={handleClose}>ОК</button>
            </div>
        </div>  
    );
}

export default Popup;
