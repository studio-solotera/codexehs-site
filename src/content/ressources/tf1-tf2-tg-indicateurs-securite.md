---
titre: "TF1, TF2, TG : calculer et piloter ses indicateurs sécurité sans se tromper"
description: "Formules exactes du taux de fréquence et du taux de gravité (méthode INRS), différence TF1/TF2/TF3, repères de comparaison et limites à connaître."
date: 2026-06-10
grappe: indicateurs-at
type: pilier
produit: registre-at
motCle: "taux de fréquence taux de gravité"
auteur: "Guillaume, Responsable EHS"
---

Le COPIL arrive, la direction veut « le chiffre de la sécurité », et on se retrouve à calculer un taux de fréquence à la main, la veille, sur un coin de tableur — en mélangeant parfois deux formules différentes d’une année sur l’autre. Résultat : un indicateur qu’on ne sait pas vraiment défendre. Les indicateurs d’accidentologie ne sont pas compliqués, mais ils sont **piégeux** : une formule approximative ou un périmètre flottant suffit à rendre une comparaison fausse. Ce guide pose les formules exactes, telles que l’INRS les définit, et explique comment s’en servir sans se tromper.

## TF, TG, IF : trois indicateurs, trois questions différentes

On les cite souvent ensemble, mais ils ne mesurent pas la même chose :

- Le **taux de fréquence (TF)** répond à « à quelle fréquence se blesse-t-on, rapporté au temps de travail ? ».
- Le **taux de gravité (TG)** répond à « combien de temps perd-on à cause des accidents ? ».
- L’**indice de fréquence (IF)** répond à « combien de salariés sont touchés, pour mille ? ».

Les confondre, c’est répondre à une question avec le chiffre d’une autre. Un atelier peut avoir un TF élevé (beaucoup de petits accidents) et un TG faible (arrêts courts), ou l’inverse. C’est précisément l’écart entre les deux qui est intéressant.

## Le taux de fréquence : la formule exacte

La définition de référence est celle de l’INRS. Le taux de fréquence rapporte le nombre d’accidents du travail avec arrêt au nombre d’heures travaillées, pour un million d’heures :

```
TF = (nombre d’AT avec arrêt × 1 000 000) ÷ nombre d’heures travaillées
```

Le million d’heures n’est pas arbitraire : il rend le chiffre lisible et comparable indépendamment de l’effectif. Un TF de 25 signifie 25 accidents avec arrêt par million d’heures travaillées.

Le piège le plus courant est au **dénominateur**. Il faut le nombre d’**heures réellement travaillées**, pas un effectif multiplié par un forfait approximatif. Pour un atelier fictif comme **ProMécanique** (45 salariés à temps plein, 35 h sur 47 semaines effectives), on obtient de l’ordre de 45 × 35 × 47 ≈ 74 000 heures. Avec un accident avec arrêt sur l’année : TF = (1 × 1 000 000) ÷ 74 000 ≈ 13,5. Si l’on prend un dénominateur bricolé (52 semaines au lieu de 47, sans retirer congés et absences), le TF baisse artificiellement — et la comparaison d’une année sur l’autre devient un leurre.

Note utile pour qui lit des chiffres internationaux : la France et de nombreux pays utilisent la base d’un million d’heures, mais **les États-Unis rapportent à 200 000 heures**. Un TF « américain » et un TF « français » ne sont pas comparables tels quels.

## TF1, TF2, TF3 : la différence qui fausse les comparaisons

C’est la confusion qui pollue le plus de tableaux de bord. La formule la plus courante (et celle de la statistique nationale) ne compte que les accidents **avec arrêt** : c’est le **TF1**. Mais beaucoup d’entreprises suivent des variantes :

- **TF1** — accidents du travail **avec arrêt** uniquement. C’est le standard de comparaison.
- **TF2** — **tous les accidents déclarés**, y compris ceux sans arrêt.
- **TF3** — TF2 **plus les accidents bénins** (premiers soins, sans soin médical ni arrêt).

Un TF2 sera mécaniquement plus élevé qu’un TF1 sur le même périmètre. Comparer le TF2 d’un site au TF1 d’un autre, ou au TF1 moyen du secteur, n’a aucun sens. **Règle d’hygiène** : on note toujours quel TF on présente, et on ne compare que des indicateurs de même nature. Un site qui passe discrètement de TF1 à TF2 d’une année sur l’autre « explose » sans qu’aucun accident de plus ne soit survenu.

## L’indice de fréquence : pour mille salariés

L’indice de fréquence répond à une question plus parlante pour une direction : combien de personnes sont touchées ?

```
IF = (nombre d’AT avec arrêt × 1 000) ÷ effectif salarié
```

