import {
  Box,
  Card,
  CardMedia,
  CardContent
} from '@mui/material'
import slide1 from '../assets/image/slide1.png'
import slide2 from '../assets/image/slide2.png'
import slide3 from '../assets/image/slide3.png'
import slide4 from '../assets/image/slide4.png'
import CardFrame from '@/components/CardFrame'
const cards = [
  { id: 1, image: slide1 },
  { id: 2, image: slide2 },
  { id: 3, image: slide3 },
  { id: 4, image: slide4 }
]

function SlidesImg() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: { xs: 2, sm: 2, md: 3 },
        justifyContent: 'space-evenly',
        margin: '80px 0 50px'
      }}
    >
      {cards.map((card, index) => (
        <Card
          key={index}
          sx={{
            width: 346,
            borderRadius: '20px',
            overflow: 'hidden',
            cursor: 'pointer'
          }}
        >
          <CardMedia component="img" height="200" image={card.image} />
          <CardContent
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 1)',
              padding: '24px'
            }}
          >
            <CardFrame />
            {/* module */}
          </CardContent>
        </Card>
      ))}
    </Box>
  )
}

export default SlidesImg
