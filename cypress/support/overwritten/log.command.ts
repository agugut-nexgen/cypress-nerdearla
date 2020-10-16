type debugLevel = 'INFO' | 'DEBUG';
/* eslint-disable @typescript-eslint/no-use-before-define */
// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Cypress {
    interface Chainable {
        logInfo: typeof logInfo;
        logDebug: typeof logDebug;
    }
}
/**
 * Log information with the level 'INFO'
 * @param title what we want to log
 * @param args extra options
 */
/* eslint-disable @typescript-eslint/no-explicit-any */
function logInfo(title: string, args: any = null): void {
    const debugLevel: debugLevel = Cypress.env('DEBUG_LEVEL');
    if (debugLevel === 'INFO') {
        cy.log(title, args);
    }
}
/**
 * Log information with the level 'DEBUG'
 * @param title what we want to log
 * @param args extra options
 */
/* eslint-disable @typescript-eslint/no-explicit-any */
function logDebug(title: string, args: any = null): void {
    const debugLevel: debugLevel = Cypress.env('DEBUG_LEVEL');
    if (debugLevel === 'DEBUG') {
        cy.log(title, args);
    }
}
Cypress.Commands.add('logInfo', logInfo);
Cypress.Commands.add('logDebug', logDebug);
