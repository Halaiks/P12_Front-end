import { useState } from "react"
import { Link } from "react-router-dom"
import Input from "../components/Form/Input"
import DatePickerField from "../components/Form/DatePickerField"
// Import du package npm personnalisé publié pour ce projet
// Remplace l'ancien composant jQuery du projet HRnet original
import Select from "halaiks-react-select"
import "halaiks-react-select/style.css"
import Modal from "../components/Modal/Modal"
import { states } from "../data/states"
import { departments } from "../data/departments"
import { useDispatch } from "react-redux"
import { addEmployee } from "../store/employeesSlice"


function CreateEmployee() {
  const dispatch = useDispatch()
  // Transformation des données pour les composants Select
  const statesOptions = states.map((state) => ({
    value: state.abbreviation,
    label: state.name
  }))
  const departmentOptions = departments.map((department) => ({
    value: department.name,
    label: department.name
  }))
  // États locaux pour les sélections et les dates
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
  // Gestion des changements dans les champs de formulaire
  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData({
      ...formData,
      [name]: value
    })
  }
  // Gestion de la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault()
    // Création du nouvel employé avec les données du formulaire
    const newEmployee = {
      ...formData,
      dateOfBirth: dateOfBirth ? dateOfBirth.toISOString() : null,
      startDate: startDate ? startDate.toISOString() : null,
    }
    // Ajout du nouvel employé à la liste
    dispatch(addEmployee(newEmployee))
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

