import './PrimaryButton.scss'
import '../../index.scss'

const PrimaryButton = ({ color, bgColor, border}) => {
    const buttonStyle = {
      color: color,
      backgroundColor: bgColor,
      border: border
    }
    return(
          <button style={buttonStyle} className="primary-btn">
            see product
          </button>
    )
}

export default PrimaryButton