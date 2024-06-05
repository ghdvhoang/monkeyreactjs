import { Box, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import card from '@/assets/image/card.png'

function Heading() {
  return (
    <Stack >
      <Box sx={{ backgroundColor: 'rgba(0, 209, 237, 1)', width: '80px', height:'3px', marginTop: '50px', borderRadius: '100px' }}></Box>
      <Typography variant="h6" color="rgba(58, 16, 151, 1)" sx={{ fontSize: '50px', marginBottom: '50px', fontFamily: 'Montserrat, sans-serif' }}>
Feature
      </Typography>
    </Stack>
  )
}

function Card() {
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <Box
      sx={{
        width: isSmallScreen ? '90%' : 480,
        height: isSmallScreen ? 300 : 390,
        backgroundImage: `url(${card})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '5%',
        overflow: 'hidden',
        mb: theme.spacing(2)
      }}
    >
      <Stack sx={{ padding: theme.spacing(isSmallScreen ? 2 : 3) }}>
        <Stack direction="row" spacing={isSmallScreen ? 11 : 25} sx={{ alignItems: 'center' }}>
          <Box sx={{ width: isSmallScreen ? '85px' : 100,
            padding: '3px', borderRadius: '7px', textAlign: 'center', backgroundColor: 'rgba(243, 237, 255, 1)', color: 'rgba(107, 107, 107, 1)', textTransform: 'none', fontFamily: 'Montserrat, sans-serif' }}>
            <Typography variant="body2">Kiến thức</Typography>
          </Box>
          <Typography variant="body2" sx={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(248, 249, 250, 1)', marginLeft: '110px' }}>Mar 23 • Andiez Le</Typography>
        </Stack>
        <Typography
          variant="h1"
          sx={{
            fontFamily: 'Montserrat, sans-serif',
            color: 'rgba(255, 255, 255, 1)',
            marginTop: theme.spacing(isSmallScreen ? 3 : 4),
            fontSize: isSmallScreen ? '1.5rem' : '1.8rem',
            width: isSmallScreen ? '90%' : 426
          }}
        >
          Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
        </Typography>
      </Stack>
    </Box>
  )
}

function Feature() {
  return (
    <Stack>
      <Heading />
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px' }}>
        {[1, 2, 3].map((value) => (
          <Card key={value} />
        ))}
      </Box>
    </Stack>
  )
}
export default Feature
