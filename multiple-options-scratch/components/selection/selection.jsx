'use client'
import { useState } from "react";
import MultipleSelection from "../multipleSelection/mulipleSelection";
import NormalSelection from "../normalSelection/normalSelection";
import styles from "./selection.module.scss"

const Selectionn = ()=>{
    const [isMultipleSelected, setIsMultipleSelected] = useState(false);
    const handleClick = ()=>{
        setIsMultipleSelected(!isMultipleSelected)
    }
    return(
       
        !isMultipleSelected?
        <>
        <button onClick={handleClick} className={styles.decisionBtn}>Wanna select multiple days??</button>
        <NormalSelection/>
        </>
        :
        <>
        <button onClick={handleClick} className={styles.decisionBtn}>Wanna select one day??</button>
        <MultipleSelection/>
        </>
    )
}
export default Selectionn;