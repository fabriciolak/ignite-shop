import Image from 'next/image';

import {
  Container,
  ProductContainer,
  ProductContent,
  ProductImage,
} from '@/styles/pages/product';

// import shirt from '@/assets/shirt.svg';
import { GetStaticPaths, GetStaticProps } from 'next';
import { stripe } from '@/lib/stripe';
import Stripe from 'stripe';
import Head from 'next/head';

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

export default function Product({ product }: ProductProps) {
  return (
    <>
      <Head>
        <title>{product.name} | Ingite Shop</title>
        <meta name="description" content={product.description} />
      </Head>
      <Container>
        <ProductContainer size={{ '@medium': 'medium' }}>
          <ProductImage size={{ '@medium': 'medium' }}>
            <Image
              src={product?.imageUrl}
              width={520}
              height={480}
              alt=""
              priority
            />
          </ProductImage>

          <ProductContent>
            <div>
              <h1>{product?.name}</h1>
              <span>{product?.formattedPrice}</span>

              <p>{product?.description}</p>
            </div>

            <button>Colocar na sacola</button>
          </ProductContent>
        </ProductContainer>
      </Container>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<any, any, { id: string }> = async ({
  params,
}) => {
  const productId = params.id;

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  });

  const price = product.default_price as Stripe.Price;

  return {
    props: {
      product: {
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
      },
    },
    revalidate: 60 * 60 * 2, // hours
  };
};
