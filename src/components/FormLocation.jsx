import getRandomNumber from "../utils/getRandomNumber"
import './styles/FormLocation.css'

function FormLocation({ setIdLocation, setCurrentPage }) {
    const handleSubmit = e => {
        e.preventDefault()
        const inputValue = e.target.inputId.value.trim()
        if (inputValue === '' || inputValue === '0') {
            setIdLocation(getRandomNumber(126))
            setCurrentPage(1)
            
        } else {
            setIdLocation(e.target.inputId.value.trim())
            setCurrentPage(1)
        }
        
        e.target.inputId.value = ""
    }
  return (
    <form onSubmit={handleSubmit} className="form">
      <input className="form-input" id="inputId" style={{ boxShadow: '1px 1px 10px' }} type="text" />
      <button className="form-btn" style={{backgroundColor: 'green', color:'white'}}>Search</button>
    </form>
  )
}

export default FormLocation
