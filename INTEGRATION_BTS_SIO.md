# Integration des sections BTS SIO (epreuve E5)

Deux nouvelles pages ont ete ajoutees a ce fork pour respecter l'ossature imposee par la methodologie de portfolio E5 :

- `src/components/Veille/Veille.js` (rubrique Veille technologique)
- `src/components/Synthese/Synthese.js` (rubrique Tableau de synthese E5)

## Pourquoi ces fichiers ne sont pas encore actifs sur le site

Pour eviter de casser App.js ou Navbar.js sans pouvoir relire leur contenu exact au prealable,
ces pages ont ete ajoutees en fichiers autonomes. Il reste deux petites modifications manuelles a faire :

### 1. Dans `src/App.js`
Ajouter les imports :
```js
import Veille from "./components/Veille/Veille";
import Synthese from "./components/Synthese/Synthese";
```
Puis ajouter deux routes (a cote des routes existantes About/Projects) :
```jsx
<Route path="/veille" element={<Veille />} />
<Route path="/synthese" element={<Synthese />} />
```
(Si le projet utilise React Router v5, remplacer par `<Route path="/veille" component={Veille} />` etc.)

### 2. Dans `src/components/Navbar.js`
Ajouter deux liens de menu, sur le meme modele que les liens existants (About, Projects) :
```jsx
<Nav.Item>
  <Nav.Link as={Link} to="/veille" onClick={updateExpanded}>
    <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} /> Veille
  </Nav.Link>
</Nav.Item>
<Nav.Item>
  <Nav.Link as={Link} to="/synthese" onClick={updateExpanded}>
    <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} /> Tableau E5
  </Nav.Link>
</Nav.Item>
```

Apres ces deux ajouts et `npm install` + `npm start`, le portfolio respecte integralement
les six rubriques demandees par la methodologie E5 : Accueil/Profil, Parcours/Formation,
Competences/Savoir-faire, Projets & Realisations, Veille technologique, Tableau de synthese E5.
