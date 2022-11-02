import { useState } from "react"

function Name() {
  const [inputText, setInputText] = useState("")
  return (
    <div className="Name">
      <label>Имя:</label>
      <input placeholder="Anna" type="text" value={inputText} onChange={(e) => setInputText(e.target.value)}></input>
    </div>
  )
}

export default Name
