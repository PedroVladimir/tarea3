
import CardImageMain from "@/components/card/CardImageMain";
import CardMain from "@/components/card/CardMain";
import CardOpinion from "@/components/card/CardOpinion";
import CardServicio from "@/components/card/CardServicio";
import RedesSociales from "@/components/redes/RedesSociales";
import { Grid, Typography } from "@mui/material";

export default function Home() {
  return (
    <main>
      <Grid container spacing={2} paddingTop={8} paddingBottom={8} >
        <Grid item xs={false} md={1}></Grid>
        <Grid item xs={10} md={4}>
          <CardMain />
        </Grid>
        <Grid item xs={12} md={6}>
          <CardImageMain />
        </Grid>
      </Grid>  
      <Grid container  sx={{ paddingTop : 5, paddingBottom : 5, backgroundColor : '#f1f5f9' }}> 
        <CardServicio />  
      </Grid>  
      <Grid container sx={{ paddingTop : 5, paddingBottom : 5 }}>
        <CardOpinion />
      </Grid>
      <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center" sx={{ paddingTop : 5, paddingBottom : 5, backgroundColor : '#f1f5f9' }}>
        <RedesSociales />
      </Grid>
      <Grid container sx={{ paddingTop : 2, paddingBottom : 2 }}>
      </Grid>
    </main>
  );
}
