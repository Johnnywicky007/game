let allGames = []; // Database က ဂိမ်းအားလုံးကို သိမ်းထားမယ်

// Database ကနေ ဂိမ်းတွေယူမယ်
db.ref('games').on('value', (snapshot) => {
    allGames = [];
    snapshot.forEach((child) => {
        allGames.push(child.val());
    });
    displayGames(allGames);
});

// ဂိမ်းတွေကို မျက်နှာပြင်မှာ ပြတဲ့ Function
function displayGames(gamesArray) {
    const gameList = document.getElementById('game-list');
    gameList.innerHTML = "";
    gamesArray.forEach(game => {
        gameList.innerHTML += `
            <div class="game-card">
                <div style="position:relative;">
                    <img src="${game.image}">
                    <span style="position:absolute; top:5px; right:5px; background:rgba(255,71,87,0.8); padding:2px 8px; border-radius:10px; font-size:10px;">${game.category}</span>
                </div>
                <h4>${game.title}</h4>
                <a href="${game.download}" class="download-btn">DOWNLOAD</a>
            </div>
        `;
    });
}


// အမျိုးအစားအလိုက် ခွဲထုတ်ခြင်း
function filterGame(category) {
    if (category === 'All') {
        displayGames(allGames);
    } else {
        const filtered = allGames.filter(g => g.category === category);
        displayGames(filtered);
    }
}

// နာမည်နဲ့ ရှာဖွေခြင်း
function searchGame() {
    const term = document.getElementById('search').value.toLowerCase();
    const searched = allGames.filter(g => g.title.toLowerCase().includes(term));
    displayGames(searched);
}
