export const Energy = ({ inputValue, updateFormData }) => {

    const handleEnergy = (e) => updateFormData("energy", e.target.value);

    return (
        <div>
            <h1>how would you rate your energy level right now?</h1>
            <label>Low energy</label>
            <input type="range" min="1" max="100" value={inputValue} onChange={handleEnergy} />
            <label>High energy</label>
        </div>
    );
};
