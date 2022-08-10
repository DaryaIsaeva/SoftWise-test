const dateContainer = document.querySelector('.utility__date');

const dayOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const month = ['January', 'February', 'March', 'April', 'May', 'June', 'Jule', 'August', 'September', 'October', 'November', 'December'];

const currentDate = new Date;

const formatDate = (date) => {
    const day = date.getDay();

    let dd = date.getDate();
    if (dd < 10) dd = '0' + dd;

    const mm = date.getMonth() + 1;
  
    const yy = date.getFullYear();
  
    return dayOfTheWeek[day] + ', ' + dd + ' ' + month[mm - 1] + ', ' + yy;
}

const newDate = formatDate(currentDate);

dateContainer.append(newDate);