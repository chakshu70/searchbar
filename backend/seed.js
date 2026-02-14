const mongoose = require("mongoose");
const Item = require("./models/Item");

mongoose.connect(
"mongodb+srv://chaudharychakshu7:chakshuC2216@cluster0.ybew5hx.mongodb.net/?appName=Cluster0"
)
.then(() => console.log("MongoDB Atlas Connected"))
.catch(err => console.log(err));

const items = [
  { name: "Apple iPhone 15 Pro", description: "Latest Apple smartphone", category: "Electronics" },
  { name: "Samsung Galaxy S24", description: "Android flagship phone", category: "Electronics" },
  { name: "Sony WH-1000XM5", description: "Noise cancelling headphones", category: "Audio" },
  { name: "MacBook Pro M3", description: "Apple laptop", category: "Computers" },
  { name: "Dell XPS 15", description: "Premium Windows laptop", category: "Computers" },
  { name: "iPad Air", description: "Apple tablet", category: "Tablets" },
  { name: "Google Pixel 8", description: "Google smartphone", category: "Electronics" },
  { name: "Apple iPhone 14", description: "Previous generation Apple smartphone", category: "Electronics" },
{ name: "Samsung Galaxy Z Fold 5", description: "Foldable Android smartphone", category: "Electronics" },
{ name: "OnePlus 11", description: "High performance Android phone", category: "Electronics" },
{ name: "Xiaomi 13 Pro", description: "Flagship Xiaomi smartphone", category: "Electronics" },
{ name: "Realme GT 5", description: "Affordable performance smartphone", category: "Electronics" },
{ name: "Motorola Edge 40", description: "Stylish Android smartphone", category: "Electronics" },
{ name: "Nothing Phone 2", description: "Transparent design smartphone", category: "Electronics" },
{ name: "Asus ROG Phone 7", description: "Gaming smartphone", category: "Electronics" },
{ name: "Vivo X100", description: "Camera focused smartphone", category: "Electronics" },
{ name: "Oppo Find X6", description: "Premium Android smartphone", category: "Electronics" },

{ name: "HP Pavilion 15", description: "Everyday use laptop", category: "Computers" },
{ name: "Acer Aspire 7", description: "Affordable performance laptop", category: "Computers" },
{ name: "Asus ZenBook 14", description: "Lightweight ultrabook laptop", category: "Computers" },
{ name: "Microsoft Surface Laptop 5", description: "Premium Windows laptop", category: "Computers" },
{ name: "Lenovo IdeaPad Slim 5", description: "Budget friendly laptop", category: "Computers" },
{ name: "Apple MacBook Air M2", description: "Lightweight Apple laptop", category: "Computers" },
{ name: "Dell Inspiron 14", description: "Student laptop", category: "Computers" },
{ name: "HP Omen 16", description: "Gaming laptop", category: "Computers" },
{ name: "Asus TUF Gaming F15", description: "Durable gaming laptop", category: "Computers" },
{ name: "Razer Blade 15", description: "Premium gaming laptop", category: "Computers" },

{ name: "Sony WF-1000XM5", description: "Wireless noise cancelling earbuds", category: "Audio" },
{ name: "JBL Flip 6", description: "Portable Bluetooth speaker", category: "Audio" },
{ name: "Boat Rockerz 550", description: "Affordable wireless headphones", category: "Audio" },
{ name: "Sennheiser Momentum 4", description: "Premium over ear headphones", category: "Audio" },
{ name: "Apple HomePod Mini", description: "Smart speaker by Apple", category: "Audio" },

{ name: "Canon EOS R6", description: "Professional mirrorless camera", category: "Cameras" },
{ name: "Sony Alpha A7 IV", description: "Full frame mirrorless camera", category: "Cameras" },
{ name: "Fujifilm X-T5", description: "Compact mirrorless camera", category: "Cameras" },
{ name: "Panasonic Lumix GH6", description: "Video focused camera", category: "Cameras" },
{ name: "DJI Osmo Action 4", description: "Action camera for vloggers", category: "Cameras" },

{ name: "PlayStation 5 Slim", description: "Compact gaming console", category: "Gaming" },
{ name: "Xbox Series S", description: "Digital gaming console", category: "Gaming" },
{ name: "Nintendo Switch Lite", description: "Portable gaming device", category: "Gaming" },
{ name: "Asus ROG Ally", description: "Handheld gaming console", category: "Gaming" },
{ name: "Steam Deck", description: "Portable PC gaming console", category: "Gaming" },

{ name: "Apple Watch Ultra", description: "Advanced fitness smartwatch", category: "Wearables" },
{ name: "Fitbit Charge 6", description: "Fitness tracker band", category: "Wearables" },
{ name: "Garmin Forerunner 965", description: "GPS running smartwatch", category: "Wearables" },
{ name: "Amazfit GTR 4", description: "Budget smartwatch", category: "Wearables" },
{ name: "Samsung Galaxy Buds 2 Pro", description: "Wireless earbuds", category: "Wearables" },

{ name: "Logitech G502 Mouse", description: "Gaming mouse with RGB", category: "Accessories" },
{ name: "Corsair K95 Keyboard", description: "Mechanical gaming keyboard", category: "Accessories" },
{ name: "Anker Power Bank 20000mAh", description: "Portable charging device", category: "Accessories" },
{ name: "TP-Link WiFi 6 Router", description: "High speed wireless router", category: "Networking" },
{ name: "Seagate 2TB External HDD", description: "Portable hard drive storage", category: "Storage" },
{ name: "WD Black 1TB SSD", description: "High speed solid state drive", category: "Storage" },
{ name: "Samsung 970 EVO Plus", description: "NVMe internal SSD", category: "Storage" },
{ name: "Kingston 16GB RAM", description: "DDR4 desktop memory module", category: "Components" },
{ name: "NVIDIA RTX 4070", description: "High performance graphics card", category: "Components" },
{ name: "AMD Ryzen 7 7800X", description: "High performance processor", category: "Components" }

];

async function seed() {
  await Item.deleteMany();
  await Item.insertMany(items);
  console.log("Database Seeded");
  process.exit();
}

seed();
