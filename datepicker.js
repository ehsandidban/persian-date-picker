const overlay = document.getElementById("overlay");
const datepicker = document.getElementById("datepicker-container");
const input = document.getElementById("birth_date");

const toggleDatePicker = () => {
    if (!datepicker.classList.contains("open")) {
        openDatePicker();
    } else {
        closeDatePicker();
    }
};

const openDatePicker = () => {
    if (window.innerWidth >= 768) {
        const rect = input.getBoundingClientRect();
        datepicker.style.position = "absolute";
        // datepicker.style.top = `${rect.bottom + window.scrollY + 8}px`;
        // datepicker.style.left = `${rect.left + window.scrollX}px`;
        datepicker.style.width = `${rect.width}px`; // ...
    } else {
        datepicker.style.position = "fixed";
        datepicker.style.left = "";
        datepicker.style.top = "";
        datepicker.style.width = "100%";
    }
    overlay.classList.add("open");
    datepicker.classList.add("open");
};


const closeDatePicker = () => {
    overlay.classList.remove("open");
    datepicker.classList.remove("open");
};

const yearSelect = document.getElementById("year-select");
const monthSelect = document.getElementById("month-select");
const daySelect = document.getElementById("day-select");
const monthNames = ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"];

const today = new persianDate();
const currentYear = today.year();
const currentMonth = today.month();
const currentDay = today.date();

for (let y = currentYear; y >= currentYear - 100; y--) {
    const opt = document.createElement("option");
    opt.value = y;
    opt.textContent = y;
    yearSelect.appendChild(opt);
}

for (let m = 1; m <= 12; m++) {
    const opt = document.createElement("option");
    opt.value = m;
    opt.textContent = monthNames[m - 1];
    monthSelect.appendChild(opt);
}

const updateDays = () => {
    const year = parseInt(yearSelect.value);
    const month = parseInt(monthSelect.value);
    const daysInMonth = new persianDate([year, month]).daysInMonth();
    const previousDay = parseInt(daySelect.value) || 1;
    daySelect.innerHTML = "";
    for (let d = 1; d <= daysInMonth; d++) {
        const opt = document.createElement("option");
        opt.value = d;
        opt.textContent = d;
        daySelect.appendChild(opt);
    }
    if (previousDay <= daysInMonth) {
        daySelect.value = previousDay;
    } else {
        daySelect.value = daysInMonth;
    }
};

yearSelect.value = currentYear;
monthSelect.value = currentMonth;
updateDays();
daySelect.value = currentDay;

yearSelect.addEventListener("change", updateDays);
monthSelect.addEventListener("change", updateDays);

function persianToEnglishNumbers(input) {
    const persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    const englishNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let output = input;
    for (let i = 0; i < persianNumbers.length; i++) {
        output = output.replace(new RegExp(persianNumbers[i], 'g'), englishNumbers[i]);
    }
    return output;
}

const confirmDate = () => {
    const y = parseInt(yearSelect.value);
    const m = parseInt(monthSelect.value);
    const d = parseInt(daySelect.value);

    const pDate = new persianDate([y, m, d]);
    const formattedPersianDate = `${y}/${m.toString().padStart(2, "0")}/${d.toString().padStart(2, "0")}`;

    // تبدیل به میلادی و فرمت مناسب
    const gregorianDate = pDate.toCalendar('gregorian').format("YYYY-MM-DD");

    const gregorianDateEn = persianToEnglishNumbers(gregorianDate);
    console.log("تاریخ میلادی:", gregorianDateEn);

    document.getElementById("birth_date").value = formattedPersianDate;
    document.getElementById("birth_date_hidden").value = gregorianDateEn;

    console.log("تاریخ شمسی:", formattedPersianDate);

    closeDatePicker();
};