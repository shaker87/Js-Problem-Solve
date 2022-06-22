     // convert time 12 to 24 hour

     const convertTime12to24 = (time12h) => {
        const [time, modifier] = time12h.split(' ');
      
        let [hours, minutes] = time.split(':');
      
        if (hours === '12') {
          hours = '00';
        }
      
        if (modifier === 'PM') {
          hours = parseInt(hours, 10) + 12;
        }

        return `${hours}:${minutes}`;
    }
 

    console.log(convertTime12to24('12:20 PM'))