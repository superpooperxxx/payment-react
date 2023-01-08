import './App.scss';
import { BackCard } from './components/BackCard/BackCard';
import { PersonalData } from './components/CardData/CardData';
import { FrontCard } from './components/FrontCard/FrontCard';

function App() {
  return (
    <section className='payment-section'>
      <FrontCard />
      <BackCard />
      <PersonalData />
    </section>
  );
}

export default App;
