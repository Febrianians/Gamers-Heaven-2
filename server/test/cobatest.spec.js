const request = require('supertest')
const app = require("../controllers/indexController")
// const { auth } = require("../services/firebase")

describe("/getuser", () => {
    test("response with user auth", (done)=>{
        request(app)
        .post("/getuser")
        .send({
            email:"test32@mail.com",
            password:"qwerty"
        })
        .then(res => expect(res.statusCode).toBe(200))
        done()
    })
})

describe("/getuser", () => {
    test("User login without email properly entered", (done)=>{
        request(app)
        .post("/getuser")
        .send({
            email:"notEmail",
            password:"qwerty"
        })
        .then(res => expect(res.statusCode).toBe(400))
        done()
    })
})

describe("/getuser", () => {
    test("User login with email that is not in database", (done)=>{
        request(app)
        .post("/getuser")
        .send({
            email:"notEmail@mail.com",
            password:"qwerty"
        })
        .then(res => expect(res.statusCode).toBe(400))
        done()
    })
})