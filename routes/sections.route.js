const {Router} = require('express');
const router = Router();
const Section = require('../models/Section');

router.post('/generate', async (req, res) => {
    try {
    
    } catch(e) {
        res.status(500).json('error');
    }
})

router.get('/', async (req, res) => {
    try {
        const sections = await Section.find({owner: null});
        res.json(sections);
    } catch(e) {
        res.status(500).json('error');
    }
})

router.get('/:id', async (req, res) => {
    try {
        const section = await Section.findById(req.params.id);
        res.json(section);
    } catch(e) {
        res.status(500).json('error');
    }
})

module.exports = router;