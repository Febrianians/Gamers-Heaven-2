import Header from "../header"

export default function HomePageComponent() {

  return(
    <>
      <div className='homePage'>
      <Header title='Home Page' />
        <div className="wrapper">
          <div className='bodySection'>
            <h1>Welcome to the Home Page</h1>
          </div>
        </div>
      </div>    
    </>
  )
}