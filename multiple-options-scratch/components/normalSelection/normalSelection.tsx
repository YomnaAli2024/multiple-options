'use client'
import { useState } from "react";
import styles from "./normalSelection.module.scss"

const days = [
  'sunday',
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
];

const daysWithColors: any = {
  "sunday": "red",
  "monday": "green",
  "tuesday": "blue",
  "wednesday": "orange",
  "thursday": "purple",
  "friday": "brown",
  "saturday": "peru"
}
const NormalSelection = () => {
  const [day, setDay] = useState('sunday');
  const [isOpened, setIsOpened] = useState(false);

  function getStyles(day: string) {
    return {
      color: daysWithColors[day],
      border: `1px solid ${daysWithColors[day]}`
    };
  }

  const handleOptionsToggled = ()=>{
    setIsOpened(!isOpened)
  }

  const handleClick = (event: any) => {
    setDay(event.target.innerText)
  };
  return (
    <main className={styles.container}>
      <div className={styles.selectInput} onClick={handleOptionsToggled}>
        <div>
        <label htmlFor="day" style={{color:daysWithColors[day]}}>{day}</label>
        <span className={`${styles.arrow} ${isOpened ? styles.up : ''}`}></span>
        </div>
        {isOpened ?
            <div className={styles.options}>
                {days.map((day) => (
                  <p key={day} style={getStyles(day)} onClick={handleClick}>{day}</p>
                ))}
            </div>
          :
            <div></div>
        }
      </div>
    </main>
  )

}
export default NormalSelection;