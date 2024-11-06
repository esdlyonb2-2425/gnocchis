const Gnocchi = require('../models/Gnocchi');

async function index(req, res) {

    let gnocchis = await Gnocchi.find( {})

    res.send(gnocchis)
}


async function create(req, res) {
    let  {...data}  = req.body

   await Gnocchi.create({...data})

    res.send('on a bien créé ton gnocchi')
}

module.exports = {index, create}