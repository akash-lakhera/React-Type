
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css'
import Form from "./components/Form";
import Auth from "./components/Auth";
import Grid from "./components/Grid";
import Check from "./components/Check";
function App() {



  return (
<>
<BrowserRouter>
<Routes>
<Route path="/" element={<Form/>}/>
<Route path="/dash" element={<Auth>
<Grid/>
<Check/>
</Auth>}/>



</Routes>



</BrowserRouter>
</>
  )
}

export default App
