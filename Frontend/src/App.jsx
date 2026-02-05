import { Route, Routes } from "react-router-dom"
import Notes from "./pages/Notes"

function App() {

  return (
    <div>
       <Routes>
        <Route path="/" element={<Notes />} />
       </Routes>
    </div>
  )
}

export default App
