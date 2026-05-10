import { BrowserRouter, Routes, Route } from "react-router-dom"
import CreateEmployee from "./pages/CreateEmployee"
import EmployeeList from "./pages/EmployeeList"

function App() {
  return (
    <BrowserRouter>
    <main>
      <Routes>
        <Route path="/" element={<CreateEmployee />} />
        <Route path="/employees" element={<EmployeeList />} />
      </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App