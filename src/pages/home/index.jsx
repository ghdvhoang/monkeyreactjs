import Header from '@/components/Header'
import Feature from '@/components/Feature'
import NewestUpdate from '@/components/NewestUpdate'
import Banner from '@/components/Banner'
import SlidesImg from '@/components/SlidesImg'
import Footer from '@/components/Footer'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import '@/components/app.css'

function Home() {

  const navigate = useNavigate()
  useEffect(() => {
    let token = localStorage.getItem('token')
    if (!token) {
      navigate('/login')
    }
  })
  return (
    <>
      <Header />
      <Banner />
      <Feature />
      <NewestUpdate />
      <SlidesImg />
      <Footer />
    </>
  )
}

export default Home
