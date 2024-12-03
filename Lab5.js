let day = "sunday"

let message;
// when you have multi conditions then switch is more preferrable

switch (day) {
    case "monday":
        message = "its a monday blue"
        break;
    case "wednesday":
        message = "middle of week"
        break;
    case "sunday":
        message = "this is sunday"
        break;
    default:
        break;
}

console.log(message);

// let hour = 13 => Good Afternoon
// let hour = 5 => Good morning
// >= and <= and && operators well