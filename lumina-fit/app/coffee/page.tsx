import CoffeeNav from './components/CoffeeNav';
import CoffeeHero from './components/CoffeeHero';
import CoffeeFeatures from './components/CoffeeFeatures';
import CoffeePricing from './components/CoffeePricing';
import CoffeeFAQ from './components/CoffeeFAQ';
import CoffeeNewsletter from './components/CoffeeNewsletter';
import CoffeeFooter from './components/CoffeeFooter';

export default function CoffeePage() {
  return (
    <>
      <CoffeeNav />
      <main style={{ paddingTop: 88 }}>
        <CoffeeHero />
        <CoffeeFeatures />
        <CoffeePricing />
        <CoffeeFAQ />
        <CoffeeNewsletter />
      </main>
      <CoffeeFooter />
    </>
  );
}
