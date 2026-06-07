import { TerminalController } from './controllers/TerminalController.js';

async function main() {
    const controller = new TerminalController();

    await controller.executar();
}

main();