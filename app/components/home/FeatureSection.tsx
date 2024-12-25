'use client';

import { Box, Container, Grid, Typography, Paper } from '@mui/material';
import { AutoAwesome, Security, People, Analytics } from '@mui/icons-material';

const features = [
  {
    icon: <AutoAwesome sx={{ fontSize: 40 }} />,
    title: 'AI-Powered Insights',
    description: 'Get intelligent summaries and insights from your documents automatically.'
  },
  {
    icon: <Security sx={{ fontSize: 40 }} />,
    title: 'Secure Sharing',
    description: 'Share documents securely with granular access controls and tracking.'
  },
  {
    icon: <People sx={{ fontSize: 40 }} />,
    title: 'Team Collaboration',
    description: 'Work together in real-time with comments and version control.'
  },
  {
    icon: <Analytics sx={{ fontSize: 40 }} />,
    title: 'Advanced Analytics',
    description: 'Track document engagement and team productivity with detailed analytics.'
  }
];

export default function FeatureSection() {
  return (
    <Box sx={{ py: 8, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" align="center" gutterBottom>
          Features
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={6} lg={3} key={index}>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-5px)'
                  }
                }}
              >
                <Box sx={{ color: 'primary.main', mb: 2 }}>{feature.icon}</Box>
                <Typography variant="h6" gutterBottom>{feature.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {feature.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}