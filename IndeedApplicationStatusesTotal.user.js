// ==UserScript==
// @name         Indeed Application Statuses Total
// @version      0.1
// @description  Get the totals of application statuses.
// @author       Smooklu
// @match        https://myjobs.indeed.com/applied*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=indeed.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    setTimeout(function () {
    let apd = document.createElement('div')
    let bpd = document.createElement('div')
    let cpd = document.createElement('div')
    let a = document.createElement('div')
    let b = document.createElement('div')
    let c = document.createElement('div')
    let as = document.createElement('span')
    let bs = document.createElement('span')
    let cs = document.createElement('span')
    a.appendChild(as)
    b.appendChild(bs)
    c.appendChild(cs)
    a.className = "atw-StatusTag-description atw-StatusTag-description--red"
    b.className = "atw-StatusTag-description atw-StatusTag-description--blue"
    c.className = "atw-StatusTag-description atw-StatusTag-description--green"
    apd.appendChild(a)
    bpd.appendChild(b)
    cpd.appendChild(c)
    let applied_status_applis = document.getElementsByClassName('atw-StatusTag-description--blue').length
    let not_selected_applis = document.getElementsByClassName('atw-StatusTag-description--red').length
    let appli_viewed = document.getElementsByClassName('atw-StatusTag-description--green').length
    let total_applis = applied_status_applis + not_selected_applis + appli_viewed
    let n_s_a_percent = Math.round(( not_selected_applis / total_applis) * 100)
    let a_s_a_percent = Math.round(( applied_status_applis / total_applis) * 100)
    let a_v_percent = Math.round(( appli_viewed / total_applis) * 100)
    apd.children[0].children[0].innerText = 'Not selected: ' + not_selected_applis + ' (' + n_s_a_percent.toString() + "%)"
    bpd.children[0].children[0].innerText = 'Applied: ' + applied_status_applis + ' (' + a_s_a_percent.toString() + "%)"
    cpd.children[0].children[0].innerText = 'Application viewed: ' + appli_viewed + ' (' + a_v_percent.toString() + "%)"
    apd.className = "atw-StatusTag atw-StatusTag--red"
    bpd.className = "atw-StatusTag atw-StatusTag--blue"
    cpd.className = "atw-StatusTag atw-StatusTag--green"
    let imp_div = document.getElementsByClassName('atw-Updates')[0].children[0]
    let first_appli = document.getElementsByClassName('atw-AppCard')[0]
    imp_div.insertBefore(apd, first_appli)
    imp_div.insertBefore(bpd, first_appli)
    imp_div.insertBefore(cpd, first_appli)
}, 2000)
})();
