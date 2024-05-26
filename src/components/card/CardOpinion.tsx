import { Box, Card, Grid, Typography } from "@mui/material"

function CardOpinion() {
  return (
    <>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant="button" sx={{ display: 'block', paddingLeft: 5, paddingBottom : 5, fontWeight : 'bold' }}>
                    Opiniones de nuestros pacientes
                </Typography>
            </Grid>
        </Grid>
        <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={3} md={3}>
                <Card  style={{ border: '2px solid black', borderRadius: '15px' }} sx={{ textAlign : 'left', p : 2, marginLeft : 3, marginRight : 3}}>
            
                    <Typography variant="body2" sx={{ display: 'block', p: 2 }}>
                    "Excelente servicio en Brillo Dental. Trato amable, procedimientos indoloros. !Mi sonrisa nunca ha estado mejor¡"
                    </Typography>
                    <Typography variant="button" sx={{ display: 'block', mb: 2, fontWeight : 'bold', marginLeft : 2 }}>
                    Lucia P.
                    </Typography>
                </Card>
            
            </Grid>
            <Grid item xs={12} sm={3} md={3}>
                <Card style={{ border: '2px solid black', borderRadius: '15px' }}  sx={{ textAlign : 'left', p : 2, marginLeft : 3, marginRight : 3}}>
           
                <Typography variant="body2" sx={{ display: 'block', p: 2 }}>
                        "En magia dental me senti como en casa. Profesionales exepcionales y resultados sorprendentes.!Muy recomendado¡"
                    </Typography>
                    <Typography variant="button" sx={{ display: 'block', mb: 2, fontWeight : 'bold', marginLeft : 2 }}>
                        Jorge E.
                    </Typography>
                </Card>
            </Grid>
            <Grid item xs={12} sm={3} md={3}>
                <Card  style={{ border: '2px solid black', borderRadius: '15px' }} sx={{ textAlign : 'left', p : 2, marginLeft : 3, marginRight : 3}}>
                <Typography variant="body2" sx={{ display: 'block', p: 2 }}>
                    "Magia Dental transformo mi sonrisa con eficiencia y cuidado. !El mejor dentista al que he ido¡"
                    </Typography>
                    <Typography variant="button" sx={{ display: 'block', mb: 2, fontWeight : 'bold', marginLeft : 2}}>
                        Sofia M.
                    </Typography>
                </Card>
            </Grid>
      </Grid>
    </>
  )
}

export default CardOpinion