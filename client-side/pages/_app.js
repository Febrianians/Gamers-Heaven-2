import 'bootstrap/dist/css/bootstrap.css'
import '../components/profile-page/profilePageStyle.scss'
import '../components/landing-page/landingPageStyle.scss'
import '../components/headerStyle.scss'
import '../components/home-page/homePageStyle.scss'
import '../components/profile-page-update/profilePageUpdateStyle.scss'
import '../components/played-dummy/playedDummyStyle.scss'
import '../components/error-page/errorPageStyle.scss'
import '../components/login-page/loginPageStyle.scss'
import '../components/register-page/registerPageStyle.scss'
import '../components/game-list/gameListPageStyle.scss'
import '../components/leaderboard-page/leaderboardPageStyle.scss'
import '../components/pdf-integration/pdf-integration-component-style.scss'
import { nextStore, store } from '../redux/index'
import { Provider } from 'react-redux'
import {useEffect} from "react"


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return(
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  ) 
}

export default nextStore.withRedux(MyApp)
