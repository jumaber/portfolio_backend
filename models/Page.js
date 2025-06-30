import mongoose from "mongoose";

const experienceSchema = new mongoose.Schema({
  experienceTitle: String,
  experienceLocation: String,
  experiencePeriod: String,
  experienceCompany: String,
  highlights: [String],
});


const pageSchema = new mongoose.Schema({
  slug: String,
  image: String,
  order: String,
  greet: String,
  title: String,
  introTitle: String,
  subtitle: String,
  description: String,
  githubURL: String,
  githubImage: String,
  linkedinURL: String,
  linkedinImage: String,
  cardGrid: {
    type: mongoose.Schema.Types.Mixed,
    default: "",
  },
  aboutTitle: String,
  aboutDescription: String,
  aboutPortrait: String,
  experience: [experienceSchema],
  contactTitle: String,
  contactDescription: String,
  contactButton: String,
  contactButtonURL: String,
  customHTML: { type: String, default: "" },
  blocks: mongoose.Schema.Types.Mixed,
  imprintResponsible: String,
  imprintContactEmail: String,
  imprintDisclaimer: String,
  imprintDisclaimerEU: String,
  imprintDisclaimerFreelance: String,
});

const Page = mongoose.model("Page", pageSchema);

export default Page;
