import Link from 'next/link';
import Image from 'next/image';

import { Container } from '@/styles/components/header';

import igniteLogo from '@/assets/logo-ignite.svg';

export function Header() {
  return (
    <Container>
      <Link href="/">
        <Image src={igniteLogo} width={130} height={52} alt="" />
      </Link>

      <h1>Carrinho</h1>
    </Container>
  );
}
