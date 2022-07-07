
const {signInWithEmailAndPassword} = require('firebase/auth')
const {auth} = require('../services/firebase')
class Testing{
    static async getUser(req, res) {
        const {email, password} = req.body
            try {
                const response = await signInWithEmailAndPassword(auth, email, password)
                console.log(response);
                res.status(200)
            } catch (error) {
                res.status(400)
                console.log(error.message);
            }
    }
}

module.exports = Testing