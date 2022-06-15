import 'bootstrap/dist/css/bootstrap.css'
import '../components/profile-page/profilePageStyle.scss'
import '../components/landing-page/landingPageStyle.scss'
import '../components/headerStyle.scss'
import '../components/home-page/homePageStyle.scss'
import '../components/profile-page-update/profilePageUpdateStyle.scss'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
