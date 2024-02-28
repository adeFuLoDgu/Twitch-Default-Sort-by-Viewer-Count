// ==UserScript==
// @name        Twitch Default Sort by Viewer Count
// @namespace   https://github.com/adeFuLoDgu/Twitch-Default-Sort-by-Viewer-Count
// @version     0.1
// @description Set default sort to viewer count on Twitch directory pages.
// @author      adeFuLoDgu
// @match     	*://*.twitch.tv/directory/category/*
// @updateURL   https://github.com/adeFuLoDgu/Twitch-Default-Sort-by-Viewer-Count/raw/main/TwitchDefaultSortbyViewerCount.user.js
// @downloadURL https://github.com/adeFuLoDgu/Twitch-Default-Sort-by-Viewer-Count/raw/main/TwitchDefaultSortbyViewerCount.user.js
// @run-at      document-end
// @grant       none
// ==/UserScript==

(function() {
    'use strict';
    let url = window.location.href;
    if(url.indexOf("?sort=VIEWER_COUNT") == -1) {
        url += "?sort=VIEWER_COUNT";
        window.location.href = url;
    }
})();
