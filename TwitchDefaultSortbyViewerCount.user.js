// ==UserScript==
// @name        Twitch Default Sort by Viewer Count
// @namespace   https://github.com/adeFuLoDgu/Twitch-Default-Sort-by-Viewer-Count
// @version     0.2
// @description Set default sort to viewer count on Twitch directory pages.
// @author      adeFuLoDgu
// @match     	*://*.twitch.tv/*
// @updateURL   https://github.com/adeFuLoDgu/Twitch-Default-Sort-by-Viewer-Count/raw/main/TwitchDefaultSortbyViewerCount.user.js
// @downloadURL https://github.com/adeFuLoDgu/Twitch-Default-Sort-by-Viewer-Count/raw/main/TwitchDefaultSortbyViewerCount.user.js
// @run-at      document-start
// @grant       none
// ==/UserScript==

(function() {
    'use strict';
    setInterval(() => {
        let url=window.location.href;
        if(url.indexOf("directory/category")!=-1&&url.indexOf("?sort=")==-1&&url.indexOf("/videos")==-1&&url.indexOf("/clips")==-1) {
            url += "?sort=VIEWER_COUNT";
            window.location.href = url;
        }
    }, 1000);
})();
