declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";
declare module "*.css";

declare module 'react-dom/client' {
  import type { ReactNode } from 'react';

  export interface Root {
    render(children: ReactNode): void;
    unmount(): void;
  }

  export interface RootOptions {
    identifierPrefix?: string;
    onRecoverableError?: (error: unknown) => void;
  }

  export function createRoot(
    container: Element | DocumentFragment,
    options?: RootOptions,
  ): Root;
}

interface ImportMetaEnv {
  readonly VITE_EMAILJS_CONTACT_SERVICE_ID: string;
  readonly VITE_EMAILJS_CONTACT_TEMPLATE_ID: string;
  readonly VITE_EMAILJS_CONTACT_PUBLIC_KEY: string;
  readonly VITE_EMAILJS_ORDER_SERVICE_ID: string;
  readonly VITE_EMAILJS_ORDER_TEMPLATE_ID: string;
  readonly VITE_EMAILJS_ORDER_PUBLIC_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
