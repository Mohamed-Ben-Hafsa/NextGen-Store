import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
    name_category: {
        type: String,
        required: true,
    },
    icon: {
        type: String,
    },
    
})


categorySchema.virtual('id').get(function () {
    return this._id.toHexString();
});

categorySchema.set('toJSON', {
    virtuals: true,
});

const Category = mongoose.model('Category', categorySchema);

export default Category;

