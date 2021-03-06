function tConvert (time) {

	let intTime = parseInt(String(time).split(':').join(''));

	if (intTime > 600 && intTime < 945){

		return `${time} AM`
	}

	if (intTime == 2400){
		return `12:00 AM`
	}

	if (intTime == 2430){
		return `12:30 AM`
	}

  // Check correct time format and split into components
  time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

  if (time.length > 1) { // If time format correct
    time = time.slice (1);  // Remove full string match value
    time[5] = +time[0] < 12 ? ' AM' : ' PM'; // Set AM/PM
    time[0] = +time[0] % 12 || 12; // Adjust hours

  }

  return time.join (''); // return adjusted time or original string
}




// AM, PM Define
const convertTime = (time) => {
	let hour = (time.split(':'))[0]
	let min = (time.split(':'))[1]
	let part = hour > 12 ? 'AM' : 'PM';
	
	min = (min+'').length === 1 ? `0${min}` : min;
	hour = hour > 12 ? hour - 12 : hour;
	hour = (hour+'').length === 1 ? `0${hour}` : hour;
	
	return (`${hour}:${min} ${part}`)
	}
