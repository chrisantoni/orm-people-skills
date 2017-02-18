var express = require('express');
var router = express.Router();

const skillController = require('../controller/skillController');
const userController = require('../controller/userController')
/* Blog */
router.get('/skill', skillController.get_all_skill);
router.post('/one_skill', skillController.get_skill);
router.post('/skill', skillController.create_skill);
router.delete('/skill', skillController.delete_skill);
router.put('/skill', skillController.update_skill);


router.get('/user', userController.get_all_user_and_skill);
router.post('/user/create_user', userController.create_user);
router.post('/user/add_skill', userController.add_skill_to_person);
router.delete('/user',userController.delete_user);


module.exports = router;
