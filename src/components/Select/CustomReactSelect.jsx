import React from "react"
import Select from "./Select"
import Name from "./Name"
import Telefon from "./Telefon"
import { subjects, roles } from "./Data"
import { useState } from "react"

const CustomReactSelect = () => {
  //Validation if custom select inputs are empty
  const [isEmptyName, setIsEmptyName] = useState()
  const [isEmptyTelefon, setIsEmptyTelefon] = useState()
  const [isEmptySubject, setIsEmptySubject] = useState()
  const [isEmptyRole, setIsEmptyRole] = useState()

  const buttonHandler = (event) => {
    event.preventDefault()
    if (isEmptySubject === undefined) {
      setIsEmptySubject(true)
    }
    if (isEmptyRole === undefined) {
      setIsEmptyRole(true)
    }
    if (isEmptyName === "") {
      setIsEmptyName(true)
    }
    if (isEmptyRole === "") {
      setIsEmptyRole(true)
    }
  }

  //Вывод данных формы в консоль
  const initialValue = { name: "", telefon: "" }
  const [formValues, setFormValues] = useState(initialValue)
  const handleChange = (e) => {
    console.log(e.target)
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

  return (
    <form className="selectForm" onSubmit={buttonHandler}>
      {/* <pre>{JSON.stringify(formValues, undefined, 2)}</pre> */}
      <h1>custom input react</h1>
      <Name
        inputTextName={formValues.name}
        setInputTextName={handleChange}
        setIsEmptyName={setIsEmptyName}
        isEmptyName={isEmptyName}
      />
      <Telefon inputTextTelefon={formValues.telefon} setInputTextTelefon={handleChange} />
      <Select subjects={subjects} setIsEmpty={setIsEmptySubject} isEmpty={isEmptySubject} />
      <Select subjects={roles} setIsEmpty={setIsEmptyRole} isEmpty={isEmptyRole} />
      <button className="submitButton" type="submit">
        Отправить форму
      </button>
    </form>
  )
}

export default CustomReactSelect
