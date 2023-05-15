function addHeader(href){
    var innerHTML = `
    <div class="header-container">
        <div class="logo">
            <a href="/"><img src="assets/logo.png" width="32" height="32"></a>
            <span><strong>C</strong>ompetative <strong>S</strong>occer <strong>L</strong>eague</span>
        </div>
        <div class="buttons">
            <div class="dropdown">
                <button class="show-dropdown button">Rules</button>
                <div class="dropdown-content">
                    <a href="discord_rules.html"><button class="button${href === "discord_rules.html" ? " selected" : ""}">Discord Rules</button></a>
                    <a href="game_rules.html"><button class="button${href === "game_rules.html" ? " selected" : ""}">Game Rules</button></a>
                </div>
            </div>
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

}