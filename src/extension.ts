'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { reverse } from './reverse';
import { sortAsc } from './sort_asc';
import { sortDesc } from './sort_desc';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json

    context.subscriptions.push(reverse());
    context.subscriptions.push(sortAsc());
    context.subscriptions.push(sortDesc());
}

// this method is called when your extension is deactivated
export function deactivate() {
}

