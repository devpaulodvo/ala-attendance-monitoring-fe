import React from 'react';
import styles from './index.module.css'

const TextBox = ({onChange, value, id, name, type, className, placeholder, label}) => {
    return(
        <div className={'flex-col text-center'}>
        <label>{label}</label>
        <input placeholder={placeholder} className={`${className} ${styles.textBox}`} id={id} name={name} value={value} type={type} onChange={onChange}/>
        </div>
    )
}

export default TextBox;