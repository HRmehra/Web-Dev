const express = require('express')
const { addListener } = require('../models/pep')
const router = express.Router()
const Pep = require('../models/pep')

router.get('/', async (req, res) => {
    try {
        const peps = await Pep.find()
        res.json(peps)

    }
    catch (err) {
        res.send('error' + err)
    }

})

router.get('/:id', async (req, res) => {
    try {
        const pep = await Pep.findById(req.params.id)
        res.json(pep)

    }
    catch (err) {
        res.send('error' + err)
    }

})


router.post('/', async (req, res) => {
    const pep = new Pep
        ({
            name: req.body.name,
            address: req.body.address,
            human: req.body.human
        })

    try {
        const a1 = await pep.save()
        res.json(a1)

    }
    catch (err) {
        res.send('Error')
    }
})

router.patch('/:id',async(req,res)=>{
    try{
        const pep = await Pep.findById(req.params.id)
        pep.human=req.body.human
        const a1 = await pep.save()
        res.json(a1)
    }catch(err){
        res.send('error')
    }
})


router.delete('/:id',async(req,res)=>{
    try{
        const pep = await Pep.findById(req.params.id)
        pep.human=req.body.human
        const a1 = await pep.remove()
        res.json(a1)
    }catch(err){
        res.send('error')
    }
})

module.exports = router