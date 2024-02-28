// ==UserScript==
// @name        Twitch Default Sort by Viewer Count
// @namespace   https://github.com/adeFuLoDgu/Auto-Claim-Twitch-Channel-Point
// @version     0.1
// @description Set default sort to viewer count on Twitch directory pages.
// @author      adeFuLoDgu
// @match     	*://*.twitch.tv/directory/category/*
// @updateURL   https://github.com/adeFuLoDgu/Auto-Claim-Twitch-Channel-Point/raw/main/AutoTwitchPoint.user.js
// @downloadURL https://github.com/adeFuLoDgu/Auto-Claim-Twitch-Channel-Point/raw/main/AutoTwitchPoint.user.js
// @run-at      document-end
// @grant       none
// ==/UserScript==

(function() {
    'use strict';
    // default Sort on Game Directory from High to Low
    let url = window.location.href;
    if(url.indexOf("?sort=VIEWER_COUNT") == -1) {
        url += "?sort=VIEWER_COUNT";
        window.location.href = url;
    }
})();
