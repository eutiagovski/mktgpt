const { createParser } = require("eventsource-parser");
const functions = require("firebase-functions");
const openiaConfig = require("./config/openia.config");

exports.chat = functions
  .region("southamerica-east1")
  .https.onCall(async (data, context) => {
    try {
      const { prompt } = data;

      if (!prompt) {
        return new Response("No prompt in the request", { status: 400 });
      }

      const res = await openiaConfig.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
        temperature: 1,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        max_tokens: 1000,
        stream: false,
        n: 1,
      });

      const { content } = res.data.choices[0].message;

      return { status: 200, content: content };
    } catch (e) {
      console.log(e);
      return { status: 200, message: "" };
    }
  });
