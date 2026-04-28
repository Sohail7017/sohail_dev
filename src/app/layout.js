import { ThemeProvider } from '@/context/ThemeContext';
import './globals.css';

export const metadata = {
  title: 'Flutter Developer Portfolio',
  description: 'Portfolio of a Flutter Developer with 1 year of experience. Showcasing projects like CVNext, AI Study Assistant, Creche App, and more.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
