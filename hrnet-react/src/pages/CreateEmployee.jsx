import { useState } from "react"
import { Link } from "react-router-dom"
import Input from "../components/Form/Input"
import DatePickerField from "../components/Form/DatePickerField"
import Modal from "../components/Modal/Modal"


function CreateEmployee() {

  const [dateOfBirth, setDateOfBirth] = useState(null)
  const [startDate, setStartDate] = useState(null)

  const [isModalOpen, setIsModalOpen] = useState(false)

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
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

    const newEmployee = {
      ...formData,
      dateOfBirth: dateOfBirth,
      startDate: startDate
    }

    employees.push(newEmployee)

    localStorage.setItem("employees", JSON.stringify(employees))

    console.log("Employee saved :", newEmployee)

    setIsModalOpen(true)
  }

  return (
    <div>
      <div>
        <h2>Create Employee</h2>

        <Link to="/employees">View Current Employees</Link>

        <form onSubmit={handleSubmit}>

          <Input
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />

          <Input
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />


          <DatePickerField
            label="Date of Birth"
            selected={dateOfBirth}
            onChange={setDateOfBirth}
          />

          <DatePickerField
            label="Start Date"
            selected={startDate}
            onChange={setStartDate}
          />

          <Input
            label="Street"
            name="street"
            value={formData.street}
            onChange={handleChange}
          />

          <Input
            label="City"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />

          <Input
            label="State"
            name="state"
            value={formData.state}
            onChange={handleChange}
          />

          <Input
            label="Zip Code"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
          />

          <Input
            label="Department"
            name="department"
            value={formData.department}
            onChange={handleChange}
          />
          <button type="submit">Save</button>

        </form>

      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <p>Employee Created!2</p>
      </Modal>
    </div>
  )
}

export default CreateEmployee

