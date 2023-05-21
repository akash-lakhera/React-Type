import { useState } from 'react'
import { TextField } from '@mui/material'
import {useNavigate} from "react-router-dom"
import User from './Inter'
function Form() {
    const nav=useNavigate()
    const [form,setForm]=useState<User>({name:"",phone:"",email:""})
    const formChangeHandler=(e:any):void=>{
      console.log(e.target.id)
      setForm({...form,[e.target.id]:e.target.value})
    } 
    const handleSubmit=(e:any)=>{
        e.preventDefault()
        window.localStorage.setItem("name",form.name)
        window.localStorage.setItem("phone",form.phone)
        window.localStorage.setItem("email",form.email)
        nav("/dash")
    }
  return (
    <>
    <form onSubmit={handleSubmit}>

    <TextField onChange={formChangeHandler} id="name" label="Name" variant="outlined" value={form.name} />
    <TextField onChange={formChangeHandler} id="phone" label="Phone" variant="outlined" value={form.phone} />
    <TextField onChange={formChangeHandler} id="email" label="Email" variant="outlined" value={form.email} />
    <button>Submit</button>
    </form>
      
    </>
  )
}
export default Form