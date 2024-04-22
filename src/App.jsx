import Features from './components/Features';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Model from './components/Model';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
    </main>
  );
};

export default App;
