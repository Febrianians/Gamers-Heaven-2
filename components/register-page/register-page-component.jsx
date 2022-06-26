import { useState } from "react";
import Header from "../header"
import { auth, db } from "../../services/firebase";
import { ref, set } from "firebase/database";
import { useRouter } from 'next/router'
import Link from "next/link";

import { createUserWithEmailAndPassword } from "firebase/auth";

export default function RegisterPageComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [totalScore, setTotalScore] = useState("");
  const [bio, setBio] = useState("");
  const [city, setCity] = useState("");
  const [socialMediaUrl, setSocialMediaUrl] = useState("");
  const router = useRouter()
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      if (user) alert("Register Success");
      router.push('/login-page')

      set(ref(db, `users/${user.uid}`), {
        email: email,
        username: username,
        total_score: totalScore,
        bio: bio,
        city: city,
        socialMediaUrl,
      });
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
    console.log(email, password);
  };
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
                        <div className="form-group text-left col-3">
                            <label htmlFor="exampleInputTotalScore">Total Score</label>
                            <input
                            type="number"
                            onChange={(e) => setTotalScore(e.target.value)}
                            className="form-control"
                            id="totalscore"
                            placeholder="0"
                            />
                        </div>
                        <div className="form-group text-left col-9">
                            <label htmlFor="exampleInputCity">Social Media Url</label>
                            <input
                            type="text"
                            onChange={(e) => setSocialMediaUrl(e.target.value)}
                            className="form-control"
                            id="socialmediaurl"
                            placeholder="@instagram"
                            />
                        </div>
                        <div className="form-group text-left">
                            <label htmlFor="exampleInputCity">City</label>
                            <input
                            type="text"
                            onChange={(e) => setCity(e.target.value)}
                            className="form-control"
                            id="city"
                            placeholder="City, Apartment, Address"
                            />
                        </div>
                        <div className="form-group text-left">
                            <label htmlFor="exampleInputBio">Bio</label>
                            <input
                            type="text"
                            onChange={(e) => setBio(e.target.value)}
                            className="form-control"
                            id="bio"
                            placeholder="Bio"
                            />
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