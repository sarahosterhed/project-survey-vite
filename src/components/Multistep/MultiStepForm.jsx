// Importing components & hooks
import { useState } from "react";
import { Intro } from "./Intro.jsx";
// import { Name } from "./Name.jsx";
// import { Mood } from "./Mood.jsx";
// import { MusicStyle } from "./MusicStyle.jsx";
// import { Energy } from "./Energy.jsx";
// import { Submit } from "./Submit.jsx";
// import { ThemeSong } from "./ThemeSong.jsx";

export const MultiStepForm = () => {
    // state to store form data
    const [formData, setFormData] = useState({
        name: "sarah",
        mood: "",
        musicStyle: "",
        energy: "",
    });

    const [currentStep, setCurrentStep] = useState(1);

    const updateFormData = (fieldType, inputValue) => {
        setFormData((currentValues) => ({ ...currentValues, [fieldType]: inputValue }));
    }


    const nextStep = () => {
        if (currentStep < 6) setCurrentStep(currentStep + 1);

    }

    const previousStep = () => {
        if (currentStep > 1) setCurrentStep(currentStep - 1);
    }


    //Render the component
    return (
        <div>
            {currentStep === 1 ? <Intro /> : ""}

            {/*
            {currentStep === 2 && (
                <Name inputValue={formData.name} updateFormData={updateName} />
            )}
            */}

            <h1>{formData.name}</h1>
            {console.log(formData)}
        </div>
    );

};
