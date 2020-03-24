const conn = require('../database/connection');

module.exports = {
    async store(req, res){
        const {id} = req.body;

        const ong = await conn('ongs').where('id', id).select('name').first();
        if(!ong){
            return res.status(400).json({ error: "Não existe uma ONG com este ID" });
        }

        return res.json(ong);
    }
}