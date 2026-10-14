import Header from '../components/Header';
import PlantCard from '../components/PlantCard';
import { categories } from '../data/plants';

export default function ProductPage() {
  return (
    <div className="shop-shell">
      <Header />
      <main className="shop-main">
        {categories.map((category) => (
          <section key={category.id} className="category" aria-labelledby={category.id}>
            <h2 id={category.id}>{category.name}</h2>
            <div className="plant-grid">
              {category.plants.map((plant) => (
                <PlantCard key={plant.id} plant={plant} />
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
