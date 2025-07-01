import express from "express";
import Page from "../models/Page.js";

const router = express.Router();

// GET all Pages
router.get("/", async (req, res) => {
  try {
    const pages = await Page.find();
    res.json(pages);
  } catch (error) {
    console.error("Error fetching pages:", error);
    res.status(500).json({ error: "Failed to fetch pages 😬" });
  }
});

// GET Pages by slug
router.get("/:slug", async (req, res) => {
  try {
    console.log("Looking for slug:", req.params.slug); 

    const page = await Page.findOne({ slug: req.params.slug });
    if (!page) {
      console.log("❌ No page found");
      return res.status(404).json({ error: "Page not found" });
    }

    console.log("✅ Page found:", page.title);
    res.json(page);
  } catch (error) {
    console.error("❌ Mongoose error:", error); 
    res.status(500).json({ error: "Failed to fetch page 😬" });
  }
});

// UPDATE a Page by slug
router.put("/:slug", async (req, res) => {
  try {
    const updatedPage= await Page.findOneAndUpdate(
      { slug: req.params.slug },
      { $set: req.body },
      { new: true }
    );
    console.log("🔧 Incoming update for:", req.params.slug);
    console.log("📦 Update body:", req.body);

    if (!updatedPage) {
      return res.status(404).json({ error: "Page not found" });
    }

    res.json(updatedPage);
  } catch (error) {
    console.error("Error updating page:", error);
    res.status(500).json({ error: "Failed to update page 😬" });
  }
});

// PATCH a page by slug
router.patch("/:slug", async (req, res) => {
  try {
    const { slug } = req.params;
    const updates = req.body;

    const updatedPage = await Page.findOneAndUpdate(
      { slug },
      { $set: updates },
      { new: true }
    );

    if (!updatedPage) {
      return res.status(404).json({ error: "Page not found" });
    }

    res.json(updatedPage);
  } catch (error) {
    console.error("Error updating page:", error);
    res.status(500).json({ error: "Failed to update page 😬" });
  }
});




// DELETE a page by slug
router.delete("/:slug", async (req, res) => {
  try {
    const deletedPage = await Page.findOneAndDelete({ slug: req.params.slug });

    if (!deletedPage) {
      return res.status(404).json({ error: "Page not found" });
    }

    res.json({ message: `✅ Page '${req.params.slug}' deleted successfully.` });
  } catch (error) {
    console.error("Error deleting page:", error);
    res.status(500).json({ error: "Failed to delete page 😬" });
  }
});
export default router;
