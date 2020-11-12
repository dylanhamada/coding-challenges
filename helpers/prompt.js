const funcPrompt = (properties) => {
    const prompt = require('prompt');

    prompt.start();

    prompt.get(properties, (err, result) => {
        if (err) { return onErr(err); }
        return result;
    });
};

module.exports = { funcPrompt };