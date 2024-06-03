import { Box, Stack, Typography } from '@mui/material'

function CardFrame() {
  return (
    <Stack direction="column">
      <Box
        sx={{
          width: '90px',
          borderRadius: '7px',
          textAlign: 'center',
          backgroundColor: 'rgba(243, 237, 255, 1)',
          textTransform: 'none',
          fontFamily: 'Montserrat, sans-serif'
        }}
      >
        <Typography color={'rgba(107, 107, 107, 1)'}>
                  Kiến thức
        </Typography>
      </Box>
      <Typography
        variant="h1"
        sx={{
          fontFamily: 'Montserrat, sans-serif',
          color: 'rgba(35, 35, 35, 1)',
          marginTop: '15px',
          marginBottom: ' 25px',
          width: '320px',
          fontSize: '20px'
        }}
      >
        Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
      </Typography>
      <Typography
        variant="body2"
        sx={{
          color: 'rgba(107, 107, 107, 1)'
        }}
      >
        Mar 23 • Andiez Le
      </Typography>
    </Stack>
  )
}

export default CardFrame
