const express = require("express");
const router = express.Router();
const USER = require("../model/Register");
/* 
wrote a sign up service where 
--first the body is checked if no body then a bad request
--if the user is already in the database then we dont let  him signup
--/if no a reg user then sign up is done and user Created response is sent
*/

router.post("/signup", async (req, res) => {
  try {
    const body = req.body;
    if (!body) {
      res.json({ status: "bad request" });
    }
    //if user is already a signed up user
    const entry = await USER.findOne({ email: body.email });
    console.log(Boolean(entry), entry);
    if (entry) {
      res.json({ status: "user already present" });
    } else {
      //if no a reg user then sign up is created
      const newUser = new USER(req.body);
      newUser.save().then(res.status(201).json({ status: "user created" }));
    }
  } catch (err) {
    res.status(500).json({ status: "Server failed" });
  }
});
router.post("/login", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const entry = await USER.findOne({ email: email });
    if (!entry) return res.json({ status: "user doses not exist" });
    if (password === entry.password) {
      return res
        .status(200)
        .json({ status: "login successfull", name: entry.name });
    } else {
      return res.json({ status: "wrong password" });
    }
  } catch (err) {
    return res.status(500).json(err);
  }
});
module.exports = router;
