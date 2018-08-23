'use strict';

import * as vscode from 'vscode';
import { Range } from 'vscode';

export function permute(sortingFun: Function): void {
    let editor = vscode.window.activeTextEditor;
    if (!editor) {
        return; // No open text editor
    }

    let selections = editor.selections;
    selections.sort((a, b) => (a.start.line < b.start.line ? -1 : (a.start.line === b.start.line ? (a.start.character < b.start.character ? -1 : 1) : 1)));
    editor.edit(editBuilder => {
        let permuted = sortingFun(selections, (e: vscode.Selection) => (editor ? editor.document.getText(e).toLowerCase() : ''));
        selections.forEach((s, i) => {
            let range = new Range(s.start, s.end);
            if (editor) {
                editBuilder.replace(range, editor.document.getText(permuted[i]));
            }
        });
    });
}