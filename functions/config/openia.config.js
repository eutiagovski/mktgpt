const { Configuration, OpenAIApi } = require("openai");
require

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

module.exports = openai = new OpenAIApi(configuration);
