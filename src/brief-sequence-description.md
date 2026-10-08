Le diagramme de séquence est un outil de réflexion sur l'ensemble des éléments de code, d'architecture, de BDD, ... qui doivent être pris en compte dans la mise en place d'une fonctionnalité.
S'il sert à planifier ce qui va se passer, il sert surtout de base de réflexion sur tout ce qui pourrait ne pas bien se passer.... A vous de jouer

## Ressources

- Lien vers le repo du projet : https://github.com/Materiel-apprentissage/Int-gration_UML_Sequence
- Diagramme de sequence d'inscription actuel (authentification simple) :
![Diagramme de sequence d'inscription actuel (authentification simple)](.\brief-sequence-inscription.png)



## Contexte du projet

Vous intégrez l'équipe technique d'une application web dont l'architecture repose sur un reverse proxy Nginx, une API Express en TypeScript et une base PostgreSQL. La création de compte fonctionne déjà : un utilisateur envoie son email et son mot de passe, l'API vérifie les données, hache le mot de passe et enregistre le compte.

Le responsable produit demande une évolution : l'inscription doit désormais être validée par email. Après son inscription, l'utilisateur reçoit un message contenant un lien de confirmation. Les emails sont envoyés par le service tiers Brevo, que l'équipe a choisi pour sa délivrabilité. Tant que le lien n'a pas été cliqué, le compte est considéré comme non confirmé.

Le tech lead refuse que le développement démarre sans conception partagée. Il vous demande de lui remettre, avant toute implémentation, les diagrammes de séquence décrivant le fonctionnement cible, accompagnés des questions que vous vous êtes posées et des décisions prises. Ces documents serviront de référence à l'équipe, et plus tard de cadre pour piloter un assistant IA lors du développement.

Vous disposez du diagramme de séquence actuel de l'inscription, d'un support de cours de rappel sur les diagrammes de séquence, et d'un dépôt de code de base, fourni pour contexte (il n'est pas à modifier et ne sera pas commenté en séance).

## Modalités pédagogiques

Durée : 1 journée. Travail en binôme pour réfléchir et se challenger, rendu individuel.

L'usage d'un assistant IA est fortement déconseillé pendant ce brief. L'objectif est d'entraîner votre capacité à réfléchir en amont, pour mieux piloter l'IA ensuite.

Contraintes : Pour conserver une haute disponibilité applicative, le Tech lead souhaite que le service Email soit isolé dans un nouveau micro-service (Dockerisation, reverse proxy Nginx). Dans ce brief, aucun code n'est à produire. (Attention)

## Déroulé proposé :

Rappel de cours (environ 45 min) : lecture et construction d'un diagramme de séquence, et révision à partir du diagramme actuel de l'inscription.

Étape 1, Comprendre l'existant (30 min, individuel) : relisez le diagramme de départ et repérez les acteurs, les échanges et les cas alternatifs. Comprendre la base de code existante et son architecture.

Étape 2, Questionner le besoin (45 min, individuel puis binôme) : listez seul toutes les questions que pose l'ajout de la validation email, puis confrontez votre liste à celle de votre binôme et complétez-la. Aucune solution n'est encore attendue.

Étape 3, Concevoir le diagramme n°1 (1 h 30, individuel) : inscription avec envoi de l'email de confirmation. (Lecture de la doc Brevo) Appuyez-vous sur vos questions pour choisir et justifier.

Étape 4, Concevoir le diagramme n°2 (1 h 30, individuel) : confirmation de l'email au clic sur le lien.

Étape 5, Revue croisée (45 min, binôme) : présentez vos diagrammes à votre binôme, qui joue l'avocat du diable (« et si… ? »). Notez ce qui vous fait changer d'avis.

Étape 6, Finalisation (45 min, individuel) : corrigez vos diagrammes et complétez votre tableau de questionnements, y compris les options écartées.
Outil de diagrammage : libre (un outil « diagramme en tant que code » comme Mermaid ou PlantUML est conseillé, mais draw.io est accepté). Les diagrammes doivent être lisibles et exportés en image ou PDF.

## Pistes pour alimenter votre questionnement (non exhaustives, à vous d'en trouver d'autres) :

- Que se passe-t-il quand tout se passe bien ?
- Quand quelque chose échoue, et à quel endroit ?
- Que fait-on si le service tiers est lent ou indisponible ?
- Comment relier le lien reçu par email à la bonne personne, et comment éviter qu'il soit falsifié ou réutilisé ?
- Que se passe-t-il si l'utilisateur clique deux fois, ou trop tard ?
- Quel état de la base de données laisse-t-on si une étape échoue au milieu ?


## Modalités d'évaluation

- Vos diagrammes. Il n'existe pas une seule bonne solution : j'évalue la cohérence et la pertinence de vos choix, pas la ressemblance avec un corrigé. Une conception différente mais argumentée est valide.
- Votre tableau de questionnements, c'est-à-dire la qualité de votre réflexion en amont : étendue des cas envisagés, profondeur, justification des décisions.
- Votre posture pendant la séance : implication dans le challenge avec votre binôme, capacité à argumenter et à faire évoluer votre conception.

La Non Utilisation de l'IA est fortement préconisé. Le diagramme de séquence représente et sa compréhension est un élément structurant de votre certification

## Livrables

Chaque apprenant remet, sans aucun code :

- 1/ Diagramme de séquence n°1 : inscription avec envoi de l'email de confirmation.
- 2/ Diagramme de séquence n°2 : confirmation de l'email via le lien reçu.
- 3/ Un tableau de questionnements pour chaque diagramme, avec les colonnes : question posée / options envisagées / décision retenue / justification. Il doit inclure les options écartées.

## Critères de performance

- Le diagramme respecte les conventions UML : participants, messages synchrones et de retour, fragments alternatifs, numérotation.
- Les composants de l'architecture sont correctement placés, et les échanges entre eux sont cohérents. Un micro service est ajouté.
- Le cas nominal est complet et suit un enchaînement logique.
- Les cas alternatifs et d'erreur sont identifiés, avec un traitement explicite pour chacun.
- La dépendance au service tiers est traitée.
- Les enjeux de sécurité sont pris en compte.
- Le questionnement est riche et argumenté : chaque décision est justifiée, les alternatives écartées sont documentées.
- Les deux diagrammes sont cohérents entre eux.
- Le travail est lisible, soigné et exploitable par une autre personne pour développer sans ambiguïté.