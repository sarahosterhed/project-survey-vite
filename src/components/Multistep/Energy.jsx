export const Energy = ({ inputValue, updateFormData }) => {

    const handleEnergy = (e) => updateFormData("energy", e.target.value);

    return (
        <div className="contentWrap">
            <h1>How would you rate your energy level right now?</h1>
            <div className="slider">
                <label>Low energy</label>
                <input type="range" min="1" max="100" value={inputValue} onChange={handleEnergy} />
                <label>High energy</label>
            </div>
        </div>
    );
};
