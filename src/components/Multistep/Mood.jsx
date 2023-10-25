export const Mood = () => {
    return (
        <div>
            <h1 className="heading">How do you feel today?</h1>
            <input type="radio" id="html" name="energy" value="Happy" />
            <label for="html">Happy</label>

            <input type="radio" id="css" name="energy" value="Sad" />
            <label for="css">Sad</label>

            <input type="radio" id="javascript" name="energy" value="" />
            <label for="javascript">Energetic</label>

            <input type="radio" id="javascript" name="energy" value="Chill" />
            <label for="javascript">Chill</label>
        </div>
    );
};