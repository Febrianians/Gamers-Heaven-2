import { useState } from "react";
import Header from "../components/header"
import { auth, db } from "../services/firebase";
import { ref, set } from "firebase/database";
import { useRouter  } from 'next/router'

import { createUserWithEmailAndPassword } from "firebase/auth";

export default function RegisterPage() {
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
      <Header title="Register" />
      <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
        <form onSubmit={handleSubmit}>
          <div className="form-group text-left">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted">
              We&apos;ll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group text-left">
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
          <div className="form-group text-left">
            <label htmlFor="exampleInputTotalScore">Total Score</label>
            <input
              type="number"
              onChange={(e) => setTotalScore(e.target.value)}
              className="form-control"
              id="totalscore"
              placeholder="0"
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
            <label htmlFor="exampleInputCity">Social Media Url</label>
            <input
              type="text"
              onChange={(e) => setSocialMediaUrl(e.target.value)}
              className="form-control"
              id="socialmediaurl"
              placeholder="@instagram"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </form>
      </div>
    </>
  );
}