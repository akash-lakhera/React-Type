
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css'
import Form from "./Form";
import Auth from "./Auth";
import Grid from "./Grid";
function App() {



  return (
<>
<BrowserRouter>
<Routes>
<Route path="/" element={<Form/>}/>
<Route path="/dash" element={<Auth>
<Grid/>
</Auth>}/>



</Routes>



</BrowserRouter>
</>
  )
}

export default App
