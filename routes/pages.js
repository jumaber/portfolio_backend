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

    const page = await Page.findOne({ slug });

    if (!page) {
      return res.status(404).json({ error: "Page not found" });
    }

    Object.assign(page, req.body); // Merge incoming updates into the page
    const savedPage = await page.save(); // Save to MongoDB

    res.json(savedPage);
  } catch (error) {
    console.error("❌ Error updating page:", error);
    res.status(500).json({ error: "Failed to update page 😬" });
  }
});



// POST a new page
router.post("/", async (req, res) => {
  try {
    // 1. Check for existing slug
    const existing = await Page.findOne({ slug: req.body.slug });
    if (existing) {
      return res.status(409).json({ error: "Slug already exists" });
    }

    // 2. Create and save the new page
    const newPage = new Page(req.body);
    await newPage.save();

    // 3. Respond with success
    res.status(201).json(newPage);
  } catch (error) {
    console.error("Error creating page:", error);
    res.status(500).json({ error: "Failed to create page 😬" });
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
