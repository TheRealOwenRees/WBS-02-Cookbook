var date = new Date();
var year = date.getFullYear();
document.getElementById('curYr').innerHTML = year;


const popover1 = new bootstrap.Popover('.index-popover1',  {
    container: 'body'
})
const popover2 = new bootstrap.Popover('.index-popover2', {
    container: 'body'
})
const popover3 = new bootstrap.Popover('.index-popover3', {
    container: 'body'
})