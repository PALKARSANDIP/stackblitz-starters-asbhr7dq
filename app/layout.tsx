import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ColorModeProvider } from './context/ColorModeContext';
import Header from './components/Header';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'DocuPitch - Document Collaboration Platform',
  description: 'AI-powered document sharing and collaboration platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ColorModeProvider>
          <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header />
            <main style={{ flex: 1 }}>{children}</main>
            <Footer />
          </div>
        </ColorModeProvider>
      </body>
    </html>
  );
}