import { stripe } from '@/lib/stripe';
import { Container, ImageContainer } from '@/styles/pages/success';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Stripe from 'stripe';

interface SuccessProps {
  customerName: string;
  product: {
    id: string;
    name: string;
    price: number;
    description: string;
    images: string;
    formattedPrice: string;
    defaultPriceId: string;
  }[];
}

export default function Success({ customerName, product }: SuccessProps) {
  return (
    <>
      <Head>
        <title>Success | Ignite Shop</title>
        <meta name="robots" content="noindex" />
      </Head>
      <Container>
        <ImageContainer>
          {product.map((product) => (
            <Image
              key={product.id}
              src={product.images[0]}
              width={140}
              height={140}
              alt=""
            />
          ))}
        </ImageContainer>

        <h2>Compra efetuada</h2>

        <p>
          Uhuul {customerName}, sua compra de{' '}
          {product.length > 1 ? `${product.length} camisetas` : `1 camiseta`} já
          está a caminho da sua casa.
        </p>

        <button>Voltar ao catálogo</button>
      </Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  const sessionId = String(query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  });

  const customerName = session.customer_details?.name?.toLocaleLowerCase();
  const product = session.line_items?.data.map(
    (product) => product.price?.product,
  ) as Stripe.Product[];

  console.log(product);

  return {
    props: {
      customerName,
      product,
    },
  };
};
