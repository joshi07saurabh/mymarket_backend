const { default: mongoose } = require("mongoose");

const shopSchema = mongoose.Schema({
    name: { type: String, required: true },
    location: { type: String },
    phone: { type: Number, required: true},
    openingHours: { type: String },
    closingHours: { type: String },
    primaryAdd: { type: String, required: true },
    landmark: { type: String },
    city: { type: String, required: true },
    pinCode: { type: Number, required: true },
    state: { type: String, required: true}
})

shopSchema.pre('create', (doc) => {
    const pinCodeRegex = /^[1-9][0-9]{5}$/;
    if (!pinCodeRegex.test(doc.pinCode)) {
        throw new Error("Invalid pin code. It should be a 6-digit number starting from 100001.");
    }
    const cityStateRegex = /^[A-Za-z\s]+$/;
    if (!cityStateRegex.test(doc.city) ||!cityStateRegex.test(doc.state)) {
        throw new Error("City and state should only contain alphabetic characters and spaces.");
    }
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(doc.phone)) {
        throw new Error("Invalid phone number. It should start with 6, 7, 8, or 9 and should be a 10-digit number.");
    }
    doc.address = `${doc.primaryAddress}, ${doc.city}, ${doc.state}, ${doc.pinCode}`
})

const Shop = mongoose.model("Shop", shopSchema);
module.exports = Shop;