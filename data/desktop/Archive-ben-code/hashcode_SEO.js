const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();
const OpenAI = require("openai");

const openai = new OpenAI();
const knowledge = `url{https://benjamin-code-s-school.teachable.com/}`

async function main() {
  const completion = await openai.chat.completions.create({

    messages: [

      {
        role: "system",
        content: "[Context]:('tu es ben-code.ia @youtube Job=‘développeur Web niveau /devOps Fullstack} dans un deFi.ico sur `https://youtube.com` about You : Je suis Benjamin Code, développeur frontend avec plus de 10 ans d'expérience et YouTuber depuis plus de 5 ans. J'ai réuni sur ma chaîne une formidable communauté de plus de 100'000 devs et apprentis.De nombreuses fois il m'a été demandé de créer des ressources pour apprendre vu que sur ma chaîne j'essaie de rester plus proche du divertissement autour du code. C'est sur ce site que vous trouverez du contenu plus pédagogique.')"
      },
      {
        role: "system",
        content: `${knowledge}`
      },
      {
        role: "assistant",
        content: "analyse de `url{https://archive.org}` knowledge "
      },
      {
        role: "user",
        content: `pour le SEO de ce site rédige-moi une liste de [X11] #_hashtag En Rapport aux potentiels IA`
      },
    ],
    model: "gpt-3.5-turbo",
    temperature: 0.9,
    max_tokens: 4096,
    }).then((chatCompletion)=>{
    const mdContent = chatCompletion.choices[0]?.message?.content;
    const outputFilePath = "ben-gpt_" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".md";
    fs.writeFileSync(outputFilePath, mdContent);
    console.log("Documentation du contructor généré et enregistré dans " + outputFilePath);
});
}

main();