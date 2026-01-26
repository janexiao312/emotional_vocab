// T030: JournalPrompt component for reflection questions
'use client';

import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  Typography, 
  Box, 
  TextField, 
  Button,
  Collapse,
  IconButton,
} from '@mui/material';
import { 
  MenuBook, 
  ExpandMore, 
  ExpandLess, 
  Lightbulb,
} from '@mui/icons-material';
import { EmotionData } from '../data/types';

interface JournalPromptProps {
  emotion: EmotionData;
}

export function JournalPrompt({ emotion }: JournalPromptProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [journalText, setJournalText] = useState('');

  const handleToggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const handleStartOver = () => {
    // This will be implemented when we add navigation
    window.location.href = '/';
  };

  return (
    <Card 
      sx={{ 
        background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
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
            justifyContent: 'space-between',
            mb: 3,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <MenuBook 
              sx={{ 
                color: 'warning.main', 
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
              Reflect & Explore
            </Typography>
          </Box>

          <IconButton
            onClick={handleToggleExpanded}
            sx={{
              color: 'text.secondary',
              '&:hover': {
                backgroundColor: 'rgba(0,0,0,0.04)',
              },
            }}
          >
            {isExpanded ? <ExpandLess /> : <ExpandMore />}
          </IconButton>
        </Box>

        {/* Prompt Question */}
        <Box 
          sx={{ 
            display: 'flex', 
            alignItems: 'flex-start', 
            mb: 3,
            gap: 2,
          }}
        >
          <Lightbulb 
            sx={{ 
              color: 'warning.main', 
              fontSize: '1.5rem',
              mt: 0.5,
            }} 
          />
          
          <Box sx={{ flex: 1 }}>
            <Typography 
              variant="h6" 
              component="h3"
              sx={{ 
                fontWeight: 500,
                color: 'text.primary',
                mb: 1,
              }}
            >
              Journal Prompt
            </Typography>
            
            <Typography 
              variant="body1" 
              sx={{ 
                color: 'text.primary',
                lineHeight: 1.6,
                fontStyle: 'italic',
                fontSize: '1.1rem',
              }}
            >
              {emotion.journalPrompt}
            </Typography>
          </Box>
        </Box>

        {/* Expandable Journal Area */}
        <Collapse in={isExpanded}>
          <Box sx={{ mt: 3 }}>
            <TextField
              fullWidth
              multiline
              rows={6}
              placeholder="Take a moment to reflect on this question. Write down whatever comes to mind - there's no right or wrong answer..."
              value={journalText}
              onChange={(e) => setJournalText(e.target.value)}
              sx={{
                '& .MuiOutlinedInput-root': {
                  backgroundColor: 'rgba(255, 255, 255, 0.7)',
                },
                mb: 3,
              }}
            />

            <Box sx={{ textAlign: 'center' }}>
              <Typography 
                variant="body2" 
                sx={{ 
                  color: 'text.secondary',
                  mb: 2,
                  fontStyle: 'italic',
                }}
              >
                Your reflections are private and not saved anywhere.
                This space is just for you.
              </Typography>
            </Box>
          </Box>
        </Collapse>

        {/* Action Buttons */}
        <Box 
          sx={{ 
            mt: 4, 
            pt: 3, 
            borderTop: '1px solid rgba(0,0,0,0.1)',
            textAlign: 'center',
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: 2,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Button
            variant="contained"
            onClick={handleStartOver}
            sx={{
              backgroundColor: 'primary.main',
              color: 'white',
              '&:hover': {
                backgroundColor: 'primary.dark',
              },
              minWidth: 160,
            }}
          >
            Explore Another Emotion
          </Button>

          {!isExpanded && (
            <Button
              variant="outlined"
              onClick={handleToggleExpanded}
              sx={{
                borderColor: 'warning.main',
                color: 'warning.main',
                '&:hover': {
                  backgroundColor: 'warning.main',
                  color: 'white',
                },
                minWidth: 160,
              }}
            >
              Open Journal Space
            </Button>
          )}
        </Box>

        {/* Encouraging Message & Start Over */}
        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Typography 
            variant="body2" 
            sx={{ 
              color: 'text.secondary',
              lineHeight: 1.5,
              mb: 3,
            }}
          >
            Taking time to understand your emotions is an act of self-care and wisdom. 
            You're building valuable emotional intelligence.
          </Typography>
          
          <Button
            variant="contained"
            size="large"
            onClick={handleStartOver}
            sx={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              fontWeight: 600,
              py: 1.5,
              px: 4,
              borderRadius: 3,
              textTransform: 'none',
              fontSize: '1.1rem',
              '&:hover': {
                background: 'linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%)',
                transform: 'translateY(-1px)',
              },
              transition: 'all 0.2s ease-in-out',
            }}
          >
            🔄 Start Over - Explore Another Emotion
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}