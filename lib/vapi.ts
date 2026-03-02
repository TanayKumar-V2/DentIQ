import Vapi from '@vapi-ai/web'

const publicKey =
  process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY ?? process.env.NEXT_PUBLIC_VAPI_API_KEY;

if (!publicKey) {
  throw new Error(
    "Missing Vapi public key. Set NEXT_PUBLIC_VAPI_PUBLIC_KEY (preferred) or NEXT_PUBLIC_VAPI_API_KEY.",
  );
}

export const vapi = new Vapi(publicKey);
