# Persian Date Picker

A beautiful, responsive Persian (Jalali) date picker with smooth animations and a simple, user-friendly interface. Perfect for web forms where users need to select birth dates or other dates.

---

## Features

- Select Persian (Jalali) date with day, month, and year dropdowns  
- Display selected Persian date in the input field  
- Automatically convert Persian date to Gregorian (Miladi) format for backend use  
- Responsive design for mobile and desktop  
- Smooth open/close animations  
- Modern styling using Tailwind CSS and custom CSS  
- Uses the `persian-date` library for accurate date calculations

---

## Requirements

- Modern web browser supporting HTML5, CSS3, and JavaScript  
- Internet connection for loading jQuery and persian-date from CDN (or include them locally)

---

## Project Files

- `index.html` — sample usage page  
- `datepicker.css` — custom styles for the date picker  
- `datepicker.js` — JavaScript logic for date picking and conversion

---

## Usage

1. Include the CSS and JS files in your project (or link the CDN versions).  
2. Add an input element with the ID `birth_date` to your page.  
3. Load the JavaScript files.  
4. Use the `toggleDatePicker()` function to open or close the date picker.  
5. The selected Persian date is displayed in the visible input, and the Gregorian date is saved in a hidden input (`birth_date_hidden`).

---

## Simple HTML Example

```html
<input type="text" id="birth_date" readonly onclick="toggleDatePicker()" placeholder="Select your birth date" />
<input type="hidden" id="birth_date_hidden" />
