import author from '@/assets/image/author.png'
import { CardMedia, Typography, CardContent, Box, Card } from '@mui/material'
var authordata = [
  { image: author, name: 'Jake Sullivan', about: 'Gastronomy atmosphere set aside. Slice butternut cooking home. Delicious romantic undisturbed raw platter will meld. Thick Skewers skillet natural, smoker soy sauce wait roux.  Gastronomy atmosphere set aside. Slice butternut cooking home. ' }
]
function Author() {
  return (
    <Box>
      {authordata.map((author) => (
        <Card item key = {author.name}
          sx= {{
            my: 8,
            mx: 'auto',
            height: 'auto',
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'center',
            width: { xs: '100%', sm: '70%', md: '60%' },
            borderRadius: '20px'
          }}>
          <CardMedia
            component = 'img'
            image= {author.image}
            sx= {{
              width: { xs: '100%', sm: '50%' },
              borderRadius: '20px'
            }}
          />
          <CardContent
            sx= {{
              width: { xs: '100%', sm: '65%' }
            }}>
            <Typography variant="h6"
              color = "rgba(35, 187, 134, 1)"
              sx= {{
                fontSize: '22px',
                my: '10px',
                lineHeight: '28px',
                fontWeight: 600
              }}>
              {author.name}
            </Typography>
            <Typography variant="body2"
              sx= {{
                fontSize: '18px',
                lineHeight: '28px'
              }}>
              {author.about}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  )
}
export default Author
