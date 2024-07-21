const mongoose = require("mongoose");
const app = require("./server/server");

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
}).then(()=>{
    console.log("Connected to MongoDB");
})
const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})