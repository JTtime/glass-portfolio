import { Box, Typography, Stack, Chip, Button } from "@mui/material";
import { motion } from "framer-motion";
import Wave from "react-wavify";

export default function AboutMePane() {
  return (
    <Box sx={{ position: "relative", overflow: "hidden" }}>
      {/* 🔵 Wavy Background */}
      <Wave
        fill="url(#gradient)"
        paused={false}
        options={{
          height: 30,
          amplitude: 20,
          speed: 0.2,
          points: 4,
        }}
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          zIndex: 0,
          opacity: 0.15,
        }}
      >
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(90)">
            <stop offset="10%" stopColor="#00c6ff" />
            <stop offset="90%" stopColor="#0072ff" />
          </linearGradient>
        </defs>
      </Wave>

      {/* 🔷 Glass Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          background: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(255,255,255,0.15)",
          borderRadius: "1rem",
          padding: "2rem",
          backdropFilter: "blur(10px)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
          sx={{
            background: "linear-gradient(90deg, #00c6ff, #0072ff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontSize: "2rem",
          }}
        >
          👨‍💻 About Me
        </Typography>

        <Typography variant="body1" color="white" mb={3} sx={{ fontSize: "1.05rem" }}>
          I’m a MERN stack & AI developer with 5+ years of experience building modern,
          scalable, and AI-powered products for startups and enterprises. I’ve led frontend
          architecture, built LLM tools with Python, and delivered complete MVPs solo.
        </Typography>

        <Typography variant="subtitle1" color="gray" mb={1}>
          Technologies I love:
        </Typography>

        <Stack direction="row" spacing={1} flexWrap="wrap" mb={3}>
          {[
            "React",
            "Next.js",
            "Redux",
            "Recoil",
            "Node.js",
            "MongoDB",
            "Python",
            "LLMs",
            "Firebase",
            "Three.js",
          ].map((tech) => (
            <Chip
              key={tech}
              label={tech}
              sx={{ backgroundColor: "rgba(255,255,255,0.12)", color: "white" }}
            />
          ))}
        </Stack>

        <Button
          variant="outlined"
          color="info"
          href="/resume.pdf"
          target="_blank"
          sx={{ backdropFilter: "blur(10px)", borderRadius: "8px" }}
        >
          📄 Download Resume
        </Button>
      </motion.div>
    </Box>
  );
}
