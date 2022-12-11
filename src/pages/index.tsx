import { Product } from '@/components/Product';
import { Container } from '@/styles/pages/home';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { GetStaticProps } from 'next';
import { stripe } from '@/lib/stripe';
import Stripe from 'stripe';

interface ProductProps {
  products: {
    id: string;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
    formattedPrice: string;
    defaultPriceId: string;
  }[];
}

export default function Home({ products }: ProductProps) {
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
      <Container
        ref={sliderRef}
        className="keen-slider"
        id="keen-slider"
        size={{ '@mobile': 'mobile', '@tablet': 'tablet' }}
      >
        {products?.map((prod) => (
          <Product key={prod?.id} product={prod} />
        ))}
      </Container>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  });

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      description: product.description,
      price: price.unit_amount,
      formattedPrice: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(Number(price.unit_amount) / 100),
      imageUrl: product.images[0],
      defaultPriceId: price.id,
    };
  });

  return {
    props: { products },
    revalidate: 60 * 60 * 2, // hours
  };
};
