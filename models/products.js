import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, '商品名不能為空']
  },
  price: {
    type: Number,
    min: [0, '價格格式不正確'],
    required: [true, '商品價格不能為空']
  },
  details: {
    type: String
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  sell: {
    type: Boolean,
    default: false
  },
  category: {
    type: String,
    enum: {
      values: ['新年限定禮盒', '經典禮盒', '長輩一定愛'],
      message: '商品分類不存在'
    }
  }
}, { versionKey: false })

export default mongoose.model('products', productSchema)
