import './DropdownList.css'

const DropdownList = (props) => {
  
  const aoSelecionar = (event) => {
    props.aoAlterado(event.target.value)
  }

  return (
    <div className='dropdown-list'>
      <label>{props.label}</label>
      <select onChange={aoSelecionar} required={props.required} value={props.value}>
          <option value={""}></option>
          {props.items.map(item => <option key={item.key}>{item.name}</option>)}
      </select>
    </div>
  )
}

export default DropdownList
