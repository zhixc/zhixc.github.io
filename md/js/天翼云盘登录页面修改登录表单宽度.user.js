// ==UserScript==
// @name         天翼云盘登录页面修改登录表单宽度并删除多余元素
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  天翼云盘登录页面修改登录表单的宽度为1400px，并删除多余元素
// @author       chatGPT
// @match        https://cloud.189.cn/web/login.html
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 等待页面加载完成
    window.addEventListener('load', function() {
        // 获取class为login-form的div元素并修改宽度
        let loginForm = document.querySelector('.login-form');
        if (loginForm) {
            loginForm.style.width = '1400px';
        }

        // 删除class为behind-content的div元素
        let behindContent = document.querySelector('.behind-content');
        if (behindContent) {
            behindContent.remove();
        }
    });
})();
