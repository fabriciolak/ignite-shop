import { Header } from '@/components/Header';
import { Product } from '@/components/Product';
import { Container } from '@/styles/pages/home';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

export default function Home() {
  const [sliderRef] = useKeenSlider({
    mode: 'free-snap',
    slides: {
      perView: 2,
      spacing: 48,
    },
    breakpoints: {
      '(max-width: 820px)': {
        slides: {
          perView: 1,
          spacing: 48,
        },
      },
      '(max-width: 480px)': {
        slides: {
          perView: 1,
          spacing: 48,
        },
      },
    },
  });

  return (
    <div style={{ padding: '0 1rem' }}>
      <Header />

      <Container
        ref={sliderRef}
        className="keen-slider"
        id="keen-slider"
        size={{ '@mobile': 'mobile', '@tablet': 'tablet' }}
      >
        <Product />
        <Product />
        <Product />
      </Container>
    </div>
  );
}
