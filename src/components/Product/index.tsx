import Image from 'next/image';

import { Container, Footer } from '@/styles/components/product';
import Link from 'next/link';
import { Handbag } from 'phosphor-react';
import { Url } from 'url';

interface ProductProps {
  name: string;
  imageUrl: string;
  formattedPrice: string;
  link: Url | string;
}

export function Product({
  formattedPrice,
  link,
  imageUrl,
  name,
}: ProductProps) {
  return (
    <Container as="article" className="keen-slider__slide">
      <Link href={link}>
        <Image width={520} height={480} src={imageUrl} alt="" />
      </Link>

      <Footer>
        <div>
          <h2>{name}</h2>
          <span>{formattedPrice}</span>
        </div>

        <button>
          <Handbag weight="bold" size={32} />
        </button>
      </Footer>
    </Container>
  );
}
