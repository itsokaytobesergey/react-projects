import { useState } from "react"

function Telefon({ inputTextTelefon, setInputTextTelefon }) {
  return (
    <div className="Telefon">
      <label htmlFor="input-tel">Телефон:</label>
      <input
        // required
        id="input-tel"
        placeholder="Телефон"
        type="tel"
        value={inputTextTelefon}
        onChange={setInputTextTelefon}
        name="telefon"
      ></input>
    </div>
  )
}

export default Telefon
