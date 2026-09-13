/**
 * Engagements — apercu2.html
 *
 * Modifier UNIQUEMENT ce fichier pour corriger un texte, un lien,
 * ou ajouter un nouveau carré. Le HTML se met à jour tout seul.
 *
 * Pour ajouter un carré, copier un bloc { ... } dans le tableau `engagements`.
 *
 * Liens (le libellé se choisit selon `type`, si aucun `title`) :
 *   "video"       → « Visionner ma capsule vidéo »  (Facebook)
 *   "communique"  → « Voir mon communiqué »         (communiqué de SP, PDF local)
 *   "parti"       → « En savoir plus »              (communiqué du Parti)
 *
 * Si `title` est fourni, c'est ce texte qui s'affiche (lien direct).
 *
 * En attendant la plateforme officielle, `plateformeUrl` pointe vers
 * le Projet national. Quand la plateforme sera en ligne : remettre
 * l'URL, et relabeller « Programme » → « Plateforme » dans apercu2.html.
 */
window.SPST = {
  plateformeUrl: "https://pq.org/wp-content/uploads/2026/05/PQ-PROPOSITION-PRINCIPALE-PROJET-NATIONAL-V5-individuel.pdf",

  engagements: [
    {
      tag: "Gouvernance",
      title: "Fin du gaspillage et du copinage",
      text: "Mandat porté par la rigueur, la reddition de comptes et le respect de la parole donnée",
      links: [
        { type: "video", title: "Capsule vidéo", href: "https://www.facebook.com/share/v/1J6UbzWWjy/" },
        { type: "video", title: "Autre capsule", href: "https://www.facebook.com/share/r/1B3ABrTLZq/" },
        { type: "communique", title: "Gaspillage caquiste", href: "assets/communique-gaspillage-caquiste.pdf" },
        { type: "parti", title: "Ménage dans la bureaucratie", href: "https://pq.org/nouvelles/un-gouvernement-du-parti-quebecois-lancera-un-grand-menage-dans-la-bureaucratie-afin-de-recentrer-letat-sur-ses-missions-fondamentales/" },
        { type: "parti", title: "Reddition de comptes", href: "https://pq.org/nouvelles/le-parti-quebecois-offre-une-baisse-dimpot-significative-de-pres-de-20-aux-pme-quebecoises/" }
      ]
    },
    {
      tag: "Agriculture",
      title: "Innovation agroalimentaire",
      text: "Appui au Centre d'innovation et d'entrepreneuriat agroalimentaire, pour le rayonnement de notre technopole",
      links: [
        { type: "video", title: "Capsule vidéo", href: "https://www.facebook.com/share/v/19PbuU7rAK/" },
        { type: "communique", title: "Technopole agroalimentaire", href: "assets/communique-technopole-agroalimentaire.pdf" }
      ]
    },
    {
      tag: "Logement",
      title: "Accès au logement et à la propriété",
      text: "Un accès amélioré au logement et à la propriété pour les familles de la région.",
      links: [
        { type: "video", title: "Capsule vidéo", href: "https://www.facebook.com/share/r/14oXoDZ5hKf/" },
        { type: "parti", title: "Plan d'accès à la propriété", href: "https://pq.org/nouvelles/le-parti-quebecois-presente-son-plan-dacces-a-la-propriete/" }
      ]
    },
    {
      tag: "Immigration",
      title: "Révision responsable des seuils d'immigration",
      text: "Un modèle viable pour accueillir les immigrants.",
      links: [
        { type: "parti", title: "Baisse des seuils d'immigration", href: "https://pq.org/nouvelles/le-parti-quebecois-promet-une-baisse-significative-des-seuils-dimmigration/" }
      ]
    },
    {
      tag: "Santé",
      title: "Soins de santé décentralisés",
      text: "Abolition de Santé Québec pour des soins directs à la population",
      links: [
        { type: "parti", title: "Premier volet du plan Santé", href: "https://pq.org/nouvelles/le-parti-quebecois-abolira-sante-quebec-afin-de-reinvestir-largent-dans-des-soins-directs-a-la-population/" }
      ]
    },
    {
      tag: "Éducation",
      title: "Refonte du système d'éducation",
      text: "Une chance égale de réussir pour tous les jeunes et tenue d'États généraux sur l'avenir de l'éducation",
      links: [
        { type: "parti", title: "Cinq grands chantiers en éducation", href: "https://pq.org/nouvelles/un-gouvernement-du-parti-quebecois-lancera-cinq-grands-chantiers-en-education/" }
      ]
    },
    {
      tag: "Culture",
      title: "Valoriser la culture québécoise",
      text: "Une culture accessible pour les jeunes et un meilleur accompagnement des artistes",
      links: [
        { type: "parti", title: "Découvrabilité et investissements", href: "https://pq.org/nouvelles/le-parti-quebecois-sengage-a-favoriser-lacces-des-jeunes-a-la-culture-quebecoise-et-a-mieux-accompagner-les-artistes-du-quebec/" }
      ]
    },
    {
      tag: "Souveraineté",
      title: "Affirmation nationale",
      text: "La voix du Québec pour défendre ses propres intérêts.",
      links: [
        { type: "video", href: "https://www.facebook.com/share/v/1GSNqGGN75/" }
      ]
    },
    {
      tag: "Agriculture",
      title: "Soutien accru pour les producteurs et productrices agricoles",
      text: "Des investissements et des mesures concrètes pour celles et ceux qui nous nourrissent",
      links: [
        { type: "parti", title: "Plan pour l'agriculture", href: "https://pq.org/nouvelles/le-parti-quebecois-sengage-a-investir-un-minimum-de-450-millions-de-dollars-en-agriculture-et-presente-un-plan-costaud-pour-les-producteurs-agricoles/" }
      ]
    },
    {
      tag: "Aînés",
      title: "Reconnaissance pour les aînées et aînés",
      text: "Nos bâtisseuses et bâtisseurs au cœur de nos priorités en leur redonnant les moyens de leur autonomie",
      links: [
        { type: "parti", title: "Plan de soutien à domicile", href: "https://pq.org/nouvelles/le-parti-quebecois-presente-son-plan-pour-le-soutien-a-domicile-des-aines/" }
      ]
    },
    {
      tag: "Coût de la vie",
      title: "Baisse du coût de la vie et lutte à la pauvreté",
      text: "Un plan concret pour les familles, la classe moyenne, les jeunes et les moins nantis",
      links: [
        { type: "parti", title: "Taxe réduite sur les biens usagés", href: "https://pq.org/nouvelles/le-parti-quebecois-va-detaxer-les-biens-et-les-voitures-usages-pour-retourner-des-milliers-de-dollars-dans-le-portefeuille-des-familles/" },
        { type: "parti", title: "Soutien à la sécurité alimentaire", href: "https://pq.org/nouvelles/le-parti-quebecois-va-investir-100-millions-de-dollars-supplementaire-pour-financer-laide-et-la-securite-alimentaire/" },
        { type: "parti", title: "Répit pour les automobilistes", href: "https://pq.org/nouvelles/le-parti-quebecois-sattaque-a-la-hausse-du-cout-de-lessence-en-reduisant-les-taxes-et-en-offrant-un-remboursement-aux-menages-les-moins-nantis/" }
      ]
    },
    {
      tag: "Économie",
      title: "Développement et essor économique",
      text: "Moins d'impôts, moins de règles, plus de place pour nos entrepreneurs",
      links: [
        { type: "parti", title: "Baisses d'impôts pour les PME", href: "https://pq.org/nouvelles/le-parti-quebecois-offre-une-baisse-dimpot-significative-de-pres-de-20-aux-pme-quebecoises/" }
      ]
    }
  ]
};
