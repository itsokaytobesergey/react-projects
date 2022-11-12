import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainLayout from "./MainLayout"
import CustomReactSelect from "./Select/CustomReactSelect"
import About from "./About"
import "../App.css"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<CustomReactSelect />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
