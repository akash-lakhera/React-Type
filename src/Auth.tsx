import {useNavigate} from "react-router-dom"
function Auth(props:any) {
  const nav=useNavigate()
  let user=localStorage.getItem("name");
  console.log(user)
  console.log(props.children)
  let display:any=""
  if(user){
     display= props.children

  }
else nav("/")
  return (
    <>
    {display}
    
    </>
  )
}
export default Auth