import { MultiStepForm } from "./components/Multistep/MultiStepForm";
import "./index.css";
import musicImage from './assets/music.png';


export const App = () => {
  return (
    <div className="mainContainer">
      <MultiStepForm />
      <img className="bgImage" src={musicImage} alt="Music" />
    </div>
  );
};
