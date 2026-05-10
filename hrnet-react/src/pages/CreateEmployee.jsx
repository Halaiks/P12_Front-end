import { useState } from "react"
import { Link } from "react-router-dom"
import Input from "../components/Form/Input"
import DatePickerField from "../components/Form/DatePickerField"
import Select from "halaiks-react-select"
import "halaiks-react-select/style.css"
import Modal from "../components/Modal/Modal"
import { states } from "../data/states"
import { departments } from "../data/departments"


function CreateEmployee() {

  const statesOptions = states.map((state) => ({
    value: state.abbreviation,
    label: state.name
  }))

  const departmentOptions = departments.map((department) => ({
    value: department.name,
    label: department.name
  }))

  const [selectedState, setSelectedState] = useState(null)
  const [selectedDepartment, setSelectedDepartment] = useState(null)
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

    setIsModalOpen(true)
  }

  return (
    <div className="form-container">
    <div className="page-container">
      <div>
        <h2 className="page-title">Create Employee</h2>

        <Link className="page-link" to="/employees">View Current Employees</Link>

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
            id="dateOfBirth"
            label="Date of Birth"
            selected={dateOfBirth}
            onChange={setDateOfBirth}
          />

          <DatePickerField
            id="startDate"
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

          <Select
            label="State"
          options={statesOptions}
            value={selectedState}
            onChange={(option) => {
              setSelectedState(option)

              setFormData({
                ...formData,
                state: option.value
              })
            }}
            placeholder="Select a state"
          />

          <Input
            label="Zip Code"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
          />

          <Select
            label="Department"
            options={departmentOptions}
            value={selectedDepartment}
            onChange={(option) => {
              setSelectedDepartment(option)

              setFormData({
                ...formData,
                department: option.value
              })
            }}
            placeholder="Select a department"
          />
          <button className="submit-button" type="submit">Save</button>

        </form>

      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <p>Employee Created!</p>
      </Modal>
    </div>
    </div>
  )
}

export default CreateEmployee

