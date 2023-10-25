export const Name = ({ inputValue, updateFormData }) => {

    const nickName = (e) => updateFormData("name", e.target.value);

    return (
        <div>
            <h1>What's your name or a nickname you'd like to use in the song?</h1>
            <input type="text" value={inputValue} onChange={nickName} />
        </div>
    );
};
