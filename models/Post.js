const mongoose = require("mongoose")

const PostSchema = new mongoose.Schema({
<<<<<<< HEAD
  userId:{
=======
  userid:{
>>>>>>> b664e9b6a38efb0def036f03b2711beadc734221
    type: String,
    required: true
  },
  desc: {
    type: String,
    max:500
  },
  img: {
    type: String
  },
  likes: {
    type: Array,
    default:[]
  },
},
{timestamps:true}
)

module.exports = mongoose.model("Post", PostSchema)
