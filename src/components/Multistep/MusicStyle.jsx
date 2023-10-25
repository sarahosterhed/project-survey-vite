export const MusicStyle = ({ inputValue, updateFormData }) => {

    const handleMusicStyle = (e) => updateFormData("musicStyle", e.target.value);
    return (
        <div>
            <select>
                <option value="" selected disabled>Choose an option</option>
                <option value="hip-hop" onChange={handleMusicStyle}>Hip-hop</option>
                <option value="country" onChange={handleMusicStyle}>Country</option>
                <option value="pop" onChange={handleMusicStyle}>Pop</option>
                <option value="rock" onChange={handleMusicStyle}>Rock</option>
                <option value="jazz" onChange={handleMusicStyle}>Jazz</option>
            </select>
        </div>

    )
};