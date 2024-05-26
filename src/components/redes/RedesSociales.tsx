"use client"
import { CardContent, Grid, Typography } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import React from 'react'

function RedesSociales() {
  return (
    <Grid item xs={10} md={6}>
      <CardContent>
        <Typography variant='subtitle1' component='div' textAlign='center' py={1}>
          Siguenos en Redes Sociales
        </Typography>
        <Typography variant="body2" component='div' textAlign='center'>
            <TwitterIcon style={{ fontSize: 40, marginRight: 10 }}  />
            <WhatsAppIcon style={{ fontSize: 40,  margin: '0 10px' }} />
            <FacebookRoundedIcon  style={{ fontSize: 40,  margin: '0 10px' }} />
            <YouTubeIcon style={{ fontSize: 40,marginLeft: 10 }} />
        </Typography>
        <Typography variant='subtitle1' component='div' textAlign='center' py={2}>
          Politica de Privacidad
        </Typography>
      </CardContent>
  </Grid>
  )
}

export default RedesSociales