'use strict';

import * as vscode from 'vscode';

export function sortDesc(selections: vscode.Selection[], getStringFun: Function) {
    let sorted = [...selections];
    sorted.sort((a: vscode.Selection, b: vscode.Selection) => (getStringFun(a) < getStringFun(b) ? -1 : 1));
    return sorted;
}