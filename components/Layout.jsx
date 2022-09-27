import Head from 'next/head'
import { Box} from '@chakra-ui/react'

const Layout = ({children}) => (
  <>
    <Head>
      <title>Real Estate</title>
    </Head>
    <Box maxwidth='1280px' m='auto' marginLeft='32' marginRight='32'>
      <header>Navbar</header>
      <main>{children}</main>
      <footer>Footer</footer>
    </Box>
  </>
)

export default Layout