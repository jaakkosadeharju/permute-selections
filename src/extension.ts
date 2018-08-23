'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { permute } from './permute';
import { reverse } from './reverse';
import { sortAsc } from './sort_asc';
import { sortDesc } from './sort_desc';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json

    context.subscriptions.push(vscode.commands.registerCommand('extension.reverseSelections', () => {
        permute(reverse);
    }));
    context.subscriptions.push(vscode.commands.registerCommand('extension.sortSelectionsAsc', () => {
        permute(sortAsc);
    }));
    context.subscriptions.push(vscode.commands.registerCommand('extension.sortSelectionsDesc', () => {
        permute(sortDesc);
    }));
}

// this method is called when your extension is deactivated
export function deactivate() {
}

