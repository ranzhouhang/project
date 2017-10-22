const Router = require('express');
const CartContorller = require('../../controller/cart_controller');
const islogin = require('../../middleware/login-auth');

const router = Router();
const cartCtrl = new CartContorller();

router.get('/',islogin, cartCtrl.getAllCarts);
router.get('/:cartId',islogin,cartCtrl.getOneCart);
router.post('/', islogin, cartCtrl.createOneCart);
router.put('/:cartId', islogin, cartCtrl.updateOneCart);
router.delete('/:cartId', islogin, cartCtrl.deleteOneCart);

module.exports = router;