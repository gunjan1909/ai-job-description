/*const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const completion = await openai.createCompletion({
  model: "text-davinci-003",
  prompt: `Write a job description for a  ${jobTitle} role 
          ${industry ? `in the ${industry} industry` : ""} that is around ${
            numWords || 200
          } words in a ${tone || "neutral"} tone. ${
            keyWords ? `Incorporate the following keywords: ${keyWords}.` : ""
          }. The job position should be described in a good way, highlighting featres and benefits.`,
});*/

/*The requests are sent to the following endpoint: https://api.openai.com/v1/engines/text-davinci-003/completions 
Here the text-davinci-003 is the model for the ChatGPT, and completions is the task we want to perform.*/

const generateDescription = async ({
  jobTitle,
  industry,
  keyWords,
  tone,
  numWords,
}) => {
  try {
    const response = await fetch(
      "https://api.openai.com/v1/engines/text-davinci-003/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          prompt: `Write a job description for a  ${jobTitle} role 
          ${industry ? `in the ${industry} industry` : ""} that is around ${
            numWords || 200
          } words in a ${tone || "neutral"} tone. ${
            keyWords ? `Incorporate the following keywords: ${keyWords}.` : ""
          }. The job position should be described in a good way, highlighting featres and benefits.`,
          /* The job position should be described in a way that is SEO friendly, highlighting its unique features and benefits.`,*/
          max_tokens: 300,
          //The temperature specifies the sampling temperature to use. Higher values means the model will take more risks. For example, 0.9 will be best for more creative applications, and 0 (argmax sampling) for the ones with a well-defined answer.
          temperature: 0.5,
        }),
      }
    );
    console.log("hello", response);
    const data = await response.json();
    console.log(data);
    return data.choices[0].text;
  } catch (err) {
    console.error(err);
  }
};

export default async function handler(req, res) {
  const { jobTitle, industry, keyWords, tone, numWords } = req.body;

  const jobDescription = await generateDescription({
    jobTitle,
    industry,
    keyWords,
    tone,
    numWords,
  });

  console.log(jobDescription);

  res.status(200).json({
    jobDescription,
  });
}
