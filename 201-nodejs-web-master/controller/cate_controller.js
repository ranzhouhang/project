const HTTPCode = require('../config/constants');
const cateModel = require('../models/category');

module.exports = class CateController {
    getAllCategories(req, res, next) {
        cateModel.find({}).exec((e, data) => {
            if (e) {
                return next(e);
            }
            if (!data) {
                return res.sendStatus(HTTPCode.NOT_FOUND)
            }
            return res.status(HTTPCode.OK).send({item: data});
        })
    }

    getOneCategory(req, res, next) {
        const id = req.params.cateId;
        cateModel.findById(id).exec((e, data) => {
            if (e) {
                return next(e)
            }
            if (!data) {
                return res.sendStatus(HTTPCode.NOT_FOUND);
            }
            return res.status(HTTPCode.OK).send({item: data})
        })
    }

    createOneCategory(req, res, next) {
        cateModel.create(req.body, (err, data) => {
            if (err) {
                return next(err);
            }
            return res.status(HTTPCode.CREATED).send(data);
        })
    }

    updateOneCategory(req,res,next){
        const id = req.params.cateId;
        const newValue = req.body;
        cateModel.findByIdAndUpdate(id,newValue,(e,data) => {
            if(e){
                return next(e);
            }
            if (!data) {
                return res.sendStatus(HTTPCode.NOT_FOUND);
            }
            return res.sendStatus(HTTPCode.NO_CONTENT);
        })
    }

    deleteOneCategory(req,res,next){
        const id = req.params.cateId;
        cateModel.findByIdAndRemove(id,(e,data) => {
            if(e){
                return next(e);
            }
            if(!data) {
                return res.sendStatus(HTTPCode.NOT_FOUND);
            }
            return res.status(HTTPCode.NO_CONTENT).send(data);
        })
    }
}
