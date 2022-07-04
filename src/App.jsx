import './App.css';
import Navbar from './components/Navbar'
import WelcomeSection from './components/WelcomeSection';
import InfoSectionCols from './components/InfoSectionCols';
import Footer from './components/Footer';


const App = () => {
  return (
    <div className="flex-container">
      <Navbar />
      <WelcomeSection />
      <InfoSectionCols />
      <Footer />
    </div>
  )
};

export default App;

