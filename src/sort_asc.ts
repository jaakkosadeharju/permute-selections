'use strict';

export function sortAsc(selections: any[], getStringFun: Function) {
    let sorted = [...selections];
    sorted.sort((a, b) => (getStringFun(a) < getStringFun(b) ? -1 : 1));
    return sorted;
}