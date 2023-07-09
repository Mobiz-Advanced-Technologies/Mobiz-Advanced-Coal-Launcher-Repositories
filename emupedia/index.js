let repository = {"items":[]}

async function fetchExternalGames() {
    let fetchJSON = await fetch('https://emupedia.net/beta/emuos/assets/data/desktop.json');
    let data = await fetchJSON.json();

    data.icons.forEach(async (items) => {
        if (!items.link) return;

        let extgameURL;
        if (items.link.includes('http')) {
            extgameURL = `${items.link}`;
        } else {
            extgameURL = `https://emupedia.net${items.link}`;
        };

        let convertedGame = {};
        convertedGame.name = items.name;
        convertedGame.version = 1;
        convertedGame.developer = 'emupedia.net';
        convertedGame.feed = 'false';
        convertedGame.info = 'Advanced game by emupedia.net, Hosted by Mobiz-Advanced-Technologies.';
        convertedGame.banner = `https://emupedia.net/beta/emuos/${items.icon}.ico`;
        convertedGame.download = extgameURL;
        convertedGame.type = "link";

        repository.items.push(convertedGame);
    })
}

fetchExternalGames();