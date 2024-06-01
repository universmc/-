const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();
const dev = require("./index")

const borderCharsPV = {
    topLeft: '╔',
    topRight: '╗',
    bottomLeft: '╚',
    bottomRight: '╝',
    horizontal: '═',
    vertical: '║',
    intersectionLeft: '╠',
    intersectionRight: '╣',
    intersectionTop: '╦',
    intersectionBottom: '╩',
    intersectionCross: '╬',
  };



  
async function main() {

    const ctx = `[context.json]
    `
    const chatCompletion = await groq.chat.completions.create({

    "messages": [
      {role: "assistant",name:"[📔.codex]", content:"phase[01]:[RUN]:[brainstorming(session.timestamp)]"},
      {role: "assistant",name:"[📔.codex]", content:"phase[01-2]:[RUN]:[chargement des elements du dossier /srv ? si Oui Rédigez le développement de la réponse au format HTML section par section de page en page dans /build/html/`)]"},
      {role: "user",name:"[🌴.Groq]", content:`groq index.html`},
      //  {role: "user",name:"[🌴.Groq]", content: "groq`[📔.codex]`+`BorderChars`framWork.response" },rédige-moi un bilan de la faire en fonction du contenu 
      //  {role: "user",name:"[🌴.Groq]", content: BorderChars },
  //  {role: "assistant",name:"[💬.cloudQuantum]", content:"[start]:Trainning mode}"},
  //  {role: "user",name:"[🌴.Groq]", content: "`groq`" },
  //  {role: "assistant",name:"[📔.codex]", content:"phase[01]:[RUN]:[dial:conversation(message/response)entre(user/assistant))]"},
  //  {
  //    "role": "system",
  //    "content": "[zira]",
  //  },
  //  {
  //    "role": "user",
  //    "content": "[content]:template.response",
  //  },
  //  {
  //    "role": "assistant",
  //    "content": "groq response",
  //  },
  //  {role: "assistant",name:"[📔.codex]", content:"phase[01]:[END]:[brainstorming(session.timestamp)]"},
  //  {role: "system",name:"[📔.codex]", content:"`systemContent` genetation de la documention et traduction de la documentation en lang:Fr, Français:stp!"},
  //  {role: "system",name:"[🌌.systemDream]", content:"groq"},
    ],
    model: "mixtral-8x7b-32768",
    temperature: 0.5,
    max_tokens: 2024,
    top_p: 1,
    stop: null,
    stream: false
}).then((chatCompletion)=>{
    const htmlContent = chatCompletion.choices[0]?.message?.content;
    const outputFilePath = "Journaliste1_" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".html";
    fs.writeFileSync(outputFilePath, htmlContent);
    console.log("Documentation du contructor généré et enregistré dans " + outputFilePath);
});
}

main();