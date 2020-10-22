const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32
        },
        description: {
            type: String,
            required: true,
            maxlength: 2000
        },
        category: {
            type: ObjectId,
            ref: 'Category',
            required: true
        },
        photo: {
            data: Buffer,
            contentType: String
        },
        colour: {
            type: String,
            required: true,
        },
        item: {
            type: String,
            required: true
        },
        measurement: {
            type: String,
            required: true
        },
        quantity: {
            type: Number
        },
        sold: {
            type: Number,
            default: 0
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('Product', productSchema);