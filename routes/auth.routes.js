const { Router } = require("express");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const config = require('config')
const {check, validationResult} = require('express-validator')
const router = Router();

router.post(
    '/register',
    [
        check('email', 'Invalid email').isEmail(),
        check('password', 'Invalid password. Minimal length is 6 symbols').isLength({min: 6}),
        check('login', 'Invalid login').isString()
    ],
    async(req, res) => {
        try {

            console.log('Body', req.body)
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Invalid data'
                })
            } 

            const {email, password, login} = req.body;

            const doesEmailExist = await User.findOne({email});
            const doesLoginExist = await User.findOne({login});

            if (doesEmailExist) {
                return res.status(400).json({message: 'This email already exists'});
            } 
            
            if (doesLoginExist) {
                return res.status(400).json({message: 'This login already exists'});
            }

            const hashedPassword = await bcrypt.hash(password, 12);
            const user = new User({login, email, password: hashedPassword});

            await user.save();

            res.status(201).json({message: 'User has created'});

        } catch(e) {
            res.status(500).json(e);
        }
    }
)

router.post(
    '/login', 
    [
        check('email', 'Input correct email').normalizeEmail().isEmail(),
        check('password', 'Input correct password').exists()
    ],
    async(req, res) => {
        try {
            const errors = validationResult(req);

            if (!errors.isEmpty) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Invalid data on sign in'
                })
            } 

            const {email, password} = req.body;

            const user = await User.findOne({email});

            if (!user) {
                return res.status(400).json({message: 'User not found'});
            }

            const isMatch = await bcrypt.compare(password, user.password);

            if (!isMatch) {
                return res.status(400).json({message: 'Invalid password'});
            }

            const token = jwt.sign(
                {userId: user.id},
                config.get('jwtSecret'),
                {expiresIn: '1h'}
            )

            res.json({token, userId: user.id})

        } catch(e) {
            res.status(500).json('error');
        }
    }
)

module.exports = router;