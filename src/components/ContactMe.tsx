import { Box, TextField, Typography, Button, Stack, Snackbar, Alert } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactMe() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" as "success" | "error" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate success/failure
    const isSuccess = form.name && form.email && form.message;

    if (isSuccess) {
      setSnackbar({ open: true, message: "Message sent successfully! 🚀", severity: "success" });
      setForm({ name: "", email: "", message: "" }); // reset form
    } else {
      setSnackbar({ open: true, message: "Please fill in all fields. ❌", severity: "error" });
    }
  };

  return (
    <>
      <Box
        id="contact"
        component={motion.form}
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        sx={{
          position: "relative",
          px: { xs: 2, md: 6 },
          py: { xs: 4, md: 6 },
          width: "100%",
          maxWidth: 700,
          margin: "0 auto",
          borderRadius: "20px",
          background: "rgba(255, 255, 255, 0.07)",
          border: "1px solid rgba(255,255,255,0.1)",
          backdropFilter: "blur(20px)",
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
        }}
      >
        <Typography
          variant="h4"
          textAlign="center"
          sx={{
            mb: 4,
            background: "linear-gradient(to right, #00c6ff, #0072ff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: "bold",
          }}
        >
          📬 Contact Me
        </Typography>

        <Stack spacing={3}>
          <TextField
            fullWidth
            variant="outlined"
            label="Your Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            InputLabelProps={{ style: { color: "#ccc" } }}
            InputProps={{
              sx: {
                color: "white",
                borderRadius: "12px",
                "& fieldset": {
                  borderColor: "rgba(255,255,255,0.2)",
                },
                "&:hover fieldset": {
                  borderColor: "#00c6ff",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#00c6ff",
                  boxShadow: "0 0 12px #00c6ff60",
                },
              },
            }}
          />

          <TextField
            fullWidth
            variant="outlined"
            label="Email Address"
            name="email"
            value={form.email}
            onChange={handleChange}
            InputLabelProps={{ style: { color: "#ccc" } }}
            InputProps={{
              sx: {
                color: "white",
                borderRadius: "12px",
                "& fieldset": {
                  borderColor: "rgba(255,255,255,0.2)",
                },
                "&:hover fieldset": {
                  borderColor: "#0072ff",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#0072ff",
                  boxShadow: "0 0 12px #0072ff60",
                },
              },
            }}
          />

          <TextField
            fullWidth
            variant="outlined"
            label="Your Message"
            name="message"
            value={form.message}
            onChange={handleChange}
            multiline
            minRows={4}
            InputLabelProps={{ style: { color: "#ccc" } }}
            InputProps={{
              sx: {
                color: "white",
                borderRadius: "12px",
                "& fieldset": {
                  borderColor: "rgba(255,255,255,0.2)",
                },
                "&:hover fieldset": {
                  borderColor: "#00ffaa",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#00ffaa",
                  boxShadow: "0 0 12px #00ffaa60",
                },
              },
            }}
          />

          <Button
            type="submit"
            variant="outlined"
            fullWidth
            sx={{
              mt: 2,
              py: 1.5,
              borderRadius: "10px",
              borderColor: "#00c6ff",
              color: "white",
              position: "relative",
              overflow: "hidden",
              "&:hover": {
                background: "#00c6ff20",
                borderColor: "#00c6ff",
                boxShadow: "0 0 20px #00c6ff40",
              },
            }}
          >
            🚀 Send Message
          </Button>
        </Stack>
      </Box>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          severity={snackbar.severity}
          variant="filled"
          sx={{ width: "100%" }}
          onClose={() => setSnackbar({ ...snackbar, open: false })}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
}
