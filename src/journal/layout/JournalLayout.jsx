/* eslint-disable react/prop-types */
import { Box, Toolbar } from "@mui/material"
import { Navbar } from "../components/Navbar"
import { SideBar } from "../components/SideBar";
/* si es un layout recibira un children */
export const JournalLayout = ({children}) => {
  const drawerWidth = 240;
  return (
    <Box sx={{display: 'flex'}}>
        {/* navbar */}
        <Navbar drawerWidth= {drawerWidth}/>
        {/* sidebar */}
        <SideBar drawerWidth={drawerWidth}/>
        {/* main */}
        <Box 
        component='main' 
        sx={{flexGrow : 1,p : 3}}
        >
        <Toolbar/>
        {children}
        </Box>
    </Box>
  )
}
