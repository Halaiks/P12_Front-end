import DatePicker from "react-datepicker"
// Composant réutilisable pour les champs de date, utilise react-datepicker pour une sélection facile des dates.
function DatePickerField({ id, label, selected, onChange }) {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <DatePicker
        id={id}
        className="form-input"
        selected={selected}
        onChange={onChange}
        dateFormat="MM/dd/yyyy"
        formatWeekDay={(nameOfDay) => nameOfDay.substring(0, 2)}
        useWeekdaysShort={false}
      />
    </div>
  )
}

export default DatePickerField