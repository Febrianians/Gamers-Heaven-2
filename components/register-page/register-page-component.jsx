import { useState } from "react";
import { Input } from "reactstrap";
import Header from "../header"
import { auth, db } from "../../services/firebase";
import { ref, set, onValue } from "firebase/database";

import { useRouter } from 'next/router'
import Link from "next/link";

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect } from "react";

export default function RegisterPageComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [gameChoice, setGameChoice] = useState("")
  const [totalScore, setTotalScore] = useState("");
  const [bio, setBio] = useState("");
  const [city, setCity] = useState("");
  const [socialMediaUrl, setSocialMediaUrl] = useState("");
  const [gameList, setGameList] = useState([]);
  const router = useRouter()
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      if (user) alert("Register Success");
      console.log(user, "=====> ini user");
      await updateProfile(user, {displayName : username})
      
      // router.push('/login-page')
      console.log(gameChoice, "====> ini game choice");
      set(ref(db, `users/${user.displayName}`),
      //  {[]
      //   email: email,
      //   username: username,
      //   game: gameChoice
      // });
      {
        displayName : {
          id_user : {
              username : username,
               game : {
          id_game : gameChoice,
        }
          }
        }
      })
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
    console.log(email, password);
  };


  useEffect(() => {
    onValue(
      ref(db, "games"),
      (snapshot) => {
        const newGames = [];
        snapshot.forEach((childSnapshot) => {
          const childKey = childSnapshot.key;
          const childData = childSnapshot.val();
            // console.log(childKey, childData, '==> key & data game-list');
          newGames.push({
            key: childKey,
            name: childData.name,
            game_url: childData.game_url,
            description: childData.description,
            play_count: childData.play_count
          });
        });
        setGameList(newGames);
        console.log(gameList, '==> game list')
      },
      {
        onlyOnce: true,
      }
    );
  }, []);
  return (
    <>
      <section className="register-section">
        <Header title="Register" />
            <div className="container">
                    <div className="card login-card">
                        <form onSubmit={handleSubmit} className="row" >
                        <div className="form-group col-6 text-left">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control"
                            id="email"
                            aria-describedby="emailHelp"
                            placeholder="Enter email"
                            />
                            {/* <small id="emailHelp" className="text-muted text-sm-center">
                            We&apos;ll never share your email with anyone else.
                            </small> */}
                        </div>
                        <div className="form-group col-6 text-left">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control"
                            id="password"
                            placeholder="Password"
                            />
                        </div>
                        <div className="form-group text-left">
                            <label htmlFor="exampleInputUsername">Username</label>
                            <input
                            type="text"
                            onChange={(e) => setUsername(e.target.value)}
                            className="form-control"
                            id="username"
                            placeholder="Username"
                            />
                        </div>
                        <div>
                          <h3>Select Games</h3>
                          <Input type="select"  onChange={(e) => {setGameChoice(e.target.value)}} name="select" id="exampleSelect">
                          {gameList && gameList.map((game)=>{
                            return(
                              <option value={game.key} key={game.key} >{game.description.toUpperCase()}</option>
                            )
                          })}
                        </Input>
                        </div>
                        <p>Already have an account ?  <span>
                            <Link href="/login-page" >Login
                            </Link>
                        </span>
                        </p>
                        <button
                              type="submit"
                              className="btn btn-warning">
                            Register
                        </button>
                        </form>
                    </div>
            </div>
      </section>
    </>
  );
}