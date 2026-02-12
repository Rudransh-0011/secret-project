import bcrypt from 'bcryptjs'

// CHANGE THIS HASH BEFORE DEPLOYING
const HASHED_PASSWORD = bcrypt.hashSync("ForeverLove@2026", 10)
const USERNAME = "queen"

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" })
  }

  const { username, password } = req.body

  if (username === USERNAME && bcrypt.compareSync(password, HASHED_PASSWORD)) {
    return res.status(200).json({ success: true, user: { username } })
  }

  return res.status(401).json({ success: false, message: "Invalid credentials" })
}
