import Image from 'next/image';

import {
  Container,
  ProductContainer,
  ProductContent,
  ProductImage,
} from '@/styles/pages/product';

import shirt from '@/assets/shirt.svg';

export default function Product() {
  return (
    <Container>
      <ProductContainer size={{ '@medium': 'medium' }}>
        <ProductImage size={{ '@medium': 'medium' }}>
          <Image src={shirt} width={520} height={480} alt="" />
        </ProductImage>

        <ProductContent>
          <div>
            <h1>Camiseta X</h1>
            <span>R$ 79,90</span>

            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. At aut
              voluptates, iste dignissimos repudiandae minima explicabo
              doloremque magni aspernatur dolor? Fugit unde excepturi earum
              sapiente voluptatum architecto at quas nulla.
            </p>
          </div>

          <button>Colocar na sacola</button>
        </ProductContent>
      </ProductContainer>
    </Container>
  );
}
