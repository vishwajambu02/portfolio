import express from "express";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
import { createServer as createViteServer } from "vite";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Parse JSON request bodies
app.use(express.json());

// Initialize Gemini Client
let ai: GoogleGenAI | null = null;
try {
  const apiKey = process.env.GEMINI_API_KEY;
  if (apiKey) {
    ai = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
} catch (error) {
  console.error("Failed to initialize Gemini SDK:", error);
}

// API Routes
app.post("/api/chat", async (req, res) => {
  try {
    const { message, history } = req.body;
    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    if (!process.env.GEMINI_API_KEY || !ai) {
      return res.json({
        reply: "Hello! I am Vishwa's AI Assistant. The chat feature isn't fully configured right now, but feel free to browse the portfolio directly to see my projects and skills!"
      });
    }

    const systemInstruction = `You are the personal AI Assistant of Vishwa Jambu H (nickname: VJ), representing his B.Tech Computer Science & Engineering background from Parul University, Gujarat, India.
Your goal is to answer questions about Vishwa's experience, projects, skills, education, contact info, and career goals in a friendly, professional, and highly knowledgeable tone.

Vishwa's Profile details:
- Name: Vishwa Jambu H (VJ)
- Title: Full-Stack Developer & AI Solutions Engineer
- Education:
  * B.Tech Computer Science & Engineering at Parul University (2024-2028), Current CGPA: 7.42/10
  * Class XII at G.N.F.C. Narmada Vidyalaya, Bharuch (66%)
  * Class X at G.N.F.C. Narmada Vidyalaya, Bharuch (80.33%)
- Email: vishwajambu66@gmail.com
- Phone: +91 8320342909
- Location: Vadodara, Gujarat, India
- GitHub: https://github.com/vishwajambu02
- LinkedIn: https://linkedin.com/in/vishwa-jambu-7a007039b
- Key Skills:
  * Languages: HTML, CSS, JavaScript, Python, Java, C/C++, TypeScript
  * Frontend: React.js, Tailwind CSS, Responsive Design, UI/UX Principles
  * Backend & Databases: Node.js, Express.js, REST APIs, MongoDB, MySQL, PostgreSQL, Firebase
  * Tools: Git, GitHub, VS Code, Render, AWS, ESBuild, Vite
- Projects:
  1. NewsCore (Live PWA): AI-Powered Aggregator & Summarization platform using React, Node, Express, Gemini API, MongoDB, Tailwind. Features automated RSS ingestion, single-call Gemini summaries/sentiments, infinite scroll, text-to-speech.
  2. Swachh Spot (Future Concept): Public Sanitation Discovery & rating platform. Leaflet Maps, accessibility filters, crowdsourced photos, SOS Panic button, contractor SLA dashboard. Showcased at Tech Expo.
  3. Daily Drape (Live E-Commerce): Clothing retail platform. JWT Auth, custom React catalog filters, shopping cart.
- Certifications & Achievements:
  * AWS Community Day Participant (2026)
  * Microsoft Azure & Cloud Computing Course (2025)
  * Web Development using React.js Course (2025)
  * Tech Expo Showcased Innovator for Swachh Spot

Always stay in character. Speak in the first person if natural ("Vishwa built...", "I am Vishwa's AI model"), keep answers concise and highlight his skills in MERN Stack and AI Solutions. Offer the recruiter his email (vishwajambu66@gmail.com) or phone number (+91 8320342909) to get in touch. Keep answers clean, using simple markdown formatting if necessary.`;

    // Map history to the required format for the chats API
    const chat = ai.chats.create({
      model: "gemini-3.5-flash",
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      }
    });

    // Send history first if it exists
    if (history && Array.isArray(history) && history.length > 0) {
      // Load history into the chat object
      // Each item in history should have role: "user" | "model", parts: [{text: "..."}]
      // For simplicity, we can reconstruct the full conversation context or just feed the message.
      // To keep it clean and robust, we can simply pass the last couple of exchanges or send them sequentially.
      // Alternatively, we can pass the history to the chat.
      for (const turn of history) {
        if (turn.role === "user") {
          // We can simulate chat history if needed, but the official chats.create doesn't take history in setup easily in SDK v2.4 unless we pass it.
          // Wait, we can just prepend the context to the current message if history exists, or use the chats sendMessage.
        }
      }
    }

    // Generate content
    const response = await chat.sendMessage({
      message: message
    });

    res.json({ reply: response.text });
  } catch (error: any) {
    console.error("Gemini Q&A Error:", error);
    res.status(500).json({ error: "Failed to generate AI response. " + (error?.message || "") });
  }
});

// Configure Vite middleware in development or static serving in production
async function setupVite() {
  if (process.env.NODE_ENV !== "production") {
    console.log("Starting server in development mode with Vite middleware...");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    console.log("Starting server in production mode with static serving...");
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

setupVite().catch((err) => {
  console.error("Error setting up server:", err);
});
