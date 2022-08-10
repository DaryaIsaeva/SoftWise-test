const $title = $('.utility__title h2');
const $mainText = $('.utility__text');
const $advantagesItems = $('.advantages__item p');
const $downloadItems = $('.download__item');
const $downloadButton = $('.download-button');
const $note = $('.utility__note');
const $timer = $('.utility__timer');

$(document).ready(() => {
    if (location.href.match('/?lang=en')) {
        $title.text();
        $mainText.text();
        $advantagesItems.text();
        $downloadItems.text();
        $downloadButton.text();
        $note.text();
        $timer.html();
    };

    if (location.href.match('/?lang=ru')) {
        $title.text('Ускорьте ваш мобильный телефон на 50% одним касанием!');
        $mainText.text('Magic Cleaner — это приложение для ускорения вашего телефона и оптимизации производительности. Он полностью использует все специальные возможности для полной и надежной остановки ненужного процесса запуска приложений в фоновом режиме.');
        $($advantagesItems[0]).text('Очистите память и сделайте телефон быстрее!');
        $($advantagesItems[1]).text('Увеличьте память за секунды');
        $($advantagesItems[2]).text('Помимо остановки запущенного приложения');
        $($downloadItems[0]).text('Нажмите кнопку «Скачать» и установите Magic Cleaner прямо сейчас!');
        $($downloadItems[1]).text('Откройте приложение и наслаждайтесь!');
        $downloadButton.text('Скачать');
        $note.text('100% бесплатно');
        $timer.html(`У вас есть <span>10</span> секунд, чтобы воспользоваться этим предложением!`);
    };
});