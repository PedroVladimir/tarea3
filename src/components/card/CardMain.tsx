import { Box, Button, Typography } from '@mui/material'
import React from 'react'

function CardMain() {
    return (
        <Box sx={{ textAlign: 'left' }} paddingLeft={15}>
        <Typography variant="caption" sx={{ display: 'block', mb: 2 }}>
          Clínica Odontológica especializada
        </Typography>
        <Typography variant="h3" sx={{ mb: 3 }}>
          Atención para todas las edades
        </Typography>
        <Box sx={{ mb: 2 }}>
          <Button variant="contained" color="success">
            Reservar en línea
          </Button>
        </Box>
        <Typography variant="caption" sx={{ display: 'block', mb: 2 }}>
          o llama al 800-10-01-02
        </Typography>
      </Box>
    )
}

export default CardMain