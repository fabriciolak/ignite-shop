import Image from 'next/image';

import shirt from '@/assets/shirt.svg';
import { Container, Footer } from '@/styles/components/product';
import Link from 'next/link';
import { Handbag } from 'phosphor-react';

export function Product() {
  return (
    <Container>
      <Link href="/">
        <Image width={520} height={480} src={shirt} alt="" />
      </Link>

      <Footer>
        <div>
          <h2>Camiseta X</h2>
          <span>R$ 79,90</span>
        </div>

        <button>
          <Handbag weight="bold" size={32} />
        </button>
      </Footer>
    </Container>
  );
}
