// YOUR CODE BELOW


const defaultGreet = (firstName, lastName ) => {
    if (lastName === undefined) {
        return `Hi ${firstName} Doe!`;
    } else {
        return `Hi ${firstName} ${lastName}!`;
    }
}