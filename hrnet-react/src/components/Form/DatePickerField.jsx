import DatePicker from "react-datepicker"

function DatePickerField({ label, selected, onChange }) {
  return (
<div className="form-group">
        <label>{label}</label>
      <DatePicker
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