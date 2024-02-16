const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post(
    "/register",
    async (req, res) => {
        // const errors = validationResult(req);
        // if (!errors.isEmpty()) {
        //   return res.status(400).json({ errors: errors.array() });
        console.log(req)
        }
)