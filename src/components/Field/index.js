import './Field.css'

const Field = ({type = 'text', label, value, required=false, placeholder, aoAlterado}) => {

  const aoDigitar = (event) => {
    aoAlterado(event.target.value)
  }

  return (
    <div className={`field field-${type}`}>
      <label>{label}</label>
      <input 
          type={type} 
          value={value} 
          onChange={aoDigitar} 
          required={required} 
          placeholder={`${placeholder}...`} 
      />
    </div>
  )
}

export default Field
