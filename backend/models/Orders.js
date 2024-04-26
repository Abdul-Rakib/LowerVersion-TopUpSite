import mongoose from "mongoose"

const orderSchema = mongoose.Schema({
  itemname :{
    type : String,
    required: true,
  },
  status :{
    type : String,
    required: true,
  },
  userid : {
    type : String,
    required : true,
  },
  input1 :{
    type : String,
    default : "",
  },
  input2 :{
    type : String,
    default : "",
  },
  value :{
    type : String,
    required: true,
  },
  paymentmode :{
    type : String,
    required: true,
  },
})

const Order = mongoose.model("Order",orderSchema);
export default Order;