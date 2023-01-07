import './App.scss';
import { PersonalData } from './components/PersonalData/CardData';

function App() {
  return (
    <section className='payment-section'>
      <div className='payment-section__container container'>
        <div className='payment-section__cards'></div>
        <PersonalData />
      </div>
    </section>
  );
}

export default App;
