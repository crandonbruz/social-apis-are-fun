const router = require('express').Router();
const {
  getUser,
  getSingleUser,
  createUser,
  deleteUser,
  addReaction,
  removeReaction,
} = require('../../controllers/userController');

// /api/user
router.route('/').get(getUser).post(createUser);

// /api/user/userId
router.route('/userId').get(getSingleUser).delete(deleteUser);

// /api/user/userId/reactions
router.route('/userId/reactions').post(addReaction);

// /api/user/userId/reactions/reactionId
router.route('/userId/reactions/reactionId').delete(removeReaction);

module.exports = router;
