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

// or
/**
 * import * as $ from 'jquery';
 * declare module 'jquery';
 */

//  or
/**
 * import * as $ from 'jquery';
 * npm install @types/jquery --save-dev
 */
