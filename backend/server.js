const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const searchRoutes = require("./routes/search");
const Item = require("./models/Item");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(
"mongodb+srv://chaudharychakshu7:chakshuC2216@cluster0.ybew5hx.mongodb.net/?appName=Cluster0"
)
.then(() => console.log("MongoDB Atlas Connected"))
.catch(err => console.log(err));


app.use("/api/search", searchRoutes);

app.get("/api/items/:id", async (req, res) => {
  const item = await Item.findById(req.params.id);
  res.json(item);
});

app.listen(5000, () => console.log("Server running on port 5000"));
