import express from 'express'

import { registerUser, loginUser } from './db.ts';

const router = express.Router();

router.post('/registerUser', async(req, res) => {
  const { success } = await registerUser(req.body);
  if(success){
      return res.json({success})
  }
  return res.status(500).json({success:false})
})

router.post('/loginUser', async(req, res) => {
  const { success, data } = await loginUser(req.body);
  if(success){
      delete data.Password;
      req.session.user = data;
      return res.json({success})
  }
  return res.status(401).json({success:false})
})

router.post("/logout", (req, res) => {
  if (req.session) {
    req.session.destroy((err)=>{
      if(err) return res.status(500).json({success:false})
      else return res.json({success: true})
    });
  }
});

router.get("/verifyLoggedIn", (req, res) => {
    if (req.session.user) {
      res.send({ loggedIn: true, user: req.session.user });
    } else {
      res.send({ loggedIn: false });
    }
});

export default router
