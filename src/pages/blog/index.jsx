import Header from '@/components/Header'
import HeaderContent from './HeaderContent'
import Content from './Content'
import Author from './Author'
import RelateBlog from './RelateBlog'
import Footer from '@/components/Footer'
import { Stack } from '@mui/material'

function Blog() {
  return (
    <Stack>
      <Header />
      <HeaderContent />
      <Content />
      <Author />
      <RelateBlog />
      <Footer />
    </Stack>
  )
}

export default Blog
