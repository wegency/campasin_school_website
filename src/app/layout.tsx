import './globals.css';
import Footer from '../components/Footer';
import Header from '../components/Header';

export const metadata = {
  title: 'School Website',
  description: 'Welcome to our school!',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
