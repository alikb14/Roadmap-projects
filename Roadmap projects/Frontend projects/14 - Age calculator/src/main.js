import datepicker from "js-datepicker";
import { DateTime } from "luxon";
import 'js-datepicker/dist/datepicker.min.css'
const submitBtn = document.getElementById('calculate')
const result = document.querySelector('.result')
const dateInput = document.getElementById('date-input')
const container = document.querySelector('.input-container')

// Insert the calendar
const picker = datepicker('#date-input', {
    maxDate: new Date(),
    customDays: ['Su', 'Mo', 'Te', 'We', 'Tu', 'Fr', 'Sa']
})

function calculateAge() {
    const selectedDate = picker.dateSelected
    // Check if a date selected
    if (!selectedDate) {
        result.style.marginTop = '20px'
        result.style.color = 'red'
        result.textContent = 'Please enter a valid date'
        return
    }
    // Reset text color if there was an error earlier
    result.style.color = 'black'

    // Calculating the age using the Loxun package
    const selected = DateTime.fromJSDate(selectedDate)
    const now = DateTime.now()
    const diff = now.diff(selected, ["years", "months", "days"]).toObject()

    result.style.marginTop = '20px'

    // Setting the result text
    if (diff.years <= 0) {
        result.textContent = `You are ${diff.months} ${diff.months < 2 ? 'month' : 'months'} and ${Math.floor(diff.days)} days`
    } else {
        result.textContent = `You are ${diff.years} ${diff.years < 2 ? 'year' : 'years'} 
    ${diff.months} ${diff.months < 2 ? 'month' : 'months'}`
    }

}

submitBtn.addEventListener('click', calculateAge)
dateInput.addEventListener('focus', () => result.textContent = '')

