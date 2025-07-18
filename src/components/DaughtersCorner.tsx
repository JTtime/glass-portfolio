import { Box, Typography, Grid, Card, CardMedia, CardContent, Link } from "@mui/material";
import { motion } from "framer-motion";
import InstagramIcon from '@mui/icons-material/Instagram';

const achievements = [
  {
    title: "Abacus Champion 🧮",
    description: "Multiple medals in state and national-level abacus competitions.",
    images: ["/placeholders/abacus1.jpg", "/placeholders/abacus2.jpg"],
  },
  {
    title: "Skating Prodigy ⛸️",
    description: "Trophies and medals from local + national skating events. Attempted 2 world records.",
    images: ["/placeholders/skate1.jpg", "/placeholders/skate2.jpg"],
  }
];

const instagramPost = {
  link: "https://www.instagram.com/p/DKqsYzzow1n/",
  thumbnail: "/placeholders/insta-thumb.jpg",
  caption: "Explaining Python code at age 5 🤯",
};

export default function DaughtersCorner() {
  return (
    <Box
      id="daughters-corner"
      sx={{
        px: { xs: 2, md: 8 },
        py: { xs: 6, md: 10 },
        background: "rgba(255,255,255,0.05)",
        borderRadius: "24px",
        backdropFilter: "blur(10px)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
      }}
    >
      <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 700, textAlign: "center" }}>
        Daughter’s Corner 💖
      </Typography>

      <Grid container spacing={4} mt={4}>
        {achievements.map((item, idx) => (
          <Grid size={{xs: 12, md: 6}}  key={idx}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              style={{
                borderRadius: "16px",
                overflow: "hidden",
                background: "rgba(255,255,255,0.1)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              <Card elevation={0} sx={{ background: "transparent" }}>
                <CardContent>
                  <Typography variant="h5" fontWeight={600}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" mt={1} mb={2}>
                    {item.description}
                  </Typography>
                  <Grid container spacing={2}>
                    {item.images.map((img, i) => (
                      <Grid size={{xs: 6}} key={i}>
                        <CardMedia
                          component="img"
                          image={img}
                          alt={`${item.title} ${i}`}
                          sx={{
                            borderRadius: "12px",
                            border: "1px solid rgba(255,255,255,0.2)",
                          }}
                        />
                      </Grid>
                    ))}
                  </Grid>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {/* Instagram Embed Section */}
      <Box mt={8} textAlign="center">
        <Typography variant="h5" fontWeight={600} gutterBottom>
          📹 Instagram Spotlight: Coding at Age 5
        </Typography>

        {/* Embed block */}
        <Box
          component="iframe"
          src={`https://www.instagram.com/p/DKqsYzzow1n/embed`}
          width="400"
          height="480"
          frameBorder="0"
          allowTransparency
          sx={{
            borderRadius: "16px",
            border: "1px solid rgba(255,255,255,0.2)",
            my: 2,
          }}
        />

        {/* Fallback link + thumbnail */}
        <Box mt={2}>
          <Link href={instagramPost.link} target="_blank" underline="none" rel="noopener">
            <Box
              component="img"
              src={instagramPost.thumbnail}
              alt="Python coding at 5"
              sx={{
                width: 320,
                height: "auto",
                borderRadius: "12px",
                mb: 1,
              }}
            />
            <Typography variant="body1" display="flex" alignItems="center" justifyContent="center" gap={1}>
              <InstagramIcon fontSize="small" /> {instagramPost.caption}
            </Typography>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
