const express = require("express");
const router = express.Router();
const Fuse = require("fuse.js");
const Item = require("../models/Item");

router.get("/", async (req, res) => {
  try {
    const query = req.query.q;
    if (!query) return res.json([]);

    const items = await Item.find();

    const fuse = new Fuse(items, {
      keys: ["name", "description", "category"],
      threshold: 0.6,
      minMatchCharLength: 2,
    });

    const results = fuse.search(query);

    const suggestions = results
      .slice(0, 10)
      .map(result => result.item);

    res.json(suggestions);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

