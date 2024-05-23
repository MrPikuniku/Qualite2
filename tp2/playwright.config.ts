import type {PlaywrightTestConfig} from "@playwright/test";

const config : PlaywrightTestConfig = {
    webServer: {
        // Si php installé sur le poste
        command: 'cd src && php -S localhost:8000',
        // Sinon si docker 
        command: 'docker compose up',
        url: 'http://localhost:8000',
        reuseExistingServer: true,
        timeout: 2_000
    }
};



















