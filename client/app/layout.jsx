

import Footer from '@components/Footer'
import Navbar from '@components/Navbar'
import '@styles/globals.css'

const RootLayout = ({children}) => {
  return (
    <html>
        <body>
            <div>
                <Navbar/>
                {children}
                <Footer/>
            </div>
        </body>
    </html>
  )
}

export default RootLayout