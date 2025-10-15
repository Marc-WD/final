const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

// ✅ Get Top 3 liked posts
router.get("/top-liked-posts", async (req, res) => {
  try {
    const topPosts = await Post.find().sort({ likes: -1 }).limit(3);
    res.json({ data: topPosts });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
