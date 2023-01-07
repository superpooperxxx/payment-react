import './App.scss';
// import { PersonalData } from './components/CardData/CardData';
import { FrontCard } from './components/FrontCard/FrontCard';

function App() {
  return (
    <section className='payment-section'>
      {/* <div className='payment-section__container container'>
        <div className='payment-section__cards'></div>
        <PersonalData />
      </div> */}
      <FrontCard />
    </section>
  );
}

export default App;
