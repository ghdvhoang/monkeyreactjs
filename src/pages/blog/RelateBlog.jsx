import Blog from '@/assets/image/blog.png'
import {
  Box,
  Card,
  CardMedia,
  CardContent
} from '@mui/material'
import CardFrame from '@/components/CardFrame'
const cards = [
  {
    image: Blog
  },
  {
    image: Blog
  },
  {
    image: Blog
  },
  {
    image: Blog
  }
]
function RelateBlog() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 2,
        justifyContent: 'space-evenly',
        margin: '50px auto',
        cursor: 'pointer'
      }}
    >
      {cards.map((card, index) => (
        <Card
          key={index}
          sx={{
            width: 346,
            borderRadius: '20px',
            overflow: 'hidden'
          }}
        >
          <CardMedia component="img" image={card.image} />
          <CardContent
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 1)',
              padding: '24px'
            }}
          >
            <CardFrame />
          </CardContent>
        </Card>
      ))}
    </Box>
  )
}

export default RelateBlog
