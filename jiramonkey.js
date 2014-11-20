// ==UserScript==
// @include     https://safari.atlassian.net/*
// @name         JIRAcolor
// @namespace    http://safariflow.com/
// @version      0.1
// @description  Modifies JIRA color scheme
// @author       sokolov
// @match        http://tampermonkey.net/index.php?version=3.9&ext=dhdg&updated=true
// @grant        public domain
// ==/UserScript==

var css = ".aui-header a.aui-nav-link{color:#960;} a{color:#960}";
var head = document.getElementsByTagName('head')[0];
var style = document.createElement('style');
style.type = "text/css";
style.innerHTML = css;
head.appendChild(style); 
