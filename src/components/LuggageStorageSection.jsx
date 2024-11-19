import React from 'react';
import { Box, Button, Typography, Grid, Paper } from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';

export default function LuggageStorageSection() {
  return (
    <Paper
      elevation={3}
      sx={{
        borderRadius: 4,
        overflow: 'hidden',
        backgroundImage: 'linear-gradient(135deg, #f3f4f6, #eef2ff)',
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
          transform: 'scale(1.02)',
          boxShadow: '0px 8px 30px rgba(0, 0, 0, 0.15)',
        },
      }}
    >
      <Grid container>
        {/* Left Side */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            p: 5,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            color: 'text.primary',
            textAlign: 'left',
          }}
        >
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Affordable and Safe Luggage Storage
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            Keep your belongings safe with full protection, flexible cancellation, and round-the-clock support.
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <SecurityIcon sx={{ color: '#4b5d67', fontSize: '2rem', mr: 1 }} />
            <Typography variant="body1">$10,000 protection</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <CancelPresentationIcon sx={{ color: '#4b5d67', fontSize: '2rem', mr: 1 }} />
            <Typography variant="body1">Free cancellation</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <HeadsetMicIcon sx={{ color: '#4b5d67', fontSize: '2rem', mr: 1 }} />
            <Typography variant="body1">24/7 customer support</Typography>
          </Box>

          <Button
            variant="contained"
            sx={{
              mt: 3,
              px: 3,
              py: 1.5,
              backgroundImage: 'linear-gradient(45deg, #667eea, #764ba2)',
              color: '#fff',
              fontWeight: 'bold',
              borderRadius: 2,
              textTransform: 'none',
              transition: 'background 0.3s ease',
              '&:hover': {
                backgroundImage: 'linear-gradient(45deg, #764ba2, #667eea)',
              },
            }}
          >
            Find storage →
          </Button>
        </Grid>

        {/* Right Side */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            p: 5,
            backgroundImage: 'linear-gradient(135deg, #6a11cb, #2575fc)',
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            textAlign: 'center',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.05)',
            },
          }}
        >
          <Button
            variant="outlined"
            sx={{
              color: 'white',
              borderColor: 'white',
              textTransform: 'none',
              fontWeight: 'bold',
              mb: 3,
              borderRadius: 2,
              zIndex: 1,
              '&:hover': {
                borderColor: 'rgba(255, 255, 255, 0.8)',
                color: 'rgba(255, 255, 255, 0.8)',
              },
            }}
          >
            Price in Albania ⌄
          </Button>

          <Typography variant="h2" fontWeight="bold" sx={{ fontSize: '3.5rem', zIndex: 1 }}>
            €3.50
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.25rem', mt: 1, zIndex: 1 }}>
            from
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.25rem', zIndex: 1 }}>
            bag / day
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}
