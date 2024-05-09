const getUserSignUp = (req,res)=>{
res.send('GET request to /api/auth/signup')
}

const userSignUp = (req,res)=>{
res.send(`POST request to /api/auth/signup`)
}
export {userSignUp, getUserSignUp}