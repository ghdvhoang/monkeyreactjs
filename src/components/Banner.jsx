import { Box, Typography, Button, Grid } from '@mui/material'
import man from '../assets/image/man.svg'

function Banner() {
  return (
    <Grid
      container sx={{ background: 'linear-gradient(to bottom, #00B4AA 6.67%, #A4D96C 84.1%)', minHeight: '643px' }}>
      <Grid
        item xs={12} sm={6} md={6} order={{ xs: 2, sm: 1 }} sx={{ display: 'flex', alignItems: 'center', padding: '2rem' }}>
        <Box sx={{ color: 'white' }}>
          <Typography variant="h3" component="h1" sx={{ mb: 2, fontWeight: 'bold', fontSize: { xs: '2.3rem', sm: '3.5rem', md: '4.5rem' } }}>
            Monkey Blogging
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, maxWidth: { xs: '100%', sm: 500, md: 600 }, fontSize: { xs: '1rem', sm: '1.2rem' }, lineHeight: '1.5' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
          </Typography>
          <Button component="a"
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" variant="contained" target="_blank"
            sx={{
              background: 'rgba(255, 255, 255, 1)',
              color: 'rgba(35, 187, 134, 1)',
              padding: '1rem 3rem',
              transition: '0.3s',
              '&:hover': {
                backgroundColor: 'rgba(35, 187, 134, 1)',
                color: 'white',
                boxShadow: '0px 4px 8px rgba(35, 187, 134, 0.5)'
              }
            }}>
            Get Started
          </Button>
        </Box>
      </Grid>

      <Grid item xs={12} sm={6} md={6} order={{ xs: 1, sm: 2 }} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box
          component="img"
          src={man}
          alt="Banner Image"
          sx={{
            width: { xs: '80%', sm: '90%', md: '100%' },
            maxWidth: 650,
            height: 'auto'
          }}
        />
      </Grid>
    </Grid>
  )
}

export default Banner
