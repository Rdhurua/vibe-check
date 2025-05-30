import mongoose from "mongoose";
import Question from "../models/Questions.js";

const questions = [
  {
    text: "What's your go-to activity after a long day?",
    options: [
      "Binge a random series till 3AM",
      "Journal with lo-fi music in the background",
      "Hit the gym or hustle on a side project",
      "Take a nap and disappear"
    ]
  },
  {
    text: "Which outfit feels the most 'you'?",
    options: [
      "Oversized hoodie, messy hair, headphones",
      "All-black fit with silver rings",
      "Colorful crochet cardigan & funky socks",
      "Clean-cut blazer & minimal shoes"
    ]
  },
  {
    text: "Choose a late-night craving:",
    options: [
      "Spicy ramen with a YouTube binge",
      "Herbal tea and oat cookies",
      "Energy drink and protein bar",
      "Cold pizza from this morning"
    ]
  },
  {
    text: "How do you handle confrontation?",
    options: [
      "Laugh it off and change the subject",
      "Write a long message with soft language",
      "Say it directly, no sugarcoating",
      "Ghost for 3 days and pretend nothing happened"
    ]
  },
  {
    text: "Your current playlist is mostly:",
    options: [
      "Chaotic meme songs + hyperpop",
      "Soft indie, acoustic, or lo-fi",
      "Power anthems and motivational beats",
      "Sad songs that hit harder than expected"
    ]
  },
  {
    text: "What’s your ideal weekend?",
    options: [
      "A spontaneous road trip",
      "Staying home and painting or crafting",
      "Planning productivity sprints",
      "Sleeping until Monday"
    ]
  },
  {
    text: "Choose an aesthetic:",
    options: [
      "Vaporwave",
      "Cottagecore",
      "Techwear",
      "Grunge"
    ]
  },
  {
    text: "How often do you question your entire existence?",
    options: [
      "Every 3 minutes",
      "Occasionally, under the stars",
      "Rarely, I’m too focused",
      "Constantly, but I laugh it off"
    ]
  },
  {
    text: "Your texting style:",
    options: [
      "i type like this lol",
      "✨emojis✨ and soft words",
      "Clear and concise. No fluff.",
      "Delayed replies & dry texts"
    ]
  },
  {
    text: "What’s your reaction to plans being cancelled?",
    options: [
      "Sweet, more me-time",
      "A little sad but okay",
      "Back to the grind then",
      "Didn’t want to go anyway"
    ]
  }
];


export const seedDB = async () => {
  try {
    // await mongoose.connect(process.env.MONGODB_URI);
    // await Question.deleteMany(); // Clean slate
    const count = await Question.countDocuments();

  if (count > 0) {
    console.log("✅ Questions already seeded. Skipping...");
    return;
  }
    await Question.insertMany(questions);
    console.log(" Seeded quiz questions successfully!");
    process.exit();
  } catch (err) {
    console.error(" Failed to seed DB:", err);
    process.exit(1);
  }
};
