import { Box, Button, Stack } from "@mui/material";
import { motion } from "framer-motion";

const buttons = [
  { label: "Projects", id: "projects" },
  { label: "About Me", id: "about" },
  { label: "Interests", id: "interests" },
  { label: "Contact Me", id: "contact" },
  { label: "Daughter’s Corner", id: "daughter" }
];

interface Props {
  onSelect: (id: string) => void;
}

export default function ControlButtons({ onSelect }: Props) {
  return (
    <Box sx={{ position: "absolute", top: "30%", left: 280 }}>
      <Stack spacing={2}>
        {buttons.map((btn) => (
          <motion.div
            key={btn.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Button
              variant="outlined"
              onClick={() => onSelect(btn.id)}
              sx={{
                backdropFilter: "blur(10px)",
                background: "rgba(255,255,255,0.05)",
                color: "inherit",
                borderRadius: "12px",
                border: "1px solid rgba(255,255,255,0.2)",
                px: 3,
                py: 1,
                fontWeight: "bold",
                textTransform: "none"
              }}
            >
              {btn.label}
            </Button>
          </motion.div>
        ))}
      </Stack>
    </Box>
  );
}
