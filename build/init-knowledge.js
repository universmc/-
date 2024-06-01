const path = require("path"); // Ajouté pour utiliser path.join
const Groq = require("groq-sdk");
const groq = new Groq();
const fs = require('fs');

async function main() {

    const chatCompletion = await groq.chat.completions.create({
      "messages": [
      {role: "assistant",name:"[📔.codex]", content:"phase[01]:[RUN]:[initialisation(project)"},
      {role: "system",name:"[🌌.systemDream]", content: 
      `{
        "project": {
          "administrator":"Μιχαήλ",
          "title": "univers-mc avec Pi.ia",
          "objectives": ["Créer Plate-forme https://univers-mc.cloud/", Aux intelligence artificielle à la machine Learning au développement des techniques d'apprentissage automatique grâce aux approche métaphysique et au calcul quantique, "gestion du sallon Telegram","gestion du système version sur GitHub", "Intégrer l'IA pi.ia", "Promouvoir sur les réseaux sociaux"],
          "target": "Utilisateurs intéressés par l'IA,la Machine Learning et le développement web",
          "features": [
            "Page Web interactive",
            "Galerie d'images et vidéos",
            "passion d'instance avec la machine Learning",
            "Démonstrations d'algorithmes AI",
            "Intégration avec les réseaux sociaux"
          ],
          "technologiesFrontennd": ["HTML", "CSS","sass","json","JavaScript","svg","xml","ascii"],
          "technologiesbackend": ["php", "json", "sql"],
          "technologiesIa": ["groq-sqk", "tensorflowjs", "kerrasjs","pi.ia"],
          "apiRest": ["python","swagger", "Nodejs","eletron"],
          "worldPress": ["https://wp.univers-mc.cloud"],
          "website": ["https://univers-mc.cloud"],
          "Youtube": ["https://www.youtube.com/@univers-mc"],
          "snapchat": ["@universmc6"],
          "instagram": ["https://www.instagram.com/univers.mc/"],
          "whatapp": ["https://web.whatsapp.com/#universmc6"],
          "github": ["https://github.com/universmc/*"],
          "PibotTelegram": ["https://t.me/PyArcade_bot"],
          "Mand_finetTelegram": ["https://t.me/Mandiant_bot"],
          "ChatRoomTelegram": ["https://t.me/+T-Ke-T_exEQzY2Zk"],
          "Blockchain": ["https://github.com/universmc/*"],
          "coin": ["umctokens.sol"],
          "SmartContract": ["https://github.com/universmc/*"],
          "schedule": {
            "startDate": "2024-05-26",
            "endDate": "2025-31-31",
            "schedule": {
              "startDate": "2024-05-26",
              "endDate": "2025-01-01",
              "phases": [
                { 
                  "phaseID":"1",
                  "title": "Phase de conception",
                  "description": "Documenter les idées et les plans pour le projet",
                  "keyTasks": ["Création de siteWeb, Création application Web, Création de table/diagrammes de Gantt,Création de contenu automatisé sur la base du knwoledge base Topic", "Rédaction de spécifications"],
                  "startDate": "2024-05-26",
                  "endDate": "2025-01-01"
                },
                {
                  "phaseID":"2",
                  "title": "Phase de configuration",
                  "description": "Configuration de l'environnement de travail et installation des outils nécessaires",
                  "keyTasks": ["Installation de packages", "Configuration de l'environnement"],
                  "startDate": "2024-05-26",
                  "endDate": "2025-01-01"
                },
                {
                  "phaseID":"3",
                  "title": "Création de la page About.html style.css script.js groq-min.js",
                  "description": "Création d'une page 'À propos' pour le portfolio",
                  "keyTasks": ["Intégration de contenu", "Styling"],
                  "startDate": "2024-05-26",
                  "endDate": "2025-01-01"
                },
                { 
                  "phaseID":"4",
                  "title": "Session de brainstorming avec GitHub",
                  "description": "Planification et organisation du projet avec GitHub",
                  "keyTasks": ["Création de dépôts", "Collaboration"],
                  "technologies": ["GitHub", "Markdown"],
                  "startDate": "2024-05-26",
                  "endDate": "2025-01-01"
                },
                {
                  "phaseID":"5",
                  "title": "Mise à jour des compétences IA",
                  "description": "Apprentissage et intégration de techniques d'IA",
                  "keyTasks": ["Apprentissage des techniques", "Intégration dans le projet"],
                  "technologies": ["TensorFlow", "groq-sdl","kerras"],
                  "startDate": "2024-05-26",
                  "endDate": "2025-01-01"
                },
                {
                  "phaseID":"6",
                  "title": "Gestion des scripts Frontend et Backend",
                  "description": "Gestion et itération sur les scripts",
                  "keyTasks": ["Gestion de code", "Intégration des scripts"],
                  "technologies": ["React", "Express"],
                  "startDate": "2024-05-26",
                  "endDate": "2025-01-01"
                },
                {
                  "phaseID":"7",
                  "title": "Test et débogage",
                  "description": "Test du code et résolution de problèmes",
                  "keyTasks": ["Exécution de tests", "Résolution de bugs"],
                  "technologies": ["Jest", "Debugger"],
                  "startDate": "2024-05-26",
                  "endDate": "2025-01-01"
                },
                {
                  "phaseID":"8",
                  "title": "Validation et documentation",
                  "description": "Validation du travail et documentation des fonctionnalités",
                  "keyTasks": ["Vérification de la qualité", "Création de documentation"],
                  "technologies": ["Google Docs", "Markdown"],
                  "startDate": "2024-05-26",
                  "endDate": "2025-01-01"
                },
                {
                  "phaseID":"9",
                  "title": "Système de contribution et promotion",
                  "description": "Développement de systèmes d'affiliation et de promotion",
                  "keyTasks": ["Création de liens d'affiliation", "Publication sur les réseaux sociaux"],
                  "technologies": ["Social Media APIs","Facebook","Snapchat","Instagram","WhatsApp","YouTube","télégram","TikTok","Affiliate & contribution Marketing Tools"],
                  "startDate": "2024-05-26",
                  "endDate": "2025-01-01"
                }
              ]}
            },
            "responsibilities": {
              "administrator":["chef de projet", "inventeur", "concepteur" "IA","fondateur"],
              "Frontend Developer": ["Conception", "Développement Frontend"],
              "Backend Developer": ["Développement Backend", "Intégration AI"],
              "Testeur": ["Test", "Validation"],
              "Graphiste": ["Design"]
            }
          }
        }`
        
      },
      {role: "assistant",name:"[📔.codex]", content:"phase[02]:[RUN]:[DevOps(project.response)"},
      {role: "user",name:"[🌴.Μῖκος.ia]", content: "Rédigez une première version en respose au message dans de cette instance groq-sdk `Project` pour rendre le contenu plus dynamique la présentation nous intégrons intéraction des dial:[💬$messages].emoji-picker entre le role:user(moi-meme) et role:assistant ledit [📔.codex] posant des questions($?) afin de rendre l'instance plus dynamique, en plus nous ajouterons une base de donnée [🤖.emoji]=(https://emojis.sh)!" },
      {role: "assistant",name:"[📔.codex]", content:"phase[03]:[RUN]:[DevOps(project.plan d'action)"},
      {role: "system",name:"[🌌.systemDream]", content: "merci role:system"},
      {role: "user",name:"[🌴.Μῖκος.ia]", content: "Rédiger la présentation du Project et le plan d'action étape par étape en fonction des différentes phases du project 'univers-mc avec Pi.ia'"},
      
        // trainning ascii interface response
  
  
      //  {role: "assistant",name:"[📔.codex]", content:"phase[01]:[RUN]:[dial:conversation(message/response)entre(user/assistant))]"},
      //  {
      //    "role": "system",
      //    "content": "[zira]"
      //  },
      //  {
      //    "role": "user",
      //    "content": "[content]:template.response"
      //  },
      //  {
      //    "role": "assistant",
      //    "content": "groq response"
      //  },
      //  {role: "assistant",name:"[📔.codex]", content:"phase[01]:[END]:[brainstorming(session.timestamp)]"},
      //  {role: "system",name:"[📔.codex]", content:"`systemContent` genetation de la documention et traduction de la documentation en lang:Fr, Français:stp!"},
      //  {role: "system",name:"[🌌.systemDream]", content:"groq"},
      ],
      model: "mixtral-8x7b-32768",
      temperature: 0.6,
      max_tokens: 4096,
      top_p: 1,
      stop: null,
      stream: false
  }).then((chatCompletion)=>{
      const mdContent = chatCompletion.choices[0]?.message?.content;
      const outputFilePath = "init-Works_" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".md";
      fs.writeFileSync(outputFilePath, mdContent);
      console.log("Documentation du contructor généré et enregistré dans " + outputFilePath);
  });
  }
  
  main();