import TextLanding from "../components/TextLanding.jsx"
import Button from "../components/Button.jsx"
import Header from "../components/Header.jsx"


/**
 * Contains all items to render in home view
 * @returns React.JSX.Element
 */
function HomeView() {
  return (
    <div className="home-view-container">
      <Header />
      <div className="home-view">
        <TextLanding />
        <Button label="Download My CV" />
      </div>
    </div>
  )
}

export default HomeView