import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { getDatabase, ref, child, push, update } from "firebase/database";
import { useState } from 'react';
import { auth, db } from "../../services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";







export default function UpdateFormComponent() {
  
const [user, loading] = useAuthState(auth);

const [email, setEmail] = useState('')
const [bio, setBio] = useState('')
const [username, setUsername] = useState('')
const [city, setCity] = useState('')
const [socialmedia, setSocialMedia] = useState('')


  
  const updatePlayerProfile = (e) => {
    e.preventDefault()
    const db = getDatabase();
  


  // A post entry (user Entry).
    const userData = {
    // uid: user,
    email: email,
    username: username,
    bio: bio,
    city: city,
    socialmediaUrl: socialmedia,
  };
  
  // console.log(userData);
  
  // Get a key for a new Post.
  // const newUserKey = push(child(ref(db), 'users')).key;
  
  // // Write the new post's data simultaneously in the posts list and the user's post list.
  const updates = {};
  updates['/users/' ] = userData;
  
  // console.log(updates);
    
  return update(ref(db), updates);
  // console.log(update);
}

    return (
        <>
        <Form>
        <FormGroup row>
            <h2 className="infoHeader">Change your profile information here
            </h2>
          <Label for="exampleEmail" sm={2}>Email</Label>
          <Col sm={10}>
            <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" onChange={(e)=> setEmail(e.target.value)} />
          </Col>
          </FormGroup>
          <FormGroup row>
            <h2 className="info">Change your username 
            </h2>
          <Label for="username" sm={2}>Username</Label>
          <Col sm={10}>
            <Input type="text" name="username" id="username" placeholder="New username..." onChange={(e)=> setUsername(e.target.value)}/>
          </Col>
        </FormGroup>
        <FormGroup row>
            <h2 className="info">Change your bio 
            </h2>
          <Label for="bio" sm={2}>Bio</Label>
          <Col sm={10}>
            <Input type="text" name="bio" id="bio" placeholder="New bio..." onChange={(e)=> setBio(e.target.value)}/>
          </Col>
        </FormGroup>
        <FormGroup row>
            <h2 className="info">Change your city 
            </h2>
          <Label for="bio" sm={2}>City</Label>
          <Col sm={10}>
            <Input type="text" name="city" id="city" placeholder="New city..." onChange={(e)=> setCity(e.target.value)} />
          </Col>
        </FormGroup>
        <FormGroup row>
            <h2 className="info">Change your social media Url 
            </h2>
          <Label for="bio" sm={2}>Social Media Url</Label>
          <Col sm={10}>
            <Input type="text" name="socialmediaUrl" id="socialmediaUrl" placeholder="New socialmediaUrl..." onChange={(e)=> setSocialMedia(e.target.value)}/>
          </Col>
        </FormGroup>
        <FormGroup>
            <Col sm={{ size: 3, offset: 5 }} onClick={(e) => {
              e.preventDefault()
              
              updatePlayerProfile()
          }}>
            <Button color='primary'>Submit</Button>
          </Col>
        </FormGroup>
      </Form>
        </>
    )
}