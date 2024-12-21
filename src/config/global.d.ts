import { IRouter } from '../services/router.service';

type QuerySelector = (
  this: Document | HTMLElement,
  args: string
) => Element | HTMLElement | null;

type QuerySelectorAll = (
  this: Document | HTMLElement,
  args: string
) => NodeListOf<Element>;

type AddEventListener = <K extends keyof WindowEventMap>(
  this: Window | Document | HTMLElement,
  event: K,
  listener: (
    this: Window | Document | HTMLElement,
    ev: WindowEventMap[K]
  ) => void,
  options?: AddEventListenerOptions | boolean
) => void;

type RemoveEventListener = <K extends keyof WindowEventMap>(
  this: Window | Document | HTMLElement,
  event: K,
  listener: (
    this: Window | Document | HTMLElement,
    ev: WindowEventMap[K]
  ) => void,
  options?: EventListenerOptions | boolean
) => void;

declare global {
  interface HasDomUtils {
    $: QuerySelector;
    $$: QuerySelectorAll;
    on: AddEventListener;
    off: RemoveEventListener;
  }

  // eslint-disable-next-line
  interface Document extends HasDomUtils { }

  // eslint-disable-next-line
  interface HTMLElement extends HasDomUtils { }

  interface Window extends HasDomUtils {
    _app: {
      router: IRouter;
    };
  }

  declare let $: (args: string) => Element | null;
  declare let $$: (args: string) => NodeListOf<Element>;
}

export type {
  QuerySelector,
  QuerySelectorAll,
  AddEventListener,
  RemoveEventListener
};
