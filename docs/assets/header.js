function addHeader(href){
    var innerHTML = `
    <div class="header-container">
        <div class="logo">
            <a href="/"><img src="/assets/logo.png" width="32" height="32"></a>
            <span><strong>C</strong>ompetative <strong>S</strong>occer <strong>L</strong>eague</span>
        </div>
        <div class="buttons">
            <div class="dropdown">
                <button class="show-dropdown button" id="show-rules-dropdown-btn">Rules</button>
                <div class="dropdown-content">
                    <a href="/rules/discord"><button class="button${href === "discord_rules" ? " selected" : ""}" id="discord-rules-btn">Discord Rules</button></a>
                    <a href="/rules/game"><button class="button${href === "game_rules" ? " selected" : ""}" id="game-rules-btn">Game Rules</button></a>
                    <a href="/rules/match"><button class="button${href === "match_rules" ? " selected" : ""}" id="match-rules-btn">Match Rules</button></a>
                </div>
            </div>
            <a target="__blank" href="/guides"><button class="button${href === "guide" ? " selected" : ""}">Guides</button></a>
            <a target="__blank" href="https://discord.gg/YfNtky8Wnv"><button class="button">Discord</button></a>
            <a target="__blank" href="https://www.roblox.com/groups/8328186/Blinx-Uprise#!/about"><button
                    class="button">Roblox Group</button></a>
            <a target="__blank" href="https://www.roblox.com/games/12146621233/Competitive-Soccer"><button
                    class="button">Roblox Game</button></a>
        </div>
    </div>
    `

    const headerEl = document.createElement('header');
    headerEl.innerHTML = innerHTML;
    document.body.insertBefore(headerEl, document.body.firstChild);

    const discordRules = document.getElementById("discord-rules-btn");
    const gameRules = document.getElementById('game-rules-btn');
    const matchRules = document.getElementById('match-rules-btn')
    
    if (discordRules.classList.contains('selected') || gameRules.classList.contains('selected') || matchRules.classList.contains('selected')){
        const showBtn = document.getElementById('show-rules-dropdown-btn');
        showBtn.classList.add('selected');
    }

}
