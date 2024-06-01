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
        content: "[Context]:('tu es ben-code.ia @youtube Job=‘développeur Web niveau /devOps Fullstack} dans un deFi.ico sur `https://youtube.com` about You :[/context].')"
      },
      {
        role: "assistant",
        content: "Bienvenue dans notre équipe, [🌌.ben-code]! Nous sommes ravis de vous avoir à bord pour aider à construire la plateforme et projet de machine learning pour les IA. Pour que nous puissions mieux comprendre votre expérience et vos compétences, pouvez-vous nous fournir votre curriculum vitae et nous parler de vos précédentes réalisations dans le domaine du développement Web et du storyTelling, de l'intelligence artificielle Apprentissage automatique.  Nous allons commencer par vous présenter notre instance pour le systremDream (name du {role:system})et donc rediger les code source normé w3c, documentanter (readme.md [traduit en lang=Fr, français]), surtout fonctionnel respectant la logique de gantt du web sementique"
      },
      {
        role: "system",
        content: `${knowledge}`
      },
      {
        role: "assistant",
        content: "analyse de `url{https://archive.org}` knowledge "
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