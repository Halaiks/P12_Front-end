import DataTable from "react-data-table-component"
import { useState } from "react"

const formatDate = (isoString) => {
  if (!isoString) return ""
  const date = new Date(isoString)
  if (isNaN(date.getTime())) return ""
  const mm = String(date.getMonth() + 1).padStart(2, "0")
  const dd = String(date.getDate()).padStart(2, "0")
  const yyyy = date.getFullYear()
  return `${mm}/${dd}/${yyyy}`
}

// Composant de table pour afficher la liste des employés, avec fonctionnalités de tri, pagination et recherche intégrées grâce à react-data-table-component.
function EmployeeTable({ employees }) {
// État local pour la valeur de recherche, utilisé pour filtrer les employés affichés dans la table.
  const [search, setSearch] = useState("")
// Définition des colonnes de la table, chaque colonne spécifie un nom, une fonction de sélection pour extraire les données correspondantes de chaque ligne, et si la colonne est triable.
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
      format: row => formatDate(row.startDate),
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
      format: row => formatDate(row.dateOfBirth),
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
// Filtrage des employés en fonction de la valeur de recherche, en vérifiant si le prénom, le nom ou le département de chaque employé contient la chaîne de recherche (insensible à la casse).
  const filteredEmployees = employees.filter((employee) => {
    return (
      employee.firstName.toLowerCase().includes(search.toLowerCase()) ||
      employee.lastName.toLowerCase().includes(search.toLowerCase()) ||
      employee.department.toLowerCase().includes(search.toLowerCase())
    )
  })
// Composant injecté dans le subHeader du DataTable pour intégrer la barre de recherche directement au-dessus du tableau
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