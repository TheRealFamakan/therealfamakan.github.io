const articleTranslations = {
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
