import mongoose from 'mongoose';

const OrderSchema = mongoose.Schema({
    orderBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
  adress: {
    type: String,
    required: true,
  },
  items: [
    {
    type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    }, 
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },

}});

const Order = mongoose.model('order', OrderSchema);

export default Order;

