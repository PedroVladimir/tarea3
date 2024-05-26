"use client"
import { Box, Button, MenuItem, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const pages = [
  { name: 'Nosotros', href: '/nosotros' },
  { name: 'Servicios', href: '/servicios' },
  { name: 'Nuevos Pacientes', href: '/nuevos-pacientes' },
  { name: 'Contactos', href: '/contactos' }
];

function MenuItems() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
      };
    
      const handleCloseNavMenu = () => {
        console.log("hiciste click");
        setAnchorElNav(null);
      };
    
   
    return (
        <>
           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
           {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}  >
                  <Link href={page.href} passHref style={{ textDecoration : 'none'}}> 
                    <Button key={page.name} sx={{ my: 1, color: 'black', display: 'block'}} >
                      {page.name}
                    </Button>
                  </Link>
                </MenuItem>
              ))}
          </Box>
        </>
    )
}

export default MenuItems