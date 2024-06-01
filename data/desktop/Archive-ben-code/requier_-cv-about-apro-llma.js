const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();

async function main() {
  let systemContent = "Bienvenue dans notre équipe, [🌌.systemDream]! Nous sommes ravis de vous avoir à bord pour aider à construire la plateforme et projet de machine learning pour les IA. Pour que nous puissions mieux comprendre votre expérience et vos compétences, pouvez-vous nous fournir votre curriculum vitae et nous parler de vos précédentes réalisations dans le domaine du développement Web et du storyTelling, de l'intelligence artificielle Apprentissage automatique.  Nous allons commencer par vous présenter notre instance pour le systremDream (name du {role:system})et donc rediger les code source normé w3c, documentanter (readme.md [traduit en lang=Fr, français]), surtout fonctionnel respectant la logique de gantt du web sementique";

  const knowledge = `url{https://benjamin-code-s-school.teachable.com/}`

  const chatCompletion = await groq.chat.completions.create({
    "messages": [
        {
            role: "system",
            content: "[Context]:('tu es ben-code.ia @youtube Job=‘développeur Web niveau /devOps Fullstack} dans un deFi.ico sur `https://youtube.com` about You :')"
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
            content: "analyse de `url{https://archive}` knowledge "
          },
          {
            role: "user",
            content: `pour le SEO de ce site rédige-moi une liste de 2555 #_hashtag En Rapport Ses Compétences IA`
          },
          {
            role: "assistant",
            content: "la liste doit correspondre avec le au {format .json aux normes W3C} seo.json"
          },
    ],
    model: "llama3-70b-8192",
    temperature: 0.6,
    max_tokens: 2048,
    top_p: 1,
    stop: null,
    stream: false
}).then((chatCompletion)=>{
    const jsonContent = chatCompletion.choices[0]?.message?.content;
    const outputFilePath = "data/ben-code-SEO_" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".json";
    fs.writeFileSync(outputFilePath, jsonContent);
    console.log("Documentation du contructor généré et enregistré dans " + outputFilePath);
});
}

main();