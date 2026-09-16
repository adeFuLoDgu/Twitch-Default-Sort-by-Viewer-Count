// ==UserScript==
// @name        Twitch Default Sort by Viewer Count
// @namespace   https://github.com/adeFuLoDgu/Twitch-Default-Sort-by-Viewer-Count
// @version     0.5
// @description Set default sort to viewer count on Twitch directory pages.
// @author      adeFuLoDgu
// @match     	*://*.twitch.tv/*
// @updateURL   https://github.com/adeFuLoDgu/Twitch-Default-Sort-by-Viewer-Count/raw/main/TwitchDefaultSortbyViewerCount.user.js
// @downloadURL https://github.com/adeFuLoDgu/Twitch-Default-Sort-by-Viewer-Count/raw/main/TwitchDefaultSortbyViewerCount.user.js
// @run-at      document-start
// @grant       none
// ==/UserScript==

(function() {
    "use strict";

    setInterval(() => {
        const url = new URL(window.location.href);

        if (
            url.pathname.includes("/directory") &&
            !url.searchParams.has("sort") &&
            !url.pathname.includes("/videos") &&
            !url.pathname.includes("/clips") &&
            !url.pathname.includes("/following")
        ) {
            url.searchParams.set("sort", "VIEWER_COUNT");
            window.location.href = url.toString();
        }
    }, 1000);
})();
