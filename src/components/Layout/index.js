// Write your code here
import './index.css'
import Header from '../Header'
import Body from '../Body'
import Footer from '../Footer'

const Layout = () => (
  <div className="bg-container">
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  </div>
)

export default Layout
