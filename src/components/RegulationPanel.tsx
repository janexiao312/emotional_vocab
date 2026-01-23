// T029: RegulationPanel component for technique display
'use client';

import React from 'react';
import { Card, CardContent, Typography, Box, Chip } from '@mui/material';
import { Build, TipsAndUpdates } from '@mui/icons-material';
import { EmotionData } from '../data/types';

interface RegulationPanelProps {
  emotion: EmotionData;
}

export function RegulationPanel({ emotion }: RegulationPanelProps) {
  return (
    <Card 
      sx={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        '& .MuiTypography-root': {
          color: 'white',
        },
      }}
    >
      <CardContent sx={{ p: 4 }}>
        {/* Header */}
        <Box 
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            mb: 3,
          }}
        >
          <Build 
            sx={{ 
              color: 'white', 
              mr: 2, 
              fontSize: '2rem',
            }} 
          />
          <Typography 
            variant="h5" 
            component="h2"
            sx={{ 
              fontWeight: 600,
              color: 'white',
            }}
          >
            Ways to Navigate This Feeling
          </Typography>
        </Box>

        {/* Techniques Grid */}
        <Box 
          sx={{ 
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: 3,
          }}
        >
          {emotion.generalTechniques.map((technique, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 2,
              }}
            >
              <Chip
                label={index + 1}
                size="small"
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  color: 'white',
                  fontWeight: 'bold',
                  minWidth: 32,
                  '& .MuiChip-label': {
                    color: 'white',
                  },
                }}
              />
              
              <Typography 
                variant="body1" 
                sx={{ 
                  lineHeight: 1.6,
                  flex: 1,
                }}
              >
                {technique}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Tips Section */}
        <Box 
          sx={{ 
            mt: 4, 
            pt: 3, 
            borderTop: '1px solid rgba(255, 255, 255, 0.2)',
          }}
        >
          <Box 
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              mb: 2,
            }}
          >
            <TipsAndUpdates 
              sx={{ 
                color: 'white', 
                mr: 1,
                fontSize: '1.2rem',
              }} 
            />
            <Typography 
              variant="body2" 
              sx={{ 
                fontWeight: 500,
                color: 'white',
              }}
            >
              Remember
            </Typography>
          </Box>
          
          <Typography 
            variant="body2" 
            sx={{ 
              opacity: 0.9,
              lineHeight: 1.5,
            }}
          >
            These techniques take practice. Try one or two that resonate with you right now. 
            Be patient with yourself as you learn what works best for you.
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}