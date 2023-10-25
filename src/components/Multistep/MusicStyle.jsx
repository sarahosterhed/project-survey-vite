export const MusicStyle = ({ inputValue, updateFormData }) => {

    const handleMusicStyle = (e) => updateFormData("musicStyle", e.target.value);
    return (
        <div>
            <select
                onChange={handleMusicStyle}
                value={inputValue}
            >
                <option value="" selected disabled>Choose an option</option>
                <option value="hip-hop">Hip-hop</option>
                <option value="country">Country</option>
                <option value="pop">Pop</option>
                <option value="rock">Rock</option>
                <option value="jazz">Jazz</option>
            </select>
        </div>

    )
};