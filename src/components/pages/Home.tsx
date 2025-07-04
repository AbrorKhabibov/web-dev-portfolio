import { Hero } from './HomeStack/Hero';
import WaveSeparator from '../reusables/WaveSeparator';
import { Services } from './HomeStack/Services';
import { About } from './HomeStack/About';
import { Footer } from '../reusables/Footer';

// Home page component
export const HomePage = () => (
  <>
    <Hero />
    <WaveSeparator topColor="var(--color-primary-bg)" botColor="var(--color-secondary-bg)" />
    <Services />
    <WaveSeparator topColor="var(--color-secondary-bg)" botColor="var(--color-primary-bg)" />
    <About />
    <WaveSeparator topColor="var(--color-primary-bg)" botColor="var(--color-secondary-bg)" />
    <Footer />
  </>
);
