import { Box, Typography, Stack, Grid } from '@mui/material'
import Blog from '@/assets/image/blog.png'
import VisibilityIcon from '@mui/icons-material/Visibility'
function HeaderContent() {
  return (
    <Grid
      container
      sx={{
        // minHeight: { xs: '80%', sm: '90%', md: '50%' },
        my: { xs: 2, sm: 3, md: 4 }
      }}>
      <Grid item xs={12} sm={6} md={6}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
        <Box
          component="img"
          src={ Blog }
          alt="Blog Image"
          sx={{
            width: { xs: '100%', sm: '90%', md: '95%' },
            height: 'auto',
            borderRadius: '20px'
          }}
        />
      </Grid>
      <Grid
        item xs={12} sm={6} md={6} order={{ xs: 2, sm: 1 }} sx={{ display: 'flex', alignItems: 'center', padding: '2rem' }}>
        <Stack>
          <Stack sx={{
            width: '90px',
            borderRadius: '7px',
            textAlign: 'center',
            backgroundColor: 'rgba(243, 237, 255, 1)',
            textTransform: 'none',
            padding: '4px 10px',
            marginTop: { xs: '10px', sm: '15px', md: '25px' }
          }}>
            <Typography>
        Kiến thức
            </Typography>
          </Stack>
          <Typography variant='h1'
            sx = {{
              color: 'rgba(35, 187, 134, 1)',
              marginTop: { xs: '5px', sm: '10px', md: '25px' },
              fontSize: { xs: '24px', sm: '28px', md: '40px' }
            }}>
            Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
          </Typography>
          <Stack
            sx = {{
              color: 'rgba(107, 107, 107, 1)',
              marginTop: { xs: '5px', sm: '10px', md: '15px' },
              fontSize: '18px',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
            <Typography>
          Mar 23 • Andiez Le
            </Typography>
            <Typography sx = {{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <VisibilityIcon/>1234
            </Typography>
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  )
}

export default HeaderContent
