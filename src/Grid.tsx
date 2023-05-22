import { useState,useEffect } from "react"
import { DataGrid } from "@mui/x-data-grid"
import UserData from "./User"
function Grid() {
    const [data,setData]=useState<UserData[]>([])
    const columnName = [
        { field: 'userId', headerName: 'UserID', },
        { field: 'id', headerName: 'ID' },
        { field: 'title', headerName: 'Title', width: 600 },
      
      ]
    console.log(data)
    useEffect(() => {
       
            fetch("https://jsonplaceholder.typicode.com/posts")
              .then((data) => data.json())
              .then((data) => setData(data))
         
    
      return () => {
   
      }
    }, [])
    
  return (
    <div><div style={{ width: '100%',height:600 }}>
    <DataGrid
      rows={data}
      columns={columnName}
      autoHeight={true}
      rowHeight={100}
    />
  </div></div>
  )
}
export default Grid