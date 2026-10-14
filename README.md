# Paradise Nursery

Interface React d’une boutique de plantes d’intérieur pour Paradise Nursery.

## Lancer le projet

```bash
npm install
npm run dev
```

L’application s’ouvre sur http://127.0.0.1:5173/.

## Pages

- **Accueil** : présentation de la pépinière et bouton Get Started vers le catalogue.
- **Catalogue** (`/plants`) : plantes regroupées par catégorie, avec image, nom, prix, description et Add to Cart.
- **Panier** (`/cart`) : quantités, suppression, sous-totaux, total, Continue Shopping et Checkout.

Après un ajout, le bouton devient Added to Cart et se désactive. Le compteur du panier dans l’en-tête suit le nombre total d’articles.

