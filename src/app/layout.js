import Header from '@/components/Header';
import './globals.css';
import Footer from '@/components/Footer';


export const metadata = {
  title: "Febiverse",
  description: "Universe ReImagined",
  icons: {
    icon: "/favicon.ico",   // 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
