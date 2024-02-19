import { BodyComponent } from "./components/BodyComponent"
import HeaderComponent from "./components/HeaderComponent"

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
