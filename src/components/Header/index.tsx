import Link from 'next/link';
import Image from 'next/image';

import * as RadixDialog from '@radix-ui/react-dialog';

import { Container, HeaderIcon } from '@/styles/components/header';

import igniteLogo from '@/assets/logo-ignite.svg';
import { Handbag } from 'phosphor-react';
import { Dialog } from '../Dialog';
import useCart from '@/hooks/useCart';

export function Header() {
  const { cart } = useCart();

  return (
    <Container>
      <Link href="/">
        <Image
          src={igniteLogo}
          width={130}
          height={52}
          alt=""
          // priority={false}
        />
      </Link>

      <RadixDialog.Root>
        <RadixDialog.Trigger asChild>
          <HeaderIcon>
            <Handbag size={24} color="#C4C4CC" />
            {cart.length > 0 && <div>{cart.length}</div>}
          </HeaderIcon>
        </RadixDialog.Trigger>

        <Dialog />
      </RadixDialog.Root>
    </Container>
  );
}
