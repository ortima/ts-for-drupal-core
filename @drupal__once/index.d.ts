declare global {
  /* Generics support */
  function once<T extends HTMLOrSVGElement>(id: string, selector: Array<T>|T, context?:Document|Element): Array<T>
  function once<T extends HTMLElement|SVGAElement>(id: string, selector: NodeListOf<T>, context?:Document|Element): Array<T>
  function once<T extends keyof HTMLElementTagNameMap>(id: string, selector: T, context?:Document|Element): Array<HTMLElementTagNameMap[T]>
  function once<T extends keyof SVGElementTagNameMap>(id: string, selector: T, context?:Document|Element): Array<SVGElementTagNameMap[T]>
  /* Default */
  function once(id: string, selector: NodeList|Array<Element>|Element|string|null, context?:Document|Element): Array<Element|HTMLElement>
  /* jQuery support */
  function once(id: string, selector: JQuery<HTMLElement>, context?:Document|Element): Array<Element|HTMLElement>
  namespace once {
    /* Generics support */
    function remove<T extends HTMLOrSVGElement>(id: string, selector: Array<T>|T, context?:Document|Element): Array<T>
    function remove<T extends HTMLElement|SVGAElement>(id: string, selector: NodeListOf<T>, context?:Document|Element): Array<T>
    function remove<T extends keyof HTMLElementTagNameMap>(id: string, selector: T, context?:Document|Element): Array<HTMLElementTagNameMap[T]>
    function remove<T extends keyof SVGElementTagNameMap>(id: string, selector: T, context?:Document|Element): Array<SVGElementTagNameMap[T]>
    function filter<T extends HTMLOrSVGElement>(id: string, selector: Array<T>|T, context?:Document|Element): Array<T>
    function filter<T extends HTMLElement|SVGAElement>(id: string, selector: NodeListOf<T>, context?:Document|Element): Array<T>
    function filter<T extends keyof HTMLElementTagNameMap>(id: string, selector: T, context?:Document|Element): Array<HTMLElementTagNameMap[T]>
    function filter<T extends keyof SVGElementTagNameMap>(id: string, selector: T, context?:Document|Element): Array<SVGElementTagNameMap[T]>
    /* Default */
    function remove(id: string, selector: NodeList|Array<Element>|Element|string|null, context?:Document|Element): Array<Element|HTMLElement>
    function filter(id: string, selector: NodeList|Array<Element>|Element|string|null, context?:Document|Element): Array<Element|HTMLElement>
    function find(id: string, context?:Document|Element): Array<Element|HTMLElement>
    /* jQuery support */
    function remove(id: string, selector: JQuery<HTMLElement>, context?:Document|Element): Array<Element|HTMLElement>
    function filter(id: string, selector: JQuery<HTMLElement>, context?:Document|Element): Array<Element|HTMLElement>
  }
}

export type {}