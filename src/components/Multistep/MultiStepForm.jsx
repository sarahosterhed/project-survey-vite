// Importing components & hooks
import { useState } from "react";
import { Intro } from "./Intro.jsx";
import { Name } from "./Name.jsx";
import { Mood } from "./Mood.jsx";
import { MusicStyle } from "./MusicStyle.jsx";
// import { Energy } from "./Energy.jsx";
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
        if (currentStep < 7) setCurrentStep(currentStep + 1);

    }

    const previousStep = () => {
        if (currentStep > 1) setCurrentStep(currentStep - 1);
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
                <MusicStyle inputValue={formData.mood} updateFormData={updateFormData} />
            )}

            {currentStep === 6 && (
                <Submit />
            )}

            {currentStep === 7 && (
                <ThemeSong name={formData.name} />
            )}




            <div className="nav-btn">

                {currentStep === 1 && <button className="btn" onClick={nextStep}>Start</button>}

                {(currentStep > 1) && (currentStep < 6) && <button className="btn" onClick={previousStep}>Back</button>}

                {(currentStep > 1) && (currentStep < 6) && <button className="btn" onClick={nextStep}>Next</button>}

                {currentStep === 6 && <button className="btn" onClick={nextStep}>Submit</button>}

                {currentStep === 7 && <button className="btn" onClick={firstStep}>Make another</button>}

            </div>
        </div>
    );

};
