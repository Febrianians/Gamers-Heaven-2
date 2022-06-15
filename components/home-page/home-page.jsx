import Header from "../header"

export default function HomePageComponent() {

    return(
        <>
            <div className='homePage'>
                <Header title='Home Page' />
                <div className="wrapper">
                    <div className='bodySection'>
                        <h1>Welcome to the Home Page</h1>
                        <div className="card">
                            <div className="cardTitle">
                                <div className="profilePicture">
                                    <div className="image"></div>
                                </div>
                            </div>
                            <div className="cardContent">
                                <div className="username">
                                    <div>
                                        <h3>User #1</h3>
                                    </div>
                                </div>
                                <div className="email">
                                    <h3>Email</h3>
                                    <h6>Test@mail.com</h6>
                                </div>
                                <div className="gamePlayed">
                                    <div className="game">
                                        <h3>Game Played</h3>
                                    </div>
                                    <div className="playedGame">
                                        <h6>- Rock Paper Scissors : High Score (30pts)</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}