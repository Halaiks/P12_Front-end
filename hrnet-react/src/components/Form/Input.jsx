function Input({ label, name, value, onChange, type = "text" }) {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input className="form-input"
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default Input