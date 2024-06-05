import { Box, Container, Typography, Grid } from '@mui/material'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import { Link } from '@mui/material'
import Copyright from './Copyright'


export default function Footer() {
  return (
    <>
      <Grid id="footer" container bgcolor='#F5F5F7'>
        <Container
          maxWidth ='lg'
          sx={{
            paddingTop: '60px'
          }}>
          <Grid item >
            <Grid
              container
              rowSpacing={2}
              columnSpacing={15}>
              <Grid item xs={12} sm={6} md={4} lg={4}>
                <Box marginBottom={'16px'}>
                  <Box
                    marginLeft={'40px'}
                    sx={{
                      Width: '85',
                      minHeight: 95,
                      textAlign: 'center',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: '20%',
                      backgroundImage: 'url(/public/react.svg)'
                    }}
                  ></Box>
                  <Typography variant="h3" fontSize='18px' fontWeight={'600'} color={'#00A7B4'}>Monkey Blogging</Typography>
                </Box>
                <Typography fontSize={'14px'} width={'320px'}>The best apartment and condominium management website today</Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={2.5} lg={2.2}>
                <Typography variant="h3" fontSize='18px' fontWeight={'600'} color={'#00A7B4'}
                  sx={{
                    paddingBottom: '16px'
                  }}
                >Property</Typography>
                <Typography fontSize={'14px'}>House</Typography>
                <Typography fontSize={'14px'}>Apartment</Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={2.5} lg={2.2}>
                <Typography variant="h3" fontSize='18px' fontWeight={'600'} color={'#00A7B4'}
                  sx={{
                    paddingBottom: '10px'
                  }}
                >Article</Typography>
                <Typography fontSize={'14px'}>New Article</Typography>
                <Typography fontSize={'14px'}>Popular Article</Typography>
                <Typography fontSize={'14px'}>Most Read</Typography>
                <Typography fontSize={'14px'}>Tips & Tricks</Typography>
              </Grid>
              <Grid item xs={'auto'} md={3} sm={6} lg={3.5}>
                <Typography variant="h3" fontSize='18px' fontWeight={'600'} color={'#00A7B4'}
                  sx={{
                    paddingBottom: '10px'
                  }}
                >Contanct</Typography>
                <Typography fontSize={'14px'}>No.24, Lane 165, Khuong Thuong Street</Typography>
                <Typography fontSize={'14px'}>+(84) 123456789</Typography>
                <Typography fontSize={'14px'}>joncer.609@gmail.com</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item mb='20px' mt='36px' >
            <Link href="/" color='#3C4563'>
              <FacebookOutlinedIcon
                sx={{
                  mr: 3,
                  ':hover': {
                    cursor: 'pointer',
                    color: '#00A7B4'
                  }
                }} />
            </Link>
            <Link href="/" color='#3C4563'>
              <TwitterIcon
                sx={{
                  mr: 3,
                  ':hover': {
                    cursor: 'pointer',
                    color: '#00A7B4'
                  }
                }} />
            </Link>
            <Link href="/" color='#3C4563'>
              <InstagramIcon
                sx={{
                  mr: 3,
                  ':hover': {
                    cursor: 'pointer',
                    color: '#00A7B4'
                  }
                }} />
            </Link>
          </Grid>
          <Grid item >
            <Box width='auto'
              height='1px'
              bgcolor='#0000001A'
            />
            <Grid
              item mt={'16px'}
              display={'flex'}
              justifyContent={'center'}
            >
              <Copyright sx={{ mt: 0, mb: 1 }} />
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </>
  )
}
