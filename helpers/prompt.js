const funcPrompt = (properties) => {
    const prompt = require('prompt');

    prompt.start();

    prompt.get(properties, (err, result) => {
        if (err) { return onErr(err); }
        console.log(result);
    });
};

module.exports = { funcPrompt };