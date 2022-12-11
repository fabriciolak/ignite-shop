import Image from 'next/image';

import * as RadixDialog from '@radix-ui/react-dialog';

import {
  DialogOverlay,
  DialogContent,
  DialogClose,
  DialogTitle,
  DialogFooter,
  DialogContentItens,
  DialogItem,
} from '@/styles/components/dialog';
import { X } from 'phosphor-react';

export function Dialog() {
  return (
    <RadixDialog.Portal>
      <DialogOverlay />

      <DialogContent>
        <header>
          <DialogClose>
            <X size={24} color="#8D8D99" />
          </DialogClose>

          <DialogTitle>Sacola de compras</DialogTitle>
        </header>

        <DialogContentItens>
          <DialogItem>
            <div className="dialog-item-image">
              <Image
                src="https://s3-alpha-sig.figma.com/img/387d/13ce/de131bd1ccf9bbe6b2331e88d3df20cd?Expires=1671408000&Signature=d8ZNjwOiXM7GPVMMJdtTqCvtf9C7gCYYf3fsNZoo034DTFotoIBxSDuRcbPp8U5kO2aar8BDXfZIbiEuILWFaaOUont1JO65YaWnY4lojeKVPixGh3Ok8OZjak3gzrwC~IA0XNbLb1Jn45XaCfjWqf4Iy4q-5bLZDYrbqsJLNfTtE0-gpQmNfvkaZR~bl6F-c6NHK5pKwhHvPF15c2YzhRubFAjzLkY8LCcWcl9Df9FiC-baS7CwBYJMvz6s8oTTjNaz9sDId-JCvKVxgwGKKpM7sxHbummkI9P3a1tNAFrIIKo2zPalv23B7dwQPhALI1PphEB29jgfWJAtPNDuYA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                alt=""
                width={94}
                height={94}
              />
            </div>
            <div className="dialog-item">
              <div className="dialog-item-content">
                <p>Camiseta Beyond the Limits</p>
                <span>R$ 79,90</span>
              </div>

              <button>Remover</button>
            </div>
          </DialogItem>
        </DialogContentItens>

        <DialogFooter>
          <ul>
            <li className="product-quantity">
              <span>Quantidade</span>3 itens
            </li>
            <li className="product-total">
              <span>Valor total</span>R$ 270,00
            </li>
          </ul>
          <button>Finalizar compra</button>
        </DialogFooter>
      </DialogContent>
    </RadixDialog.Portal>
  );
}
