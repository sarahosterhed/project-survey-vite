export const Mood = ({ inputValue, updateFormData }) => {

    const handleMood = (e) => updateFormData("mood", e.target.value);

    return (
        <div>
            <h1 className="heading">How do you feel today?</h1>
            <section className="radio-btn">
                <input type="radio" name="energy" value="happy" onChange={handleMood} />
                <label>Happy</label>

                <input type="radio" name="energy" value="sad" onChange={handleMood} />
                <label>Sad</label>

                <input type="radio" name="energy" value="energetic" onChange={handleMood} />
                <label>Energetic</label>

                <input type="radio" name="energy" value="chill" onChange={handleMood} />
                <label >Chill</label>
            </section>
        </div>
    );
};