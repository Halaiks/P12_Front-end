function Input({ label, name, value, onChange, type = "text" }) {
  return (
<div className="form-group">
        <label>{label}</label>
      <input className="form-input"
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default Input