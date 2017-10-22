const Router = require('express');
const CategoryContorller = require('../../controller/cate_controller');
const islogin = require('../../middleware/login-auth');

const router = Router();
const cateCtrl = new CategoryContorller();

router.get('/', cateCtrl.getAllCategories);
router.get('/:cateId', cateCtrl.getOneCategory);
router.post('/', islogin, cateCtrl.createOneCategory);
router.put('/:cateId', islogin, cateCtrl.updateOneCategory);
router.delete('/:cateId', islogin, cateCtrl.deleteOneCategory);

module.exports = router;