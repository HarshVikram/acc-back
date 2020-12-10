const express = require('express');
const router = express.Router();

const { categoryById, create, read, update, remove, list } = require('../controllers/category');

router.get('/category/:categoryId', read);
router.post('/category/create/Canvas@123', create);
router.put('/category/:categoryId/Canvas@123', update);

router.delete('/category/:categoryId/Canvas@123', remove);
router.get('/categories', list);

router.param('categoryId', categoryById);

module.exports = router;
