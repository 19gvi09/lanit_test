export default function handler(req, res) {
  if (req.method === "POST") {
    if (req.body.login != "Admin") {
      res.status(404).json({ error: "Login not found" })
      return
    }
    if (req.body.password != "12345") {
      res.status(400).json({ error: "Incorrect password" })
      return
    }
    res.status(200).json({ token: "token" })
  }
}
