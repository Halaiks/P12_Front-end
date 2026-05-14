import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import EmployeeTable from "../components/Table/EmployeeTable"
import { selectEmployees } from "../store/employeesSlice"
function EmployeeList() {

  const employees = useSelector(selectEmployees)
  
  return (
    <div className="page-container">
      <h2 className="page-title">Current Employees</h2>
      <Link className="page-link" to="/">
        Home
      </Link>
      {employees.length === 0 ? (

        <p>No employee found.</p>

      ) : (
        <EmployeeTable employees={employees} />
      )}
    </div>
  )
}

export default EmployeeList