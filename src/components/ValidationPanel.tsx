// T028: ValidationPanel component for supportive messages
'use client';

import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { Favorite, Psychology } from '@mui/icons-material';
import { EmotionData } from '../data/types';

interface ValidationPanelProps {
  emotion: EmotionData;
}

export function ValidationPanel({ emotion }: ValidationPanelProps) {
  return (
    <Card 
      sx={{ 
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        border: '1px solid',
        borderColor: 'divider',
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
          <Favorite 
            sx={{ 
              color: 'error.main', 
              mr: 2, 
              fontSize: '2rem',
            }} 
          />
          <Typography 
            variant="h5" 
            component="h2"
            sx={{ 
              fontWeight: 600,
              color: 'text.primary',
            }}
          >
            You Are Not Alone
          </Typography>
        </Box>

        {/* Validation Message */}
        <Typography 
          variant="body1" 
          sx={{ 
            color: 'text.primary',
            lineHeight: 1.7,
            fontSize: '1.1rem',
            fontStyle: 'italic',
          }}
        >
          {emotion.validation}
        </Typography>

        {/* Examples Section */}
        <Box sx={{ mt: 4 }}>
          <Box 
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              mb: 2,
            }}
          >
            <Psychology 
              sx={{ 
                color: 'primary.main', 
                mr: 2,
                fontSize: '1.5rem',
              }} 
            />
            <Typography 
              variant="h6" 
              component="h3"
              sx={{ 
                fontWeight: 500,
                color: 'text.primary',
              }}
            >
              Common Experiences
            </Typography>
          </Box>

          <Box 
            component="ul" 
            sx={{ 
              listStyle: 'none', 
              p: 0, 
              m: 0,
            }}
          >
            {emotion.examples.map((example, index) => (
              <Typography
                key={index}
                component="li"
                variant="body2"
                sx={{
                  color: 'text.secondary',
                  mb: 1,
                  pl: 2,
                  position: 'relative',
                  lineHeight: 1.6,
                  '&:before': {
                    content: '"•"',
                    position: 'absolute',
                    left: 0,
                    color: 'primary.main',
                    fontWeight: 'bold',
                  },
                }}
              >
                {example}
              </Typography>
            ))}
          </Box>
        </Box>

        {/* Reassurance Footer */}
        <Box 
          sx={{ 
            mt: 4, 
            pt: 3, 
            borderTop: '1px solid',
            borderColor: 'divider',
            textAlign: 'center',
          }}
        >
          <Typography 
            variant="body2" 
            sx={{ 
              color: 'text.secondary',
              fontWeight: 500,
            }}
          >
            Your feelings are valid and this experience is part of being human. 
            You have the strength to navigate this.
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}