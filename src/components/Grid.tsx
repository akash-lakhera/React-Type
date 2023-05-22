import { useState,useEffect } from "react"
import { DataGrid } from "@mui/x-data-grid"
import {  Box } from "@mui/material";
import UserData from "../User"
function Grid() {
    const [data,setData]=useState<UserData[]>([])
    const columnName = [
        { field: 'userId', headerName: 'UserID', },
        { field: 'id', headerName: 'ID' },
        { field: 'title', headerName: 'Title', width: 600 },
      
      ]
    
    useEffect(() => {
       
            fetch("https://jsonplaceholder.typicode.com/posts")
              .then((data) => data.json())
              .then((data) => setData(data))
         
    
      return () => {
   
      }
    }, [])
    
  return (
    <div>
    <Box sx={{height:"50vh"}}>
    <DataGrid
    sx={{color:"rgb(3, 3, 70)"}}
      rows={data}
      columns={columnName}
      
      initialState={{
          pagination: {
              paginationModel: { pageSize: 10, },
            },
        }}
        
        
        />

        </Box>
  </div>
  )
}
export default Grid