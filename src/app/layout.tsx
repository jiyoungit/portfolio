import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'JYP',
  description: 'Junior Frontend Developer',
  icons: {
    icon: '/images/apple.webp',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
