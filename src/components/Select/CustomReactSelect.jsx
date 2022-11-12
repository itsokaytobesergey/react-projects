import React from "react"
import Select from "./Select"
import Name from "./Name"
import Telefon from "./Telefon"
import { subjects, roles } from "./Data"

const CustomReactSelect = () => {
  const buttonHandler = (event) => {
    event.preventDefault()
  }
  return (
    <form className="selectForm">
      <h1>custom input react</h1>
      <Name />
      <Telefon />
      <Select subjects={subjects} />
      <Select subjects={roles} />
      <button className="submitButton" type="submit" onClick={buttonHandler}>
        Отправить форму
      </button>
    </form>
  )
}

export default CustomReactSelect
