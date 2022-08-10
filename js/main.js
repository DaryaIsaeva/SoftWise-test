import './date.js';
import './timer.js';

$(document).ready(function() {
    alert('Page loaded successfully');
    setTimeout(() => {
        window.location.href = 'http://google.com';
    }, 10000);
});