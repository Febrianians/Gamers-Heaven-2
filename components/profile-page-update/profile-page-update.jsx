import Header from "../header";
import UpdateFormComponent from "./updateForm";
export default function ProfilePageUpdateComponent(){
    return (
        <>
            <div className="updateProfile">
            <Header title="Update Profile"/>
            <div className="form">
                <div className='formSection'>
                    <UpdateFormComponent/>
                </div>
                <div className="profilePageUpdate">
                <div className="card">
                    <div className="cardTitle">
                        <div className="profilePicture">
                            <div className="image"></div>
                        </div>  
                    </div>
                    <div className="cardContent">
                        <div className="username">
                             <div><h3>User #1</h3></div>
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