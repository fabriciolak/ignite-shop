import Image from 'next/image';

import { Container, Footer } from '@/styles/components/product';
import Link from 'next/link';
import { Handbag } from 'phosphor-react';
import useCart from '@/hooks/useCart';

interface ProductProps {
  product: {
    id: string;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
    formattedPrice: string;
    defaultPriceId: string;
  };
}

export function Product({ product }: ProductProps) {
  const { addProductToCart } = useCart();

  return (
    <Container
      as="article"
      className="keen-slider__slide"
      size={{ '@tablet': 'tablet' }}
    >
      <Link href={`/product/${product.id}`}>
        <Image width={520} height={480} src={product.imageUrl} alt="" />
      </Link>

      <Footer>
        <div>
          <h2>{product.name}</h2>
          <span>{product.formattedPrice}</span>
        </div>

        <button onClick={() => addProductToCart(product)}>
          <Handbag weight="bold" size={32} />
        </button>
      </Footer>
    </Container>
  );
}
