import {
  TextField,
  Box,
  Typography,
  Button
} from '@mui/material'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import * as Yup from 'yup'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { toast, Slide } from 'react-toastify'
// import monkey from '@/assets/image/monkey.png'
const Schema = Yup.object({
  fullname: Yup.string()
    .required('Please enter your fullname.'),
  email: Yup.string()
    .email('Invalid email')
    .required('Please enter your email. '),
  phone: Yup.string()
    .min(9, 'Phone number must be at least 9 digits long')
    .matches( /^[0-9]+$/, 'Invalid phone number. ')
    .required('Please enter your phone number. '),
  message: Yup.string().min(50, 'Message must be at least 50 characters long.').required('Please leave us your message. ')
})

function Contact() {

  return (
    <Box>
      <Header/>
      <Box
        width="100%"
        height="auto"
        sx= {{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          mb: 3
        }}>
          <Typography
            fontWeight="bold"
            sx = {{
              background: 'linear-gradient(to right, #66CDAA, #87CEFA)',
              WebkitBackgroundClip: 'text', // Cho trình duyệt Webkit
              WebkitTextFillColor: 'transparent', // Loại bỏ màu chữ gốc
              backgroundClip: 'text', // Cho các trình duyệt khác
              textFillColor: 'transparent',
              mt: 6,
              fontSize: { xs: 40, sm: 50, md: 60 }
            }}>
      Monkey Blogging
          </Typography>
        </Box>
        <Box
          sx= {{
            display: { xs: 'column', sm: 'column', md: 'flex' },
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '65%',
            margin: '50px auto',
            gap: '20px'
          }}>
          <Box>
            <Box
              sx={{
                width: 'auto',
                minWidth: 250,
                height: '160px',
                mb: { xs: 3, sm: 5, md: 7 },
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundImage: 'url(/monkey.svg)'
              }}
            ></Box>
            <Typography
              fontWeight={'700'}
              lineHeight={'48px'}
              variant="h3"
              pr="10px"
              pl="30px"
              color={'#2EBAC1'}
            >
            </Typography>
            <Box
              sx = {{
                mb: 10,
                textAlign: 'center'
              }}>
              <Typography color={'#2EBAC1'}
                sx = {{
                  fontWeight: 400,
                  fontSize: '35px',
                  lineHeight:'48px' }}>
                  Don&apos;t be shy!
              </Typography>
              <Typography color={'#2EBAC1'}
                sx = {{
                  fontWeight: 200,
                  fontSize: '35px',
                  lineHeight:'48px'
                }}>
                Let&apos;s say hi to us.
              </Typography>
            </Box>
          </Box>

          <Formik
            initialValues={{ fullname: '', email: '', phone: '', message: '' }}
            validationSchema={Schema}
            onSubmit={ () => {
              toast.success('Thank you for your message. ',
                { transition: Slide, autoClose: 3000 })
            }}
          >
            <Form>
              <Box marginTop={'24px'} textAlign={'left'}>
                <Typography
                  variant="h4"
                  fontSize={'16px'}
                  fontWeight={'600'}
                  color={'#3C4563'}
                >
               Fullname
                </Typography>
                <Field
                  name="fullname"
                  as={TextField}
                  placeholder=" Name"
                  variant="outlined"
                  type="text"
                  sx={{
                    width: { xs: 275, sm: 470, md: 500 },
                    backgroundColor: ' white',
                    borderRadius: '20px',
                    marginTop: '8px',
                    '& .css-7ohhq8-MuiInputBase-root-MuiOutlinedInput-root': {
                      borderRadius: '20px'
                    },
                    '.css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': {
                      padding: '14px 14px'
                    }
                  }}
                />
                <ErrorMessage name="fullname" component="p" style={{ color: 'red' }} />
              </Box>
              <Box marginTop={'24px'} textAlign={'left'}>
                <Typography
                  variant="h4"
                  fontSize={'16px'}
                  fontWeight={'600'}
                  color={'#3C4563'}
                >
                Email address
                </Typography>
                <Field
                  name="email"
                  as={TextField}
                  placeholder="email@gmail.com"
                  variant="outlined"
                  type="text"
                  sx={{
                    width: { xs: 275, sm: 470, md: 500 },
                    backgroundColor: ' white',
                    borderRadius: '20px',
                    marginTop: '8px',
                    '& .css-7ohhq8-MuiInputBase-root-MuiOutlinedInput-root': {
                      borderRadius: '20px'
                    },
                    '.css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': {
                      padding: '14px 14px'
                    }
                  }}
                />
                <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
              </Box>
              <Box marginTop={'24px'} textAlign={'left'}>
                <Typography
                  variant="h4"
                  fontSize={'16px'}
                  fontWeight={'600'}
                  color={'#3C4563'}
                >
                Phone number
                </Typography>
                <Field
                  name="phone"
                  as={TextField}
                  placeholder="Enter your phone number"
                  variant="outlined"
                  type="text"
                  sx={{
                    width: { xs: 275, sm: 470, md: 500 },
                    backgroundColor: ' white',
                    borderRadius: '20px',
                    marginTop: '8px',
                    '& .css-7ohhq8-MuiInputBase-root-MuiOutlinedInput-root': {
                      borderRadius: '20px'
                    },
                    '.css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': {
                      padding: '14px 14px'
                    }
                  }}
                />
                <ErrorMessage name="phone" component="div" style={{ color: 'red' }} />
              </Box>
              <Box marginTop={'24px'} textAlign={'left'}>
                <Typography
                  variant="h4"
                  fontSize={'16px'}
                  fontWeight={'600'}
                  color={'#3C4563'}
                >
                Let us know your feeling
                </Typography>
                <Field
                  name='message'
                  as={TextField}
                  placeholder="Your message"
                  variant="outlined"
                  type="text"
                  sx={{
                    width: { xs: 275, sm: 470, md: 500 },
                    backgroundColor: ' white',
                    borderRadius: '20px',
                    marginTop: '8px',
                    '& .css-7ohhq8-MuiInputBase-root-MuiOutlinedInput-root': {
                      borderRadius: '20px'
                    },
                    '.css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': {
                      padding: '14px 14px'
                    }
                  }}
                />
                <ErrorMessage name="message" component="div" style={{ color: 'red' }} />
              </Box>

              <Button
                type="submit"
                variant="contained"
                color="info"
                sx={{
                  margin: '30px auto',
                  width: {
                    xs: '200px',
                    md: '250px'
                  },
                  lineHeight: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'linear-gradient(to right, #66CDAA, #87CEFA)',
                  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    background: 'linear-gradient(to right, #00A7B4, #A4D96C)',
                    boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.15)',
                    '&:active': {
                      background: 'linear-gradient(to right, #66CDAA, #87CEFA)'
                    }
                  }
                }}
              >
                Submit
              </Button>
            </Form>
          </Formik>
        </Box>
      </Box>
      <Footer/>
    </Box>
  )
}

export default Contact
