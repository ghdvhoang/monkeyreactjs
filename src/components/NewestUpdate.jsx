import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Blog from '@/assets/image/blog.png'
import one from '@/assets/image/one.svg'
import two from '@/assets/image/two.svg'
import three from '@/assets/image/three.svg'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import { useMediaQuery, useTheme } from '@mui/material'
import KnowledgeBT from './KnowledgeBT'

function Headline() {
  return (
    <Stack>
      <Stack>
        <Box sx={{ backgroundColor: 'rgba(0, 209, 237, 1)', width: '80px', height:'3px', marginTop: '50px', borderRadius: '100px' }}></Box>
        <Typography variant="h6" color="rgba(58, 16, 151, 1)" sx={{ fontSize: { xs: '30px', md: '50px' } }}>
            Newest Update
        </Typography>
      </Stack>
    </Stack>
  )
}

function Banner_Left() {
  const theme = useTheme()
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <Stack spacing = {2}>
      <Box sx={{
        height: isMediumScreen ? 300 : 440,
        backgroundImage: `url(${Blog})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
        borderRadius: '20px'
      }}>
      </Box>
      <Stack>
        <Stack sx={{
          width: '90px',
          borderRadius: '7px',
          textAlign: 'center',
          backgroundColor: 'rgba(243, 237, 255, 1)',
          textTransform: 'none',
          marginTop: { xs: '10px', sm: '15px', md: '25px' }
        }}>
          <Typography>
        Kiến thức
          </Typography>
        </Stack>
        <Typography variant='h1'
          sx = {{
            color: 'rgba(35, 35, 35, 1)',
            marginTop: { xs: '5px', sm: '10px', md: '15px' },
            fontSize: { xs: '24px', sm: '28px', md: '30px' }
          }}>
            Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
        </Typography>
        <Typography variant="body2"
          sx = {{
            color: 'rgba(35, 35, 35, 1)',
            marginTop: { xs: '5px', sm: '10px', md: '15px' }
          }}>
          Mar 23 • Andiez Le
        </Typography>
      </Stack>
    </Stack>
  )
}

function Slider() {
  return (
    <Stack direction="column"
      sx ={{
        background: 'rgba(243, 237, 255, 1)',
        flex: 1,
        borderRadius: '15px'
      }}>
      <Stack spacing={2}>
        {[one, two, three].map((image, index) => (
          <Card key={index} sx={{
            display: 'flex',
            backgroundColor: 'rgba(243, 237, 255, 1)',
            boxShadow: 'none',
            padding: '20px',
            borderRadius: '3%' }}>
            <CardMedia
              sx = {{ width: '30%' }}
              component="img"
              image={image}
              alt={`Card ${index + 1}`}
            />
            <Stack sx={{ display: 'flex',
              flexDirection: 'column',
              width: '100%' }}>
              <CardContent>
                <KnowledgeBT />
                <Typography variant='h6' sx = {{
                  color: 'rgba(35, 35, 35, 1)',
                  marginTop: '8px',
                  width: '100%',
                  lineHeight: { xs: '20px', sm: '22px', md: '24px' },
                  fontSize: { xs: '16px', sm: '18px', md: '20px' },
                  marginBottom: '10px' }}>
                    Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
                </Typography>
                <Typography variant="body2"
                  sx = {{
                    color:'rgba(35, 35, 35, 1)'
                  }}>
                    Mar 23 • Andiez Le
                </Typography>
              </CardContent>
            </Stack>
          </Card>
        ))}
      </Stack>
    </Stack>
  )
}
export default function NewestUpdate() {
  return (
    <Grid container spacing={2} alignItems='center'>
      <Grid item xs={12}><Headline/></Grid>
      <Grid item xs={12} md = {6}><Banner_Left/></Grid>
      <Grid item xs={12} md = {6}><Slider/></Grid>
    </Grid>
  )
}
