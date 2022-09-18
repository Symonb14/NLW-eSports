export function convertHourStringToMinutes(hourString: String){
    const [hours, minutes] = hourString.split(':').map(Number)

    const numberAmount = (hours * 60) + minutes;

    return numberAmount;
}