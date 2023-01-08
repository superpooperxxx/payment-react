import './App.scss';
import { BackCard } from './components/BackCard/BackCard';
import { CardData } from './components/CardData/CardData';
import { FrontCard } from './components/FrontCard/FrontCard';

function App() {
  return (
    <section className='payment-section'>
      <div className="payment-section__container">
        <div className="payment-section__cards">
          <BackCard />
          <FrontCard />
        </div>

        <div className="payment-section__form-wrapper">
          <CardData />
        </div>
      </div>
    </section>
  );
}

export default App;
