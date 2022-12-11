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
import useCart from '@/hooks/useCart';

export function Dialog() {
  const { cart, totalPayable, removeProductToCart } = useCart();

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
          {cart.map((product) => (
            <DialogItem key={product?.id}>
              <div className="dialog-item-image">
                <Image
                  src={product?.imageUrl}
                  alt={product?.name}
                  width={94}
                  height={94}
                />
              </div>
              <div className="dialog-item">
                <div className="dialog-item-content">
                  <p>{product?.name}</p>
                  <span>{product?.formattedPrice}</span>
                </div>

                <button onClick={() => removeProductToCart(product)}>
                  Remover
                </button>
              </div>
            </DialogItem>
          ))}
        </DialogContentItens>

        <DialogFooter>
          <ul>
            <li className="product-quantity">
              <span>Quantidade</span>
              {cart.length > 1 ? `${cart.length} itens` : `${cart.length} item`}
            </li>
            <li className="product-total">
              <span>Valor total</span>
              {Intl.NumberFormat('pt-br', {
                style: 'currency',
                currency: 'BRL',
              }).format(totalPayable / 100)}
            </li>
          </ul>
          <button>Finalizar compra</button>
        </DialogFooter>
      </DialogContent>
    </RadixDialog.Portal>
  );
}
