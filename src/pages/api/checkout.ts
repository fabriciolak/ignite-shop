import { NextApiRequest, NextApiResponse } from 'next';
import { stripe } from '@/lib/stripe';

export default async function checkout(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { cart } = req.body;

  const cancelUrl = `${process.env.NEXT_URL}/`;
  const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`;

  const checkoutSession = await stripe.checkout.sessions.create({
    cancel_url: cancelUrl,
    success_url: successUrl,
    mode: 'payment',
    line_items: cart,
  });

  return res.status(201).json({
    checkoutUrl: checkoutSession.url,
  });
}
