import 'bootstrap/dist/css/bootstrap.css'
import '../components/profile-page/profilePageStyle.scss'
import '../components/landing-page/landingPageStyle.scss'
import '../components/headerStyle.scss'
import '../components/home-page/homePageStyle.scss'
import '../components/profile-page-update/profilePageUpdateStyle.scss'
import '../components/played-dummy/playedDummyStyle.scss'
import { nextStore, store } from '../redux/index'
import { Provider } from 'react-redux'


function MyApp({ Component, pageProps }) {
  return(
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  ) 
}

export default nextStore.withRedux(MyApp)
