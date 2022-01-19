const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/ecommerce-api", {
  useNewUrlParser: true,
  // useCreateIndex: true,
});
// const Product = mongoose.model("Product", {
//   name: {
//     type: String,
//     required: true,
//     trim: true,
//     unique: true,
//   },
//   category: {
//     type: String,
//     required: true,
//   },
//   isActive: {
//     type: Boolean,
//   },
//   details: {
//     description: { type: String, required: true, minlength: 10 },
//     price: {
//       type: Number,
//       required: true,
//       validate(value) {
//         if (value < 0) {
//           throw new Error(`price can't be negative`);
//         }
//       },
//     },
//     discount: { type: Number, default: 0 },
//     images: {
//       type: Array,
//       required: true,
//       validate(value) {
//         if (value.length < 2) {
//           throw new Error(`you must insert at least two images`);
//         }
//       },
//     },
//     phone: {
//       type: String,
//       required: true,
//       validate(value) {
//         if (!validator.isMobilePhone(value, "he-IL")) {
//           throw new Error(`you must insert a valid Israeli phone number`);
//         }
//       },
//     },
//     dateAdded: { type: Date, default: new Date() },
//   },
// });

// const product = new Product({
//   name: "nautica shirt",
//   category: "clothing",
//   isActive: true,
//   details: {
//     description: "summer fashion",
//     price: 100,
//     discount: 20,
//     images: ["https://picsum.photos/200/300", "https://picsum.photos/200/300"],
//     phone: "+972506211477",
//   },
// });
// product
//   .save()
//   .then(() => {
//     console.log(product);
//   })
//   .catch((error) => {
//     console.log("Error!", error);
//   });
