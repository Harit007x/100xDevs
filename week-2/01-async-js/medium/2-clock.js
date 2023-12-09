// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

// Data dictionary for mapping hours back to 12 hour format
const mapping = {
    '00': '12',
    '13': '1',
    '14': '2',
    '15': '3',
    '16': '4',
    '17': '5',
    '18': '6',
    '19': '7',
    '20': '8',
    '21': '9',
    '22': '10',
    '23': '11',
    '24': '12',
}

const timeFormat = '12'
const cozyClock = () => {
    const now = new Date();
    const hours = now.getHours().toString().length == 1 ? "0" + now.getHours().toString() : now.getHours().toString()
    const minutes = now.getMinutes().toString().length == 1 ? "0" + now.getMinutes().toString() : now.getMinutes().toString()
    const seconds = now.getSeconds().toString().length == 1 ? "0" + now.getSeconds().toString() : now.getSeconds().toString()
    
    const format_12 = `${(hours > 12 || hours == '00') ? mapping[hours] : hours}:${minutes}:${seconds} ${hours == '00' || hours < 12 ? 'AM' : 'PM'}`
    const format_24 = `${hours == '00' ? '12' : hours}:${minutes}:${seconds}`;
    
    const time = timeFormat == '12' ? format_12  : format_24;
    
    console.log(`12 hour formate = ${format_12} | 24 hour formate = ${format_24}`)
}

// For updating the clock every second
setInterval(cozyClock, 1000);

// Start the clock
cozyClock()