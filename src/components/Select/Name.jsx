import { useState } from "react"

function Name({ inputTextName, setInputTextName, setIsEmptyName, isEmptyName }) {
  return (
    <div className="Name">
      <label htmlFor="input-name">Имя:</label>
      <input
        // required
        id="input-name"
        placeholder="Anna"
        type="text"
        value={inputTextName}
        onChange={setInputTextName}
        name="name"
        // className={`${isEmptyName ? "" : "error"}`}
      ></input>
    </div>
  )
}

export default Name
