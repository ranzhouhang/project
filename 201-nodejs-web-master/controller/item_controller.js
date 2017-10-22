const HTTPCode = require('../config/constants')
const itemModel = require('../models/item');


module.exports= class ItemController {
    getAll(req, res, next) {
        itemModel.find({}).exec((e, data) => {
            if (e) {
                return next(e);
            }
            if(!data) {
                return res.sendStatus(HTTPCode.NOT_FOUND);
            }
            return res.status(HTTPCode.OK).send({item: data});
        });
    }

    getOneItem(req,res,next){
        const id = req.params.itemId;
        itemModel.findById(id).exec((e,data) => {
            if(e) {
                return next(e);
            }
            if(!data){
                return res.sendStatus(HTTPCode.NOT_FOUND);
            }
            return res.status(HTTPCode.OK).send({item:data})
        })
    }

    createItem(req,res,next){
        let item = req.body;
        itemModel.create(item,(e,data) => {
            if(e){
                return next(e);
            }
            return res.status(HTTPCode.CREATED).send(data);
        })
    }

    deleteItem(req,res,next){
        const id = req.params.itemId;
        itemModel.findByIdAndRemove(id,(e,data) => {
            if(e){
                return next(e);
            }
            if(!data) {
                return res.sendStatus(HTTPCode.NOT_FOUND);
            }
            return res.status(HTTPCode.NO_CONTENT).send(data);
        })
    }

    updateItem(req,res,next){
        const id = req.params.itemId;
        const newValue = req.body;
        itemModel.findByIdAndUpdate(id, newValue, (e, data) => {
            if (e) {
                return next(e);
            }
            if (!data) {
                return res.sendStatus(HTTPCode.NOT_FOUND);
            }
            return res.sendStatus(HTTPCode.NO_CONTENT);
        });
    }

}


