const express = require("express");
const router = express.Router();

const {
    create,
    productById,
    read,
    remove,
    update,
    list,
    listRelated,
    listCategories,
    listBySearch,
    photo,
    listSearch
} = require("../controllers/product");

router.get("/product/:productId", read);

router.post("/product/create/Canvas@123", create);
router.delete("/product/:productId/Canvas@123", remove);
router.put("/product/:productId/Canvas@123", update);

router.get("/products", list);
router.get("/products/search", listSearch);
router.get("/products/related/:productId", listRelated);
router.get("/products/categories", listCategories);
router.post("/products/by/search", listBySearch);
router.get("/product/photo/:productId", photo);

router.param("productId", productById);

module.exports = router;