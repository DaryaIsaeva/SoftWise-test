import './date.js';
import { addTimer } from './timer.js';
import './translate-page.js';

$(document).ready(function() {
    alert('Page loaded successfully');
    setTimeout(() => {
        window.location.href = 'http://google.com';
    }, 10000);
    addTimer();
});