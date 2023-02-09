var date = new Date();
var year = date.getFullYear();
document.getElementById('curYr').innerHTML = year;

// bootstrap popover activation
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))