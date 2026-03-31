import DatePicker from "react-datepicker"

function DatePickerField({ label, selected, onChange }) {
  return (
    <div style={{ marginBottom: "10px" }}>
      <label>{label}</label>
      <br />
      <DatePicker
        selected={selected}
        onChange={onChange}
        dateFormat="MM/dd/yyyy"
      />
    </div>
  )
}

export default DatePickerField