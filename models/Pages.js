import mongoose from "mongoose";

const processSchema = new mongoose.Schema({
  phase: String,
  experienceTitle: String,
  experienceLocation: String,
  experiencePeriod: String,
  company: String,
  title: String,
  location: String,
  period: String,
  highlights: [String],
});

const pageSchema = new mongoose.Schema({
  slug: String,
  order: String,
  customHTML: String,
  greet: String,
  title: String,
  subtitle: String,
  description: String,
  githubURL: String,
  linkedinURL: String,
  cardGrid: {
    type: mongoose.Schema.Types.Mixed,
    default: "",
  },
  aboutTitle: String,
  aboutDescription: String,
  aboutPortrait: String,
  process: [processSchema],
  contactTitle: String,
  contactDescription: String,
  contactButton: String,
  contactButtonURL: String,
  customHtml: { type: String, default: "" },
  blocks: mongoose.Schema.Types.Mixed,
});

const Page = mongoose.model("Page", pageSchema);

export default Page;
