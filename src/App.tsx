
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css'
import Form from "./Form";
import Auth from "./Auth";
function App() {



  return (
<>
<BrowserRouter>
<Routes>
<Route path="/" element={<Form/>}/>
<Route path="/dash" element={<Auth>
here goes
</Auth>}/>



</Routes>



</BrowserRouter>
</>
  )
}

export default App
