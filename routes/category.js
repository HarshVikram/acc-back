const express = require('express');
const router = express.Router();

const { categoryById, create, read, update, remove, list } = require('../controllers/category');

router.get('/category/:categoryId', read);
router.post('/category/create/1234', create);
router.put('/category/:categoryId/1234', update);

router.delete('/category/:categoryId/1234', remove);
router.get('/categories', list);

router.param('categoryId', categoryById);

module.exports = router;
