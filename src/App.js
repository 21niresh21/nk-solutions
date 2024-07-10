import './App.css';
import { Carousel } from './components/Carousel';
import Header from './components/Header';
import Team from './components/Team';
import Service from './components/Service';
import slides from "./components/carouselData.json"

function App() {
  return (
    <div>
      <Header/>
      <Carousel data={slides.slides}/ >
      <Team/>
    </div>
  );
}

export default App;
