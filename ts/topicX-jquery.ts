/**
 * ----------------------------
 * adding jquery to typescript
 * ---------------------------
 */
declare var $: any;

//  OR
declare var $: {
    (selector: string): any
}
// or
declare type JQuery = any;
declare var $: JQuery;