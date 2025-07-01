import mongoose from "mongoose";

const processSchema = new mongoose.Schema({
  phase: String,
  location: String,
  period: String,
  highlights: [String],
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
  description: String,
  introImage: String,
  image: String,
  hero: String,
  challenges: [String],
  process: [processSchema],
  outcomes: [String],
  learnings: [String],
  wireframes: [String],
  wireframesTitle: String,
  customHtml: { type: String, default: "" },
});

const Project = mongoose.model("Project", projectSchema);

export default Project;
