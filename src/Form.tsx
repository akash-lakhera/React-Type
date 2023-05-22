import { useState } from "react";
import { TextField, Box, Button, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import User from "./Inter";
function Form() {
  const nav = useNavigate();
  const [err, setErr] = useState({ name: true, phone: true, email: true });
  const [form, setForm] = useState<User>({ name: "", phone: "", email: "" });
  const formChangeHandler = (e: any): void => {
    console.log(e.target.id);
    setForm({ ...form, [e.target.id]: e.target.value });
    console.log(form.phone=="")
    if ((form.name == '')) {
      setErr((err) => {
        return { ...err, name: true };
      });
    } else
      setErr((err) => {
        return { ...err, name: false };
      });
    if ((form.phone == '')) {
      setErr((err) => {
        return {...err, phone: true };
      });
    }else
    setErr((err) => {
      return { ...err, phone: false };
    });
    if ((form.email == '')) {
      setErr((err) => {
        return { ...err, email: true };
      });
    }else
    setErr((err) => {
      return { ...err, email: false };
    });
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("handleredead");

    window.localStorage.setItem("name", form.name);
    window.localStorage.setItem("phone", form.phone);
    window.localStorage.setItem("email", form.email);
    nav("/dash");
  };
console.log(form)
console.log(err)
  return (
    <>
      <Grid container sx={{ minHeight: "50vh" }}>
        <Typography
          color="secondary"
          variant="h4"
          sx={{ width: "100%" }}
          align="center"
        >
          Enter Your Details
        </Typography>
        <Box sx={{ width: "100%" }}>
          <form className="form" onSubmit={handleSubmit}>
            <TextField
               required
              error={err.name}
              color="secondary"
              onChange={formChangeHandler}
              id="name"
              label="Name"
              variant="outlined"
              value={form.name}
            />
            <TextField
               required
              error={err.phone}
              color="secondary"
              onChange={formChangeHandler}
              id="phone"
              label="Phone"
              variant="outlined"
              value={form.phone}
            />
            <TextField
            required
              error={err.email}
              color="secondary"
              onChange={formChangeHandler}
              id="email"
              label="Email"
              variant="outlined"
              value={form.email}
            />
          <Box>

            <Button
            type="submit"
            color="secondary"
            sx={{ marginTop: "40px" }}
            variant="outlined"
            >
              Submit
            </Button>
              </Box>
          </form>
        </Box>
      </Grid>
    </>
  );
}
export default Form;
