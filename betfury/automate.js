// ==UserScript==
// @name         BetFury Loss Streaks - Automation
// @namespace    https://github.com/t12crypto/javascript
// @version      1.0
// @author       t12ung
// @description  Track Max Loss Streaks / Safety settings / automation
// @match        https://betfury.io/inhouse/dice
// @match        https://betfury.io/inhouse/limbo
// @icon         https://betfury.io/_nuxt/img/logo.ed2d7e8.svg
// @updateURL    https://raw.githubusercontent.com/t12crypto/javascript/main/betfury/automate.js
// @grant        none
// @require      https://code.jquery.com/jquery-2.1.2.min.js
// @require      https://unpkg.com/papaparse@latest/papaparse.min.js
// ==/UserScript==


var gameConfig = {
    dice: {
        token: "bfg",
        bet: {
            bfg: 0.00000001,
            bnb: 0.00000001,
            usdt: 0.00000001
        },
        lossIncrease: 41,
        multiplier: 3.5,
        order: 1,
        winClass: "in",
        multiplierEl: '.controls__prediction span:last-child',
        multiplierRemove: 'x',
        statsAppendEl: 'div.game-board div.controls',
        statsCss: 'right:0;bottom:-2em;'
    },
    limbo: {
        token: "bnb",
        bet: {
            bfg: 0.00000001,
            bnb: 0.00000022,
            usdt: 0.00000135
        },
        lossIncrease: 41,
        multiplier: 3.5,
        order: 0,
        winClass: "last-results__item_2",
        multiplierEl: '.auto-stop__input',
        statsAppendEl: 'div.limbo__body',
        statsCss: 'top:3em;left:50%;transform:translate(-50%);white-space:nowrap;'
    }
};
