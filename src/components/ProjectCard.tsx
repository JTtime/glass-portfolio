import { Box, Typography, Chip, Button, CardMedia, Stack } from "@mui/material";
import { motion } from "framer-motion";
import { projects } from "../data/projects";

export default function ProjectsPane() {
  return (
    <Box>
      <Typography variant="h4" fontWeight="bold" mb={4}>
        🚀 Featured Projects
      </Typography>

      <Stack spacing={4}>
        {projects.map((proj, index) => (
          <motion.div
            key={proj.title}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: "1rem",
              padding: "1.5rem",
              backdropFilter: "blur(10px)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
            }}
          >
            <Typography variant="h6">{proj.title}</Typography>
            <Typography variant="body2" mt={1} mb={2}>
              {proj.description}
            </Typography>

            <CardMedia
              component="img"
              height="530"
              image={proj.image}
              alt={proj.title}
              style={{
                borderRadius: "0.75rem",
                objectFit: "cover",
                marginBottom: "1rem",
              }}
            />

            <Box mb={2} flexWrap="wrap" display="flex" gap={1}>
              {proj.stack.map((tech) => (
                <Chip
                  key={tech}
                  label={tech}
                  size="small"
                  sx={{ backgroundColor: "rgba(255,255,255,0.1)", color: "white" }}
                />
              ))}
            </Box>

            <Box display="flex" gap={2} flexWrap="wrap">
              {proj.live && (
                <Button
                  size="small"
                  variant="outlined"
                  href={proj.live}
                  target="_blank"
                >
                  Live
                </Button>
              )}
              {proj.demo && (
                <Button
                  size="small"
                  variant="outlined"
                  href={proj.demo}
                  target="_blank"
                >
                  Demo
                </Button>
              )}
              {proj.github && (
                <Button
                  size="small"
                  variant="outlined"
                  href={proj.github}
                  target="_blank"
                >
                  GitHub
                </Button>
              )}
              {proj.playstore && (
                <Button
                  size="small"
                  variant="outlined"
                  href={proj.playstore}
                  target="_blank"
                >
                  Play Store
                </Button>
              )}
              {proj.appstore && (
                <Button
                  size="small"
                  variant="outlined"
                  href={proj.appstore}
                  target="_blank"
                >
                  App Store
                </Button>
              )}
            </Box>
          </motion.div>
        ))}
      </Stack>
    </Box>
  );
}
