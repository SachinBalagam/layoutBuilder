// Write your code here
import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      const onToggleContent = () => {
        onToggleShowContent()
      }

      const onToggleLeftbar = event => {
        onToggleShowLeftNavbar(event.target.value)
      }

      const onToggleRightbar = event => {
        onToggleShowRightNavbar(event.target.value)
      }

      return (
        <div className="controller-bg-container">
          <h1>Layout</h1>
          <div className="checkbox-container">
            <div>
              <input
                type="checkbox"
                id="content"
                onChange={onToggleContent}
                checked={showContent}
              />
              <label htmlFor="content">Content</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="leftNavbar"
                onChange={onToggleLeftbar}
                checked={showLeftNavbar}
              />
              <label htmlFor="leftNavbar">Left Navbar</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="rightNavbar"
                onChange={onToggleRightbar}
                checked={showRightNavbar}
              />
              <label htmlFor="rightNavbar">Right Navbar</label>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
