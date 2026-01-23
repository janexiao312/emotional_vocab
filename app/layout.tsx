import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { theme } from './theme';

export const metadata: Metadata = {
  title: "Emotional Vocabulary Builder",
  description: "Explore and understand your emotions through guided vocabulary building",
  keywords: "emotions, emotional intelligence, mental health, self-awareness",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
