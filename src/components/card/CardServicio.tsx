import { Card, Grid, Typography } from "@mui/material"

const tarjetas = [
    { name: 'Odontologia Cosmetica', image: '/images/1.png' },
    { name: 'Odontologia Restaurativa', image: '/images/2.png' },
    { name: 'Odontopediatria', image: '/images/3.png' },
    { name: 'Ortodoncia', image: '/images/4.png' },
  ];

function CardServicio() {

    return (
        <>
            {tarjetas.map((tarjeta) => (
                <Grid item xs={3} md={3}>
                    <Card  sx={{ textAlign : 'center', p : 2, marginLeft : 5, marginRight : 5}}>
                        <img src={tarjeta.image} alt="" />
                        <Typography variant="h6" sx={{ display: 'block', p: 2 }}>
                            {tarjeta.name}
                        </Typography>
                        <Typography variant="button" sx={{ display: 'block', mb: 2, fontWeight : 'bold', color : 'green' }}>
                            Más Informacion
                        </Typography>
                    </Card>
                </Grid>
            ))}
        </>
  )
}

export default CardServicio