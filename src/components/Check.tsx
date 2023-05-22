import { useState } from "react";

import { Box, Checkbox, FormControlLabel } from "@mui/material";
import Collapse from "@mui/material/Collapse";
function Check() {
  const [open1, setOpen1] = useState(true);
  const [open2, setOpen2] = useState(true);
  const [design, setDesign] = useState([false, false, false, false, false]);
  const childHandler = (e: any) => {
    const newlist = design.map((elem, index) => {
      if (e.target.id == index) return e.target.checked;
      else return elem;
    });
    setDesign(newlist);
  };
  const parentHandler = (e: any) => {
    if (e.target.id == "customer")
      setDesign([
        e.target.checked,
        e.target.checked,
        design[2],
        design[3],
        design[4],
      ]);
    else
      setDesign([
        design[0],
        design[1],
        e.target.checked,
        e.target.checked,
        e.target.checked,
      ]);
  };
  const displayHandler = (e: any) => {
    if (e.target.id == "show1") {
      setOpen1(!open1);
    } else setOpen2(!open2);
  };
  const children1 = (
    <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
      <FormControlLabel
        label="support"
        control={
          <Checkbox id={"0"} checked={design[0]} onChange={childHandler} />
        }
      />
      <FormControlLabel
        label="customer_success"
        control={
          <Checkbox id={"1"} checked={design[1]} onChange={childHandler} />
        }
      />
    </Box>
  );
  const children2 = (
    <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
      <FormControlLabel
        label="graphic_design"
        control={
          <Checkbox id={"2"} checked={design[2]} onChange={childHandler} />
        }
      />
      <FormControlLabel
        label="product_design"
        control={
          <Checkbox id={"3"} checked={design[3]} onChange={childHandler} />
        }
      />
      <FormControlLabel
        label="web_design"
        control={
          <Checkbox id={"4"} checked={design[4]} onChange={childHandler} />
        }
      />
    </Box>
  );
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          gap: "40px",
          marginTop: "40px",
          alignItems: "center",
        }}
      >
        <Box
          id="show1"
          onClick={displayHandler}
          sx={{ fontSize: "30px", cursor: "pointer" }}
        >
          -
        </Box>
        <FormControlLabel
          label="customer_service"
          control={
            <Checkbox
              id="customer"
              checked={design[0] && design[1]}
              onChange={parentHandler}
            />
          }
        />
      </Box>
      <Collapse in={open1} timeout="auto">
        {children1}
      </Collapse>

      <Box
        sx={{
          display: "flex",
          gap: "40px",
          marginTop: "40px",
          alignItems: "center",
        }}
      >
        <Box
          id="show2"
          onClick={displayHandler}
          sx={{ fontSize: "30px", cursor: "pointer" }}
        >
          -
        </Box>

        <FormControlLabel
          label="design"
          control={
            <Checkbox
              id="design"
              checked={design[2] && design[3] && design[4]}
              onChange={parentHandler}
            />
          }
        />
      </Box>
      <Collapse in={open2} timeout="auto">
        {children2}
      </Collapse>
    </div>
  );
}
export default Check;
