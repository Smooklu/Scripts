// ==UserScript==
// @name         Indeed Application Statuses Total
// @version      0.1
// @description  Get the totals of application statuses.
// @author       Smooklu
// @match        https://myjobs.indeed.com/applied*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=indeed.com
// @grant        none
// ==/UserScript==

setTimeout(function () {
    "use strict";
    let first_appli = document.getElementsByClassName("atw-AppCard")[0];
    let scratch_elem = document.createElement("div");
    let categories = [
        { color: "red", label: "Not selected", count: 0 },
        { color: "blue", label: "Applied", count: 0 },
        { color: "green", label: "Application viewed", count: 0 },
    ];

    // Set the count of each category and simultaneously get the total.
    let total = categories.reduce((acc, cat) => {
        cat.count = document.getElementsByClassName(
            "atw-StatusTag-description--" + cat.color
        ).length;
        return acc + cat.count;
    }, 0);

    categories.forEach(({ color, label, count }) => {
        const percentage = Math.round((count / total) * 100);
        scratch_elem.innerHTML = `
            <div class='atw-StatusTag atw-StatusTag--${color}'>
                <div class='atw-StatusTag-description atw-StatusTag-description--${color}'>
                    <span>${label}: ${count} (${percentage}%)</span>
                </div>
            </div>`;

        first_appli.parentElement.insertBefore(
            scratch_elem.firstElementChild,
            first_appli
        );
    });
}, 2000);
