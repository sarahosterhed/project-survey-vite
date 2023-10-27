export const Name = ({ inputValue, updateFormData }) => {

    const nickName = (e) => updateFormData("name", e.target.value);

    return (
        <div className="contentWrap">
            <h1>What's your name or a nickname you'd like to use in the song?</h1>
            <input
                className="nameInput"
                type="text"
                value={inputValue}
                placeholder="Type your answer"
                onChange={nickName}
                required />
        </div>
    );
};
