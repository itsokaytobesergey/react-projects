import Select from "./Select"
import Name from "./Name"
import Telefon from "./Telefon"
import { subjects, roles } from "./Select/Data"
import "../App.css"

function App() {
  return (
    <div className="App">
      <h1>custom input react</h1>
      <Name />
      <Telefon />
      <Select subjects={subjects} />
      <Select subjects={roles} />
    </div>
  )
}

export default App
