import { BrowserRouter, Routes, Route } from "react-router-dom"
import CreateEmployee from "./pages/CreateEmployee"
import EmployeeList from "./pages/EmployeeList"

// Composant principal de l'application, gère la navigation entre les différentes pages à l'aide de React Router.
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