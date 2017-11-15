// ==UserScript==
// @name HV Alt
// @match *://hentaiverse.org/*
// @grant none
// @run-at document-start
// ==/UserScript==
if (~location.href.indexOf('https://')) {location.href = location.href.replace("https:\/\/hentaiverse", "http:\/\/alt.hentaiverse");}
else if (~location.href.indexOf('//hentaiverse')){ location.href = location.href.replace("hentaiverse", "alt.hentaiverse"); }