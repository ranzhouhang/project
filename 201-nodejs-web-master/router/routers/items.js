var Router = require('express');
var ItemController = require('../../controller/item_controller');
const islogin = require('../../middleware/login-auth');

const router = Router();
const itemCtrl = new ItemController();

router.get('/', itemCtrl.getAll);
router.get('/:itemId', itemCtrl.getOneItem);
router.post('/', islogin, itemCtrl.createItem);
router.delete('/:itemId', islogin, itemCtrl.deleteItem);
router.put('/:itemId', islogin, itemCtrl.updateItem);

module.exports = router;