L’IF est plus intuitif que le TF (« x salariés sur mille ont eu un accident avec arrêt cette année ») mais moins rigoureux pour comparer des structures de durée du travail différentes, puisqu’il ignore les heures réellement travaillées. Les deux se complètent : l’IF pour communiquer, le TF pour comparer.

## Le taux de gravité et l’indice de gravité

Le taux de gravité mesure le temps perdu :

```
TG = (nombre de journées perdues par incapacité temporaire × 1 000) ÷ nombre d’heures travaillées
```

Il s’exprime par millier d’heures (et non par million). Un TG de 0,8 signifie 0,8 journée perdue par millier d’heures travaillées. Le TG capte la sévérité « temporaire » des accidents : beaucoup d’arrêts longs le font grimper.

À ne pas confondre avec l’**indice de gravité (IG)**, qui mesure les **séquelles permanentes** :

```
IG = (somme des taux d’incapacité permanente × 1 000 000) ÷ nombre d’heures travaillées
```

La lecture croisée est riche : un IG élevé avec un TG faible signale des accidents peu nombreux mais aux conséquences irréversibles — un profil de risque très différent de celui d’un atelier qui multiplie les entorses sans séquelle.

## Se comparer : aux bons repères

Un indicateur seul ne dit rien ; c’est sa comparaison qui informe. Trois références utiles :

- **Soi-même dans le temps** : la tendance sur 12 mois glissants est plus parlante qu’un chiffre annuel figé. Un TF qui descend régulièrement vaut mieux qu’un bon chiffre isolé.
- **Son secteur** : la CNAM (Assurance maladie — Risques professionnels) publie des statistiques par Comité technique national (CTN). Se situer par rapport au CTN de son activité (métallurgie, BTP, transport-logistique…) donne un repère honnête. Un TF de 20 n’a pas la même signification dans un atelier de mécanique que dans des bureaux.
- **L’ordre de grandeur national** : le TF moyen français se situe autour de 13 à 14. C’est un repère grossier, pas un objectif.

## Les limites : ce que TF et TG ne disent pas

Les experts de la prévention s’accordent sur un point : TF et TG sont des indicateurs **a posteriori** (lagging indicators). Ils comptent ce qui a déjà mal tourné. Trois limites à garder en tête :

- **Le silence n’est pas la sécurité.** Un TF nul un trimestre peut traduire une vraie maîtrise… ou une sous-déclaration. Un TF bas dans une culture où l’on ne déclare pas les petits accidents est un faux bon signal.
- **Les petits nombres trompent.** Dans une PME, un seul accident fait bondir le TF. La volatilité statistique rend la lecture annuelle fragile — d’où l’intérêt du glissant.
- **Ils ignorent les signaux faibles.** C’est tout l’objet de la [pyramide de Bird](/ressources/pyramide-de-bird-limites) : sous les accidents avec arrêt se cachent des dizaines de presque-accidents qui, eux, sont prédictifs. Un pilotage mûr complète TF/TG par des **indicateurs de moyens et d’activité** (taux de remontée des presque-accidents, taux de clôture du [plan d’action](/ressources/plan-action-ehs-guide-complet), audits réalisés).

Mesurer la performance sécurité par le seul TF revient à conduire en ne regardant que le rétroviseur.

## Du calcul au pilotage

Calculer ces indicateurs une fois par an, à la main, la veille du COPIL, c’est garantir l’erreur de périmètre et l’absence de tendance. Le bon réflexe : un outil qui **recalcule en temps réel** à mesure qu’on saisit les événements, qui maintient les heures travaillées au dénominateur, qui affiche TF1, TF2, IF, TG sur 12 mois glissants et signale d’un coup d’œil si la pyramide de Bird du site est saine ou inversée.

C’est exactement ce que fait le **Registre AT/Incidents** de CODEX EHS — un fichier Excel qui tient le registre toute l’année et calcule les indicateurs sans tableur séparé. Mais avant d’outiller la mesure, il faut une démarche qui agit : commence par structurer ton [plan d’action](/ressources/plan-action-ehs-guide-complet), c’est lui qui fait baisser le TF, pas le tableau de bord.

## Sources et références réglementaires

- INRS, **statistiques nationales AT-MP** : définitions de l’indice de fréquence, du taux de fréquence et du taux de gravité (inrs.fr, démarche AT-MP).
- INRS, brochure **ED 6019** « Analyse des accidents du travail — Méthode statistique » (formules et conventions de calcul).
- CNAM — Assurance maladie Risques professionnels : statistiques de sinistralité par Comité technique national (CTN).
- Distinction TF1 / TF2 / TF3 et base de calcul (1 000 000 d’heures en France, 200 000 aux États-Unis) : conventions usuelles de la santé-sécurité au travail.

*Repères méthodologiques. Le suivi réglementaire de la sinistralité (bilan, reporting) dépend de l’effectif et du secteur.*
