export const ThemeSong = (props) => {
    return (
        <div>
            <h1 className="heading">{props.name}’s personal theme song</h1>
            <p>Hey there, {props.name}, let me sing you a song, Are you feeling {props.mood}, where you belong? In a {props.musicStyle} melody, we'll play along, With your energy level at {props.energy}, it won't be long.
            </p>
            <p>Oh, {props.name}, it's your special day, In a world of {props.musicStyle}, you're here to stay. With your energy at its peak, we find our way, In this theme song, your story's on display.
            </p>
            <p>With a smile on your face, {props.name}, you're not alone, In this {props.musicStyle} song, we'll make it our own. Your high energy today is clearly shown, In this personalized theme song, your spirit is known.
            </p>
            <p>As we move through this journey, from 1 to 10, Your energy level's at {props.energy}, and then, With every note, with every chord, Your story's told, and it's never ignored.</p>

        </div >
    )
}