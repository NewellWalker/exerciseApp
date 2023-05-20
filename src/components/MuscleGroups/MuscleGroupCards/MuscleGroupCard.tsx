// import { Props } from './MuscleGroups';



import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MuscleGroupCard() {
    return (
        <Card variant="outlined" sx={{maxWidth: 'md'}}>
            <CardMedia
                sx={{
                    minHeight:140,
                    
                }}
                image='src/assets/AF.jfif'
            />
            <CardContent>
                <Typography variant="h5">
                    Test
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    size="small"
                    sx={{
                        backgroundColor: "lightGray",
                    }}
                >
                    
                </Button>
            </CardActions>
        </Card>
    )
}