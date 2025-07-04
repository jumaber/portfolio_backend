import express from "express";
import Project from "../models/Project.js";

const router = express.Router();

// GET all projects
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    console.error("Error fetching projects:", error);
    res.status(500).json({ error: "Failed to fetch projects 😬" });
  }
});

// GET project by slug
router.get("/:slug", async (req, res) => {
  try {
    console.log("Looking for slug:", req.params.slug);

    const project = await Project.findOne({ slug: req.params.slug });
    if (!project) {
      console.log("❌ No project found");
      return res.status(404).json({ error: "Project not found" });
    }

    console.log("✅ Project found:", project.title);
    res.json(project);
  } catch (error) {
    console.error("❌ Mongoose error:", error); 
    res.status(500).json({ error: "Failed to fetch project 😬" });
  }
});

// UPDATE a project by slug
router.put("/:slug", async (req, res) => {
  try {
    const updatedProject = await Project.findOneAndUpdate(
      { slug: req.params.slug },
      { $set: req.body },
      { new: true }
    );
    console.log("🔧 Incoming update for:", req.params.slug);
    console.log("📦 Update body:", req.body);


    if (!updatedProject) {
      return res.status(404).json({ error: "Project not found" });
    }

    res.json(updatedProject);
  } catch (error) {
    console.error("Error updating project:", error);
    res.status(500).json({ error: "Failed to update project 😬" });
  }
});

// PATCH a project by slug
router.patch("/:slug", async (req, res) => {
  try {
    const { slug } = req.params;
    const updates = req.body;

    const updatedProject = await Project.findOneAndUpdate(
      { slug },
      { $set: updates },
      { new: true }
    );

    if (!updatedProject) {
      return res.status(404).json({ error: "Project not found" });
    }

    res.json(updatedProject);
  } catch (error) {
    console.error("Error updating project:", error);
    res.status(500).json({ error: "Failed to update project 😬" });
  }
});

// PATCH a project by ID
router.patch("/id/:id", async (req, res) => {
  try {
    const updatedProject = await Project.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    if (!updatedProject) {
      return res.status(404).json({ error: "Project not found" });
    }

    res.json(updatedProject);
  } catch (error) {
    console.error("Error updating project by ID:", error);
    res.status(500).json({ error: "Failed to update project 😬" });
  }
});


// POST a new project
router.post("/", async (req, res) => {
  try {
    // 1. Check if a project with the same slug already exists
    const existing = await Project.findOne({ slug: req.body.slug });
    if (existing) {
      return res.status(409).json({ error: "Slug already exists" });
    }

    // 2. Create and save the new project
    const newProject = new Project(req.body);
    await newProject.save();

    // 3. Respond with the created project
    res.status(201).json(newProject);
  } catch (error) {
    console.error("Error creating project:", error);
    res.status(500).json({ error: "Failed to create project 😬" });
  }
});


export default router;


// DELETE a project by slug
router.delete("/:slug", async (req, res) => {
  try {
    const deletedProject = await Project.findOneAndDelete({ slug: req.params.slug });

    if (!deletedProject) {
      return res.status(404).json({ error: "Project not found" });
    }

    res.json({ message: `✅ Project '${req.params.slug}' deleted successfully.` });
  } catch (error) {
    console.error("Error deleting project:", error);
    res.status(500).json({ error: "Failed to delete project 😬" });
  }
});

