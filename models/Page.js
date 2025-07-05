import mongoose from "mongoose";

const experienceSchema = new mongoose.Schema({
  experienceTitle: String,
  experienceLocation: String,
  experiencePeriod: String,
  experienceCompany: String,
  highlights: [String],
});


const pageSchema = new mongoose.Schema({
  slug: { type: String, required: true },
  image: String,
  order: String,
  greet: String,
  title: String,
  introTitle: String,
  subtitle: String,
  description: mongoose.Schema.Types.Mixed, // Editor.js block data
  githubURL: String,
  githubImage: String,
  linkedinURL: String,
  linkedinImage: String,
  cardGrid: {
    type: mongoose.Schema.Types.Mixed, // Editor.js block data
    default: "",
  },
  aboutTitle: String,
  aboutDescription: mongoose.Schema.Types.Mixed, // Editor.js block data
  aboutPortrait: String,
  experience: [experienceSchema],
  contactTitle: String,
  contactDescription: mongoose.Schema.Types.Mixed, // Editor.js block data
  contactButton: String,
  contactButtonURL: String,
  customHTML: { type: String, default: "" },
  blocks: mongoose.Schema.Types.Mixed,
  imprintResponsible: mongoose.Schema.Types.Mixed, // Editor.js block data
  imprintContactEmail: String,
  imprintDisclaimer: mongoose.Schema.Types.Mixed, // Editor.js block data
  imprintDisclaimerEU: mongoose.Schema.Types.Mixed, // Editor.js block data
  imprintDisclaimerFreelance: mongoose.Schema.Types.Mixed, // Editor.js block data
  imprintStreet: String,
  imprintPostCode: String,
  imprintCity: String,
  imprintCountry: String,
  imprintEmailURL: String,
  imprintDisclaimerEUURL: String,
  imprintDisclaimerEUURLTitle: String,
});

const Page = mongoose.model("Page", pageSchema);

export default Page;
