import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()

const SECRET_KEY = process.env.JWT_SECRET_KEY


const sign = (payload) => {
    return jwt.sign(payload, SECRET_KEY, { expiresIn: "1d" })
}

const verify = (token) => {
    return jwt.verify(token, SECRET_KEY)
}

export { sign, verify }
