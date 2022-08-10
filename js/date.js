const dateContainer = document.querySelector('.utility__date');

const dayOfTheWeekEn = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const monthEn = ['January', 'February', 'March', 'April', 'May', 'June', 'Jule', 'August', 'September', 'October', 'November', 'December'];

const dayOfTheWeekRu = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
const monthRu = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

const formatDate = (date, dayOfTheWeek, month) => {
    const day = date.getDay();

    let dd = date.getDate();
    if (dd < 10) dd = '0' + dd;

    const mm = date.getMonth() + 1;
  
    const yy = date.getFullYear();
  
    return dayOfTheWeek[day] + ', ' + dd + ' ' + month[mm - 1] + ', ' + yy;
}

$(document).ready(() => {
    if (location.href.match('/?lang=ru')) {
        const currentDate = formatDate(new Date, dayOfTheWeekRu, monthRu);
        dateContainer.textContent = '';
        dateContainer.append(currentDate);
    } else {
        const currentDate = formatDate(new Date, dayOfTheWeekEn, monthEn);
        dateContainer.append(currentDate);
    }
});
