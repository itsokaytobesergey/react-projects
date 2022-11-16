import { useState, useEffect } from "react"
import Dropdown from "./Dropdown.jsx"

function Select({ subjects, setIsEmpty, isEmpty }) {
  //Закрытие на esc
  useEffect(() => {
    function handleEscapeKey(event: KeyboardEvent) {
      if (event.code === "Escape") {
        setIsDropdownVisible(false)
      }
    }

    document.addEventListener("keydown", handleEscapeKey)
    return () => document.removeEventListener("keydown", handleEscapeKey)
  }, [])

  //Состояние инпута и дропдауна
  const [value, setValue] = useState(subjects[0])
  const [isDropdownVisible, setIsDropdownVisible] = useState(false)

  return (
    <>
      <div className="Subject">
        <label htmlFor="select-button">{subjects[subjects.length - 1].text}</label>
        <button
          id="select-button"
          type="button"
          className={`input-button ${isEmpty ? "error" : ""}`}
          onClick={() => {
            setIsDropdownVisible(!isDropdownVisible)
          }}
        >
          {value.text}
        </button>
        <Dropdown
          setIsEmpty={setIsEmpty}
          subjects={subjects}
          value={value}
          setValue={setValue}
          isDropdownVisible={isDropdownVisible}
          setIsDropdownVisible={setIsDropdownVisible}
        />
      </div>
    </>
  )
}

export default Select
