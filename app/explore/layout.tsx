// T017: Core emotion layout wrapper with breadcrumb navigation
'use client';

import React from 'react';
import { Box, Container, Breadcrumbs, Link, Button, Typography } from '@mui/material';
import { ArrowBack, Home } from '@mui/icons-material';
import { useEmotionNavigation } from '../../src/hooks/useEmotionNavigation';
import { useRouter } from 'next/navigation';

interface ExploreLayoutProps {
  children: React.ReactNode;
}

export default function ExploreLayout({ children }: ExploreLayoutProps) {
  const { session, canGoBack, goBack } = useEmotionNavigation();
  const router = useRouter();

  const handleHome = () => {
    router.push('/');
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 2 }}>
        {/* Top Navigation */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 3,
          }}
        >
          {/* Back Button */}
          <Button
            startIcon={<ArrowBack />}
            onClick={canGoBack ? goBack : handleHome}
            sx={{ 
              color: 'text.secondary',
              '&:hover': {
                backgroundColor: 'action.hover',
              },
            }}
          >
            {canGoBack ? 'Back' : 'Home'}
          </Button>

          {/* Home Button */}
          <Button
            startIcon={<Home />}
            onClick={handleHome}
            sx={{ 
              color: 'text.secondary',
              '&:hover': {
                backgroundColor: 'action.hover',
              },
            }}
          >
            Start Over
          </Button>
        </Box>

        {/* Breadcrumb Navigation */}
        <Box sx={{ mb: 4 }}>
          <Breadcrumbs
            separator="›"
            sx={{
              fontSize: '0.9rem',
              color: 'text.secondary',
              '& .MuiBreadcrumbs-separator': {
                mx: 1,
              },
            }}
          >
            <Link
              component="button"
              variant="inherit"
              onClick={handleHome}
              sx={{
                textDecoration: 'none',
                color: 'text.secondary',
                '&:hover': {
                  textDecoration: 'underline',
                  color: 'primary.main',
                },
              }}
            >
              Emotions
            </Link>
            
            {session.selectedCore && (
              <Typography
                variant="inherit"
                sx={{
                  color: session.currentStep === 'secondary' ? 'primary.main' : 'text.secondary',
                  fontWeight: session.currentStep === 'secondary' ? 'medium' : 'normal',
                }}
              >
                {session.selectedCore}
              </Typography>
            )}
            
            {session.selectedSecondary && (
              <Typography
                variant="inherit"
                sx={{
                  color: session.currentStep === 'tertiary' ? 'primary.main' : 'text.secondary',
                  fontWeight: session.currentStep === 'tertiary' ? 'medium' : 'normal',
                }}
              >
                {session.selectedSecondary}
              </Typography>
            )}
            
            {session.selectedEmotion && (
              <Typography
                variant="inherit"
                sx={{
                  color: 'primary.main',
                  fontWeight: 'medium',
                }}
              >
                {session.selectedEmotion.tertiary}
              </Typography>
            )}
          </Breadcrumbs>
        </Box>

        {/* Page Content */}
        {children}
      </Box>
    </Container>
  );
}