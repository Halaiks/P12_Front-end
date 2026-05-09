import DataTable from "react-data-table-component"
import { useState } from "react"
function EmployeeTable({ employees }) {

    const [search, setSearch] = useState("")

  const columns = [
    {
      name: "First Name",
      selector: row => row.firstName,
      sortable: true,
    },
    {
      name: "Last Name",
      selector: row => row.lastName,
      sortable: true,
    },
    {
      name: "Start Date",
      selector: row => row.startDate,
      sortable: true,
    },
    {
      name: "Department",
      selector: row => row.department,
      sortable: true,
    },
    {
      name: "Date of Birth",
      selector: row => row.dateOfBirth,
      sortable: true,
    },
    {
      name: "Street",
      selector: row => row.street,
    },
    {
      name: "City",
      selector: row => row.city,
    },
    {
      name: "State",
      selector: row => row.state,
    },
    {
      name: "Zip Code",
      selector: row => row.zipCode,
    },
  ]

  const filteredEmployees = employees.filter((employee) => {
  return (
    employee.firstName.toLowerCase().includes(search.toLowerCase()) ||
    employee.lastName.toLowerCase().includes(search.toLowerCase()) ||
    employee.department.toLowerCase().includes(search.toLowerCase())
  )
})

const searchComponent = (
  <input
    type="text"
    placeholder="Search employee..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="form-input"
  />
)

  return (
    <DataTable
      columns={columns}
      data={filteredEmployees}
      pagination
      highlightOnHover
      subHeader
subHeaderComponent={searchComponent}
    />
  )
}

export default EmployeeTable