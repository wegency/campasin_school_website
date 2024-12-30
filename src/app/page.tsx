
import HeroBanner from '../components/HeroBanner';
import QuickLinks from '../components/QuickLinks';
import CTASection from '../components/CTASection';
import AboutSection from '@/components/aboutSection/AboutSection';
import Gallery from '@/components/Gallery';
import Events from '@/components/Events';

export default function HomePage() {
  return (
    <>
      <HeroBanner/>
      <QuickLinks />
      <AboutSection/>
      <Events/>
      <Gallery/>
      <CTASection />
    </>
  );
}




