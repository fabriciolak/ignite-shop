import Link from 'next/link';
import Image from 'next/image';

import * as RadixDialog from '@radix-ui/react-dialog';

import { Container, HeaderIcon } from '@/styles/components/header';

import igniteLogo from '@/assets/logo-ignite.svg';
import { Handbag } from 'phosphor-react';
import { Dialog } from '../Dialog';

export function Header() {
  return (
    <Container>
      <Link href="/" as="/">
        <Image src={igniteLogo} width={130} height={52} alt="" priority />
      </Link>

      <RadixDialog.Root>
        <RadixDialog.Trigger asChild>
          <HeaderIcon>
            <Handbag size={24} color="#C4C4CC" />
            {/* <div>1</div> */}
          </HeaderIcon>
        </RadixDialog.Trigger>

        <Dialog />
      </RadixDialog.Root>
    </Container>
  );
}
