// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand(
    "compscigen.generate",
    async () => {
      let three = await vscode.window.showInputBox({
        prompt: "What was the hardest part?",
      });
      let four = await vscode.window.showInputBox({
        prompt: "Was there anything interesting or tricky?",
      });
      await vscode.commands.executeCommand("editor.action.formatDocument");
      let submission =
        "<ol><li>None.</li><li><pre>" +
        vscode.window.visibleTextEditors[0].document.getText() +
        "</pre></li><li>" +
        three +
        "</li><li>" +
        four +
        "</li></ol>";
      await vscode.env.clipboard.writeText(submission);
      vscode.window.showInformationMessage("Submission copied to clipboard.");
    }
  );

  context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
