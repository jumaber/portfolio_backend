import mongoose from "mongoose";

const processSchema = new mongoose.Schema({
  phase: String,
  location: String,
  period: String,
  highlights: [mongoose.Schema.Types.Mixed], // Editor.js block data
});

const projectSchema = new mongoose.Schema({
  title: String,
  slug: { type: String, required: true },
  order: String,
  cardTitle: String,
  cardSubtitle: String,
  roles: [String],
  tech: [String],
  cardImage: String,
  featured: Boolean,
  subtitle: String,
  location: String,
  period: String,
  liveUrl: String,
  githubUrl: String,
  description: mongoose.Schema.Types.Mixed, // Editor.js block data
  introImage: String,
  image: String,
  hero: String,
  challenges: [mongoose.Schema.Types.Mixed], // Editor.js block data
  process: [processSchema],
  outcomes: [mongoose.Schema.Types.Mixed], // Editor.js block data
  learnings: [mongoose.Schema.Types.Mixed], // Editor.js block data
  wireframes: [String],
  wireframesTitle: String,
  customHtml: { type: String, default: "" },
});

const Project = mongoose.model("Project", projectSchema);

export default Project;
