const articleTranslations = {
    'rag-evaluation-score': {
        category: 'Data et IA',
        title: 'Mon premier score d’évaluation RAG était faux : ce que j’ai corrigé',
        meta: 'Publié le 24 octobre 2026 · 5 min de lecture',
        content: `
            <p><a href="https://github.com/TheRealFamakan/RBAC">FinSolve AI</a> est une plateforme RAG d’entreprise avec un contrôle d’accès par rôle. Elle comporte 6 niveaux de rôles et un filtrage des métadonnées au niveau du vector store afin que chaque utilisateur n’accède qu’aux documents autorisés.</p>
            <p>Ma première évaluation comparait des mots-clés. Elle a produit faithfulness 0.26, answer relevancy 0.38, context precision 0.43 et un score global de 35.8 %. Le problème apparaît avec un exemple simple : si la question contient « revenue » et que la réponse utilise « sales turnover », le score tombe à 0 alors que le sens est identique.</p>
            <p>Ce résultat m’a conduit à examiner l’évaluation elle-même avant de tirer des conclusions sur FinSolve AI. Une comparaison de mots-clés mesure la présence des mêmes termes, pas le fait que la réponse exprime la même information. Dans un système RAG, cette différence compte, car une réponse utile peut employer une formulation différente de la question ou de la vérité terrain.</p>
            <h2>Le paramètre de retrieval était aussi incorrect</h2>
            <p>Le script d’évaluation utilisait top_k=3, alors que l’application utilise top_k=5. Le script ne testait donc pas la même configuration de retrieval que l’application. Certaines informations nécessaires pour répondre, comme les chiffres trimestriels du T3, n’étaient pas récupérées. J’ai aligné l’évaluation sur l’application et je suis passé à top_k=5.</p>
            <p>Il s’agissait d’un problème distinct de la méthode de scoring. Même une meilleure mesure de similarité ne peut pas évaluer un contexte que le script n’a jamais récupéré. Je voulais que l’évaluation suive le même parcours de retrieval que l’application, afin que la comparaison porte sur le contexte disponible lors de la génération réelle de la réponse.</p>
            <h2>Garder une langue cohérente</h2>
            <p>Les documents sont en anglais. J’ai donc forcé le modèle à répondre en anglais également. Sans cette contrainte, une perte de similarité cross-lingue pouvait affecter la comparaison, même lorsque la réponse était pertinente par rapport aux documents récupérés et à la vérité terrain.</p>
            <p>Ce changement garde la langue des documents, de la réponse et de la référence cohérente. Il ne modifie pas l’information demandée ; il évite d’ajouter une différence de langue à une mesure censée porter sur la pertinence et le contexte.</p>
            <h2>Passer à la similarité sémantique</h2>
            <p>La correction principale a consisté à remplacer le comptage de mots-clés par une évaluation sémantique fondée sur la similarité cosinus. J’ai utilisé all-MiniLM-L6-v2 pour comparer la réponse à la vérité terrain et aux contextes récupérés. Sur 10 questions de test couvrant 5 rôles, les nouveaux scores sont faithfulness 0.777, answer relevancy 0.930 et context precision 0.838, avec un score global de 84.8 %.</p>
            <p>Le but n’était pas de faire paraître le score meilleur. Il était de rapprocher la comparaison du sens des textes. J’ai aussi gardé le périmètre de l’évaluation explicite : le résultat vient de 10 questions de test couvrant 5 rôles, et non d’une hypothèse selon laquelle toutes les questions ou tous les rôles auraient été mesurés.</p>
            <p><strong>Projet associé :</strong> <a href="../index.html#portfolio">FinSolve AI — Enterprise RAG Platform with RBAC</a>. Le code source est disponible sur <a href="https://github.com/TheRealFamakan/RBAC">GitHub</a>.</p>
            <h2>Limites de ce résultat</h2>
            <p>Le changement de score vient de la méthode d’évaluation, pas d’une amélioration du modèle. Il s’agit d’une évaluation par embeddings, pas d’une évaluation par LLM juge comme dans RAGAS. Le même modèle d’embedding sert au retrieval et à l’évaluation, ce qui favorise les scores. Enfin, 10 questions constituent un petit échantillon : le résultat ne doit pas être considéré comme une mesure complète du système.</p>
            <p>J’en retiens une leçon pratique : une métrique n’a de valeur que si je sais exactement ce qu’elle mesure. Avant de comparer des scores, je dois vérifier la méthode d’évaluation, les paramètres de retrieval, la langue et l’échantillon utilisés pour les produire.</p>
        `
    },
    'reliable-data-pipeline': {
        category: 'Data et IA',
        title: 'Qu’est-ce qui rend un pipeline de données fiable ?',
        meta: 'Publié le 13 août 2026 · 7 min de lecture',
        content: `
            <p>Un pipeline n’est pas fiable simplement parce qu’il s’exécute une fois. Il est fiable lorsque ses résultats restent compréhensibles, testables et récupérables lorsque les données changent.</p>
            <h2>Commencer par des contrats explicites</h2>
            <p>Chaque étape doit rendre visibles ses attentes : colonnes obligatoires, plages acceptées, fuseaux horaires et traitement des valeurs manquantes. Un contrat transforme un problème silencieux en erreur exploitable.</p>
            <h2>Observer le parcours des données</h2>
            <p>Les logs ne sont qu’un début. Une bonne observabilité relie le volume d’entrée, les échecs de validation, le temps de traitement et la fraîcheur des sorties. Lorsqu’un tableau de bord semble incorrect, l’équipe doit pouvoir identifier rapidement l’étape responsable.</p>
            <h2>Prévoir la reprise</h2>
            <p>Les nouvelles tentatives, les points de reprise et les transformations idempotentes rendent la récupération normale plutôt qu’exceptionnelle. L’objectif n’est pas de prétendre que les erreurs n’existeront pas, mais de les rendre simples à comprendre et à corriger.</p>
            <p><strong>Outils associés :</strong> Python, PostgreSQL, SQL, ETL et validation des données.</p>
        `
    },
    'optimization-and-questions': {
        category: 'Mathématiques',
        title: 'Pourquoi l’optimisation ne consiste pas seulement à trouver le minimum',
        meta: 'Publié le 27 août 2026 · 5 min de lecture',
        content: `
            <p>L’optimisation est souvent présentée comme la recherche de la valeur la plus petite ou la plus grande. En pratique, c’est un langage pour prendre des décisions lorsque les ressources sont limitées et que plusieurs objectifs entrent en concurrence.</p>
            <h2>Les contraintes racontent le problème réel</h2>
            <p>Une solution n’a de sens qu’à l’intérieur de ses contraintes. Un itinéraire mathématiquement court peut être impossible à cause de la capacité, du calendrier ou de l’incertitude. Les contraintes ne sont pas un ajout secondaire : elles décrivent le monde que le modèle doit respecter.</p>
            <h2>Les compromis font partie de la réponse</h2>
            <p>De nombreux problèmes n’ont pas de solution parfaite. Améliorer un objectif peut en dégrader un autre. Un bon modèle rend ce compromis visible afin que le décideur puisse choisir consciemment.</p>
            <h2>La question vient avant l’algorithme</h2>
            <p>Avant de choisir une méthode, il faut préciser ce que signifie réussir. Le solveur le plus sophistiqué ne peut pas corriger un objectif qui ne représente pas la décision dont nous avons réellement besoin.</p>
            <p><strong>Notions associées :</strong> programmation linéaire, métaheuristiques, simulation et aide à la décision.</p>
        `
    },
    'does-ai-understand': {
        category: 'Philosophie',
        title: 'Un système intelligent comprend-il vraiment ?',
        meta: 'Publié le 1er septembre 2026 · 6 min de lecture',
        content: `
            <p>Un modèle de langage peut produire une réponse qui semble réfléchie. Cette capacité soulève une question simple en apparence : produire un langage pertinent revient-il à comprendre ?</p>
            <h2>Le sens ne se réduit pas à une séquence</h2>
            <p>Un modèle apprend des régularités entre les mots et leurs contextes. Ces régularités sont très utiles, mais leur utilité ne suffit pas à déterminer s’il existe un point de vue intérieur derrière la réponse.</p>
            <h2>Comprendre implique des conséquences</h2>
            <p>La compréhension humaine est liée à la mémoire, à l’action, au corps et à la responsabilité. Nous ne décrivons pas seulement une situation : nous sommes affectés par elle et nous agissons dans celle-ci. Cette différence compte lorsque nous décidons ce que nous pouvons croire.</p>
            <h2>Une distinction utile</h2>
            <p>Il peut être plus pertinent de distinguer la compréhension fonctionnelle de la compréhension vécue. Un système d’IA peut manipuler suffisamment bien des concepts pour nous aider à raisonner, tout en laissant ouverte la question philosophique de l’expérience.</p>
            <p>Il ne s’agit ni de rejeter la technologie ni de lui attribuer trop vite un statut humain. Il faut continuer à poser des questions précises sur ce que le système fait et sur ce que nous entendons par intelligence.</p>
        `
    }
};

function applyArticleLanguage() {
    if (localStorage.getItem('portfolio-language') !== 'fr') return;

    const slug = window.location.pathname.split('/').pop().replace('.html', '');
    const translation = articleTranslations[slug];
    const article = document.querySelector('.article-shell');
    if (!translation || !article) return;

    article.querySelector('.blog-kicker').textContent = translation.category;
    article.querySelector('.article-header h1').textContent = translation.title;
    article.querySelector('.article-meta').textContent = translation.meta;
    article.querySelector('.article-content').innerHTML = translation.content;
    article.querySelector('.article-back').textContent = 'Retour au blog';
    document.documentElement.lang = 'fr';
    document.title = `${translation.title} - Famakan Camara`;
}

applyArticleLanguage();
