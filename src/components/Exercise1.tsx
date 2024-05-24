import { useState } from "react";

//We need a button when the user clicks a button it will update the name: 'David' to name: 'Aaron'

const Exercise1 = () => {
    const [game, setGame] = useState({
        id: 1,
        player: {
            name: "David",
        },
    });

    const handleClick = () => {
        setGame((prevGame) => ({
            ...prevGame,
            player: {
                ...prevGame.player,
                name: "Aaron",
            },
        }));
    };

    return (
        <div>
            <p>Player Name: {game.player.name}</p>
            <button onClick={handleClick}>Update Name</button>
        </div>
    );
};

export default Exercise1;
