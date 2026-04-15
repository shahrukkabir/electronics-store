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
