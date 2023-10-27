export const Mood = ({ inputValue, updateFormData }) => {

    const handleMood = (e) => updateFormData("mood", e.target.value);

    return (
        <div className="contentWrap">
            <h1 className="heading">How do you feel today?</h1>
            <section className="radioBtn">
                <label>
                    <input type="radio" name="energy" value="happy" onChange={handleMood} />
                    Happy
                </label>
                <label>
                    <input type="radio" name="energy" value="sad" onChange={handleMood} />
                    Sad
                </label>
                <label>
                    <input type="radio" name="energy" value="energetic" onChange={handleMood} />
                    Energetic
                </label>
                <label>
                    <input type="radio" name="energy" value="chill" onChange={handleMood} />
                    Chill
                </label>
            </section>
        </div>
    );
};