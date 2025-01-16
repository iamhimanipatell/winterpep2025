function createMessage(defaultMessage, ...names) {
    return names.map(name => `${defaultMessage}, ${name}!`);
}

const messages = createMessage("heyyyy ", "henlo", "chestha", "ludwick");
console.log(messages);  