import './TextField.css'

const TextField = (props) => {

  const aoDigitar = (event) => {
    props.aoAlterado(event.target.value)
  }

  return (
    <div className="text-field">
      <label>{props.label}</label>
      <input value={props.value} onChange={aoDigitar} required={props.required} placeholder={`${props.placeholder}...`} />
    </div>
  )
}

export default TextField
