import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export async function generateImage(prompt) {
  const response = await openai.createImage({
    prompt,
    n: 1,
    size: "1024x1024",
  });
  return response.data.data[0].url;
}

export async function checkGrammar(prompt) {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt,
    temperature: 0,
    max_tokens: 60,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  });
  console.log(response);
  return response.data.choices[0].text;
}
