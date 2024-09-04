// 今日の日付をハイライトし、月と年を表示
function highlightToday() {
    const today = new Date();
    const dateElements = document.querySelectorAll('.date');
    const monthYear = document.getElementById('month-year');
    
    // 月と年を表示
    const monthNames = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
    monthYear.textContent = `${monthNames[today.getMonth()]} ${today.getFullYear()}年`;

    // 今日の日付をハイライト
    dateElements.forEach(dateElement => {
        if (parseInt(dateElement.textContent) === today.getDate()) {
            dateElement.classList.add('today');
        }
    });
}

highlightToday();
