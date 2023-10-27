// Importing components & hooks
import { useState } from "react";
import { Intro } from "./Intro.jsx";
import { Name } from "./Name.jsx";
import { Mood } from "./Mood.jsx";
import { MusicStyle } from "./MusicStyle.jsx";
import { Energy } from "./Energy.jsx";
import { Submit } from "./Submit.jsx";
import { ThemeSong } from "./ThemeSong.jsx";

export const MultiStepForm = () => {
    // state to store form data
    const [formData, setFormData] = useState({
        name: "",
        mood: "",
        musicStyle: "",
        energy: "",
    });

    const [currentStep, setCurrentStep] = useState(1);

    const updateFormData = (fieldType, inputValue) => {
        setFormData((currentValues) => ({ ...currentValues, [fieldType]: inputValue }));
    }


    const firstStep = () => {
        setCurrentStep(1);
    }

    

    const nextStep = () => {
        if (currentStep === 1) setCurrentStep(currentStep + 1);
        else if (formData.name === "") setCurrentStep(currentStep);
        else if (currentStep < 7) setCurrentStep(currentStep + 1);
         
    }
         

    const previousStep = () => {
        if (currentStep > 1) setCurrentStep(currentStep - 1);
    }

    // function to get a value from range slider and turn into word
    const energyValueToWords = () => {
        if (formData.energy >= 70 ) {
            return "High"
        } else if (formData.energy >= 40 && formData.energy < 70 ) {
            return "Medium"
        } else {
            return "Low"
        }
    }




    //Render the component
    return (
        <div>
            {currentStep === 1 ? <Intro /> : ""}

            {currentStep === 2 && (
                <Name inputValue={formData.name} updateFormData={updateFormData} />
            )}

            {currentStep === 3 && (
                <Mood inputValue={formData.mood} updateFormData={updateFormData} />
            )}

            {currentStep === 4 && (
                <MusicStyle inputValue={formData.musicStyle} updateFormData={updateFormData} />
            )}

            {currentStep === 5 && (
                <Energy inputValue={formData.energy} updateFormData={updateFormData} />
            )}

            {currentStep === 6 && (
                <Submit />
            )}

            {currentStep === 7 && (
                <ThemeSong name={formData.name} mood={formData.mood} musicStyle={formData.musicStyle} energy={energyValueToWords()}/>
            )}




            <div className="nav-btn">

                {currentStep === 1 && <button className="btn" onClick={nextStep}>Start</button>}

                {(currentStep > 1) && (currentStep < 6) && <button className="btn" onClick={previousStep}>Back</button>}

                {(currentStep > 1) && (currentStep < 6) && <input type="submit" value="Next" className="btn" onClick={nextStep} />}

                {currentStep === 6 &&  <input type="submit" value="Submit" className="btn" onClick={nextStep} />}

                {currentStep === 7 && <button className="btn" onClick={firstStep}>Make another</button>}

            </div>
        </div>
    );

};
