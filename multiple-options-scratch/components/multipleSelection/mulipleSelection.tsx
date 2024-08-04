'use client'
import {useState} from 'react';
import styles from "./mulipleSelection.module.scss"

const days = [
  'sunday',
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
];

const daysWithColors:any = {
    "sunday":"red",
    "monday":"green",
    "tuesday":"blue",
    "wednesday":"orange",
    "thursday":"purple",
    "friday":"brown",
    "saturday":"peru"
}

const MultipleSelection = ()=> {

  const [selectedDays, setSelectedDays] = useState<string[]>(['sunday']);
  const [isOpened, setIsOpened] = useState(false);

  function getStyles(day: string) {
    const daySelectedBefore = selectedDays.find((dayElem)=> dayElem == day);        
    return {
      backgroundColor: daySelectedBefore? '#ccc': 'transparent',
      color: daysWithColors[day],
      border: `1px solid ${daysWithColors[day]}`
    };
  }

  const handleOptionsToggled = ()=>{
    setIsOpened(!isOpened)
  }

  const handleClick = (event: any) => {
    const newDaySelected = event.target.innerText;
    const daySelectedBefore = selectedDays.find((day)=> day == newDaySelected)
    if (!daySelectedBefore){
      const newDays = [...selectedDays, event.target.innerText]
      setSelectedDays(newDays)
    }
  };

  return (
    <main className={styles.container}>
      <div className={styles.selectInput} onClick={handleOptionsToggled}>
        {selectedDays.map((selectedDay)=>(
          <label key={selectedDay} htmlFor="day" className={styles.label} style={{backgroundColor:daysWithColors[selectedDay]}}>{selectedDay}</label>
        ))}
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

    </main>
  );
}
export default MultipleSelection;
