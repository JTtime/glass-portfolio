import { Box, Typography, Stack, IconButton } from "@mui/material";
import { GitHub, LinkedIn, Mail } from "@mui/icons-material";
import { motion } from "framer-motion";

const oneLiner = "MERN Stack + AI Developer 💡";

export default function LeftPanel() {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "250px",
        p: 2,
        backdropFilter: "blur(12px)",
        background: "rgba(255, 255, 255, 0.05)",
        borderRight: "1px solid rgba(255, 255, 255, 0.2)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        position: "fixed",
        top: 0,
        left: 0,
      }}
    >
      {/* Phone Frame */}
      <Box
        sx={{
          width: "100px",
          height: "200px",
          borderRadius: "20px",
          border: "4px solid #8888",
          background: "linear-gradient(145deg, #555, #222)",
          boxShadow: "inset 0 0 10px #0006",
          mt: 4,
        }}
      />

      {/* Tagline */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <Typography
          variant="subtitle2"
          sx={{
            fontSize: "0.9rem",
            color: "text.secondary",
            mt: 3,
            textAlign: "center",
          }}
        >
          <motion.span
            animate={{ opacity: [0, 1, 0], x: [-2, 0, 2, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            {oneLiner}
          </motion.span>
        </Typography>
      </motion.div>

      {/* Social Icons */}
      <Stack direction="row" spacing={2} mb={4}>
        <IconButton href="https://github.com/JTtime" target="_blank" color="inherit">
          <GitHub />
        </IconButton>
        <IconButton
          href="https://www.linkedin.com/in/jeevraj-taralkar-69103829/"
          target="_blank"
          color="inherit"
        >
          <LinkedIn />
        </IconButton>
        <IconButton href="mailto:jeevraj.taralkar@gmail.com" color="inherit">
          <Mail />
        </IconButton>
      </Stack>
    </Box>
  );
}
