import './index.css'

const TabItem = props => {
  const {tabDetails, onHandleTabClick, isActiveOrNot} = props
  const {displayText} = tabDetails
  const handleButtonClick = () => {
    onHandleTabClick(tabDetails.tabId)
  }
  const applyButtuonCSS = isActiveOrNot ? 'active-tab-btn' : ''
  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${applyButtuonCSS}`}
        onClick={handleButtonClick}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
