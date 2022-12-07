import { Header } from '@/components/Header';
import { Product } from '@/components/Product';
import { Container } from '@/styles/pages/home';

export default function Home() {
  return (
    <>
      <Header />

      <Container>
        <Product />
      </Container>
    </>
  );
}
