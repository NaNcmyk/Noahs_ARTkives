// enable bootstrap tooltips everywhere
const tooltips = document.querySelectorAll('[data-bs-toggle="tooltip"]');

let tooltipTriggerList = [].slice.call(tooltips);
let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});