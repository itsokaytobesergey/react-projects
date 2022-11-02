import { useState } from "react"

function Telefon() {
  const [inputText, setInputText] = useState("")

  return (
    <div className="Telefon">
      <label>Телефон:</label>
      <input placeholder="Телефон" type="tel" value={inputText} onChange={(e) => setInputText(e.target.value)}></input>
    </div>
  )
}

export default Telefon
