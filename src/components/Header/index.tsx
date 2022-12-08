import Link from 'next/link';
import Image from 'next/image';

import { Container, HeaderIcon } from '@/styles/components/header';

import igniteLogo from '@/assets/logo-ignite.svg';
import { Handbag } from 'phosphor-react';

export function Header() {
  return (
    <Container>
      <Link href="/">
        <Image src={igniteLogo} width={130} height={52} alt="" />
      </Link>

      <HeaderIcon>
        <Handbag size={24} color="#C4C4CC" />
        {/* <div>1</div> */}
      </HeaderIcon>
    </Container>
  );
}
