import { Box, Typography, IconButton } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { ReactNode } from "react";
import CloseIcon from "@mui/icons-material/Close";

const paneStyles = {
  position: "absolute",
  top: 0,
  right: 0,
  width: "60%",
  height: "100%",
  backdropFilter: "blur(16px)",
  background: "rgba(255,255,255,0.06)",
  borderLeft: "1px solid rgba(255,255,255,0.1)",
  zIndex: 1000,
  padding: "2rem",
  overflowY: "auto"
};

interface Props {
  selected: string | null;
  onClose: () => void;
}

export default function RightPane({ selected, onClose }: Props) {
  const renderContent = (): ReactNode => {
    switch (selected) {
      case "projects":
        return <Typography variant="h4">✨ Projects go here</Typography>;
      case "about":
        return <Typography variant="h4">👨‍💻 About Me</Typography>;
      case "interests":
        return <Typography variant="h4">🎯 Interests</Typography>;
      case "contact":
        return <Typography variant="h4">📬 Contact Me</Typography>;
      case "daughter":
        return <Typography variant="h4">👧 Daughter’s Corner</Typography>;
      default:
        return null;
    }
  };

  return (
    <AnimatePresence>
      {selected && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          style={paneStyles as any}
        >
          <Box display="flex" justifyContent="flex-end">
            <IconButton onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </Box>
          {renderContent()}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
