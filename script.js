// Testing
const firebaseConfig = { databaseURL: "YOUR_FIREBASE_URL" };
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

const gameList = document.getElementById('game-list');

// ်Remove old from database
db.ref('games').on('value', (snapshot) => {
    gameList.innerHTML = ""; // clear old
    snapshot.forEach((child) => {
        const game = child.val();
        gameList.innerHTML += `
            <div class="game-card">
                <img src="${game.image}" alt="${game.title}">
                <h4>${game.title}</h4>
                <a href="${game.download}" class="download-btn">DOWNLOAD</a>
            </div>
        `;
    });
});
