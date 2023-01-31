import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';



export default function BasicCard() {
  return (
    <Card sx={{ width: 356, 
    height: 239,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: "32"}}>
      <CardContent sx={{top: 32, left: 33}}>
        <Typography variant="h5" sx={{ 
          fontSize: 24, 
          alignItems: "center" 
          }} 
          color="text.primary" 
          gutterBottom >
          Card
        </Typography>
        <Typography variant="body2" sx ={{
          alignItems: "center", 
          fontSize: 16, 
          width: 286, 
          height: 72
        }} 
          color="text.primary" > 
        Emmanuel, always have in mind tht you are a great person. A man of valor.No matter  you would excel.
        </Typography>
      </CardContent>
      
      <CardActions sx={{display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "9rem" }}>
        <Button size="small" sx={{
          padding: "11 74",
          width: 147,
          height: 39,
          color: 'primary.contrastText',
          bgcolor: 'text.primary',
          borderRadius: 12
        }}>
          Button
          </Button>
        <InfoOutlinedIcon sx ={{
        width: 40, 
        height: 40, 
        left: 284, 
        top: 167,
        }} />
      </CardActions>
    </Card>
  );
}