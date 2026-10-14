# Paradise Nursery

Paradise Nursery est une boutique en ligne de plantes d’intérieur. L’interface est construite avec React et le panier est géré par Redux (`src/CartSlice.jsx`).

## Lancer le projet

```bash
npm install
npm run dev
```

L’application s’ouvre sur http://127.0.0.1:5173/.

## Pages

- **Accueil** : image de fond, nom Paradise Nursery, présentation de l’entreprise et bouton Get Started vers le catalogue.
- **Plantes** (`/plants`) : au moins six plantes par catégorie, sur trois catégories, avec image, nom, prix et Add to Cart.
- **Panier** (`/cart`) : vignette, nom, prix unitaire, quantités, sous-total, total, suppression, Continue Shopping et Checkout.

La barre de navigation (Home, Plants, Cart) et l’icône du panier sont présentes sur les pages Plantes et Panier. Le nombre affiché à côté de l’icône correspond au nombre total d’articles.


