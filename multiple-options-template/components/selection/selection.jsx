'use client'
import { useState } from "react";
import MultipleSelection from "../multipleSelection/mulipleSelection";
import NormalSelection from "../normalSelection/normalSelection";
import { Button } from "@mui/material";
import styles from "./selection.module.scss"

const Selectionn = ()=>{
    const [isMultipleSelected, setIsMultipleSelected] = useState(false);
    const handleClick = ()=>{
        setIsMultipleSelected(!isMultipleSelected)
    }
    return(
       
        !isMultipleSelected?
        <>
        <Button onClick={handleClick} className={styles.decisionBtn}>Wanna select multiple days??</Button>
        <NormalSelection/>
        </>
        :
        <>
        <Button onClick={handleClick} className={styles.decisionBtn}>Wanna select one day??</Button>
        <MultipleSelection/>
        </>
    )
}
export default Selectionn;