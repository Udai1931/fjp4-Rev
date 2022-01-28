function helpFn(){
    console.log(`List of all available commands:
        1. node main.js help = help command
        2. node main.js organize <Path>
        3. node main.js tree <Path>`);
}

module.exports = {
    helpFunction : helpFn
}