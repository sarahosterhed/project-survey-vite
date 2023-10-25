export const name = ({ value, }) => {


    return (
        <div>
            <h1>What's your name or a nickname you'd like to use in the song?</h1>
            <input type="text" value={value} onChange={nickName} />
        </div>
    )
}
