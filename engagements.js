/**
 * Engagements — apercu2.html
 *
 * Modifier UNIQUEMENT ce fichier pour corriger un texte, un lien,
 * ou ajouter un nouveau carré. Le HTML se met à jour tout seul.
 *
 * Pour ajouter un carré, copier un bloc { ... } dans le tableau `engagements`.
 *
 * Liens (le libellé se choisit selon `type`) :
 *   "video"       → « Visionner ma capsule vidéo »  (Facebook)
 *   "communique"  → « Voir mon communiqué »         (communiqué de SP, PDF local)
 *   "parti"       → « En savoir plus »              (communiqué du Parti)
 *
 * Dès que la plateforme officielle est en ligne, changer uniquement
 * `plateformeUrl` ci-dessous.
 */
window.SPST = {
  plateformeUrl: "https://pq.org/",

  engagements: [
    {
      tag: "Intégrité",
      title: "Fin du gaspillage et du copinage",
      text: "Gouverner avec rigueur, constance et respect de la parole donnée.",
      links: [
        { type: "video", href: "https://www.facebook.com/share/v/1J6UbzWWjy/" },
        { type: "video", href: "https://www.facebook.com/share/r/1B3ABrTLZq/" },
        { type: "communique", href: "assets/communique-gaspillage-caquiste.pdf" }
      ]
    },
    {
      tag: "Agriculture",
      title: "Centre d'innovation agroalimentaire",
      text: "Appui au Centre d'innovation et d'entrepreneuriat agroalimentaire, pour que notre technopole rayonne.",
      links: [
        { type: "video", href: "https://www.facebook.com/share/v/19PbuU7rAK/" },
        { type: "communique", href: "assets/communique-technopole-agroalimentaire.pdf" }
      ]
    },
    {
      tag: "Économie",
      title: "Moins d'impôts, moins de paperasse",
      text: "Réduction des impôts et de la paperasse pour toutes les PME.",
      links: [
        { type: "video", href: "https://www.facebook.com/share/v/1FHivFphkW/" }
      ]
    },
    {
      tag: "Logement",
      title: "Logement et accès à la propriété",
      text: "Un accès amélioré au logement et à la propriété pour les familles de la région.",
      links: [
        { type: "parti", href: "https://pq.org/nouvelles/le-parti-quebecois-presente-son-plan-dacces-a-la-propriete/" }
      ]
    },
    {
      tag: "Immigration",
      title: "Révision responsable des seuils d'immigration",
      text: "Un modèle viable pour accueillir les immigrants.",
      links: [
        { type: "parti", href: "https://pq.org/nouvelles/le-parti-quebecois-promet-une-baisse-significative-des-seuils-dimmigration/" }
      ]
    },
    {
      tag: "Santé",
      title: "Soins de santé décentralisés",
      text: "Décentralisation des soins de santé pour de meilleurs services.",
      links: [
        { type: "parti", href: "https://pq.org/nouvelles/le-parti-quebecois-abolira-sante-quebec-afin-de-reinvestir-largent-dans-des-soins-directs-a-la-population/" }
      ]
    },
    {
      tag: "Éducation",
      title: "Un grand chantier en éducation",
      text: "Donner aux jeunes une chance égale de réussir et tenir des États généraux sur l'avenir de l'éducation.",
      links: [
        { type: "parti", href: "https://pq.org/nouvelles/un-gouvernement-du-parti-quebecois-lancera-cinq-grands-chantiers-en-education/" }
      ]
    },
    {
      tag: "Souveraineté",
      title: "Souveraineté québécoise",
      text: "La voix du Québec pour défendre ses propres intérêts.",
      links: [
        { type: "video", href: "https://www.facebook.com/share/v/1GSNqGGN75/" }
      ]
    },
    {
      tag: "Agriculture",
      title: "Meilleur soutien pour nos agriculteurs",
      text: "Des investissements et des mesures à la hauteur de l'importance et de la vitalité de nos producteurs.",
      links: [
        { type: "parti", href: "https://pq.org/nouvelles/le-parti-quebecois-sengage-a-investir-un-minimum-de-450-millions-de-dollars-en-agriculture-et-presente-un-plan-costaud-pour-les-producteurs-agricoles/" }
      ]
    },
    {
      tag: "Aînés",
      title: "Reconnaissance et autonomie pour nos aînées et aînés",
      text: "Placer nos bâtisseurs au cœur de nos priorités en leur redonnant les moyens de leur autonomie.",
      links: [
        { type: "parti", href: "https://pq.org/nouvelles/le-parti-quebecois-presente-son-plan-pour-le-soutien-a-domicile-des-aines/" }
      ]
    },
    {
      tag: "Coût de la vie",
      title: "Baisse du coût de la vie et lutte à la pauvreté",
      text: "Investir et mettre en place des mesures là où les besoins se trouvent.",
      links: [
        { type: "parti", href: "https://pq.org/nouvelles/le-parti-quebecois-va-detaxer-les-biens-et-les-voitures-usages-pour-retourner-des-milliers-de-dollars-dans-le-portefeuille-des-familles/" },
        { type: "parti", href: "https://pq.org/nouvelles/le-parti-quebecois-va-investir-100-millions-de-dollars-supplementaire-pour-financer-laide-et-la-securite-alimentaire/" },
        { type: "parti", href: "https://pq.org/nouvelles/le-parti-quebecois-sattaque-a-la-hausse-du-cout-de-lessence-en-reduisant-les-taxes-et-en-offrant-un-remboursement-aux-menages-les-moins-nantis/" }
      ]
    },
    {
      tag: "Économie",
      title: "Bâtir une économie forte",
      /* Sous-titre non fourni : repris du communiqué lié, à ajuster au besoin. */
      text: "Une baisse d'impôt significative de près de 20 % pour les PME québécoises.",
      links: [
        { type: "parti", href: "https://pq.org/nouvelles/le-parti-quebecois-offre-une-baisse-dimpot-significative-de-pres-de-20-aux-pme-quebecoises/" }
      ]
    }
  ]
};
