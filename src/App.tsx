import { BodyComponent } from "./components/BodyComponents/BodyComponent"
import HeaderComponent from "./components/HeaderComponents/HeaderComponent"

function App() {

  return (
    <>
    <div className="bg-black">
      <HeaderComponent />
      <div className="bg-white">
        <hr />
      </div>
      <BodyComponent />
    </div>
    </>
  )
}

export default App
