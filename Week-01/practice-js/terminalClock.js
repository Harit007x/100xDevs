// Data dictionary for mapping hours back to 12 hour format
const mapping = {
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
    
    const format_12 = `${hours > 12 ? mapping[hours]: hours}:${minutes}:${seconds}`
    const format_24 = `${hours}:${minutes}:${seconds}`;
    
    const time = timeFormat == '12' ? format_12  : format_24;
    console.log("Cozy clock - ", time)
}

// For updating the clock every second
setInterval(cozyClock, 1000);

// Start the clock
cozyClock()