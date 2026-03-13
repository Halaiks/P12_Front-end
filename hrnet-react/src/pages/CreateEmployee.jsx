import { useState } from "react"
import { Link } from "react-router-dom"


function CreateEmployee() {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    startDate: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    department: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const employees = JSON.parse(localStorage.getItem("employees")) || []

  employees.push(formData)

  localStorage.setItem("employees", JSON.stringify(employees))

  console.log("Employee saved :", formData)
  }

  return (
    <div>
      <h2>Create Employee</h2>

      <Link to="/employees">View Current Employees</Link>

      <form onSubmit={handleSubmit}>

        <label>First Name</label>
        <input
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />

        <label>Last Name</label>
        <input
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />

        <label>Date of Birth</label>
        <input
          type="date"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
        />

        <label>Start Date</label>
        <input
          type="date"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
        />

        <label>Street</label>
        <input
          name="street"
          value={formData.street}
          onChange={handleChange}
        />

        <label>City</label>
        <input
          name="city"
          value={formData.city}
          onChange={handleChange}
        />

        <label>State</label>
        <input
          name="state"
          value={formData.state}
          onChange={handleChange}
        />

        <label>Zip Code</label>
        <input
          name="zipCode"
          value={formData.zipCode}
          onChange={handleChange}
        />

        <label>Department</label>
        <input
          name="department"
          value={formData.department}
          onChange={handleChange}
        />

        <button type="submit">Save</button>

      </form>

    </div>
    
  )
}

export default CreateEmployee

