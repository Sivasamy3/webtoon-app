let currentUser = null; 
const favorites = []; 

// Webtoons data
const webtoons = [
    {
        id: 1,
        title: 'Solo Leveling',
        thumbnail: 'https://i.tribune.com.pk/media/images/solothumb-17108697477981715149910-0/solothumb-17108697477981715149910-0.png',
        description: 'In a world where hunters are the last line of defense against monsters, one weak hunter discovers a mysterious system that allows him to grow stronger...',
        image: 'https://i.tribune.com.pk/media/images/solothumb-17108697477981715149910-0/solothumb-17108697477981715149910-0.png',
        comments: []
    },
    {
        id: 2,
        title: 'Dragon Master',
        thumbnail: 'https://i.ytimg.com/vi/QeipGU3jAGc/maxresdefault.jpg',
        description: 'A young man with a dragon spirit fights against evil forces and seeks to unite the world of dragons...',
        image: 'https://i.ytimg.com/vi/QeipGU3jAGc/maxresdefault.jpg', 
        comments: []
    },
    {
        id: 3,
        title: 'Tower of God',
        thumbnail: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2024/06/baam-tower-of-god-friends-1.jpeg',
        description: 'A boy named Bam enters a mysterious tower to find his friend, Rachel...',
        image: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2024/06/baam-tower-of-god-friends-1.jpeg',
        comments: []
    },
    {
        id: 4,
        title: 'The God of High School',
        thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS88c-ag_KI-nSe28N5elh3zA1ZYUcMV5oZQA&s',
        description: 'High school students from all over Korea compete in a tournament...',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS88c-ag_KI-nSe28N5elh3zA1ZYUcMV5oZQA&s',
        comments: []
    },
    {
        id: 5,
        title: 'Noblesse',
        thumbnail: 'https://m.media-amazon.com/images/S/pv-target-images/e2d7e9bdca854d5c188f64a02bcb5f6ce2424060312bafdef80935cc9d07a633.jpg',
        description: 'The story follows Rai, a powerful noble who awakens after 820 years. He teams up with a high school student to protect the world from various threats while uncovering his own past.',
        image: 'https://m.media-amazon.com/images/S/pv-target-images/e2d7e9bdca854d5c188f64a02bcb5f6ce2424060312bafdef80935cc9d07a633.jpg',
        comments: []
    },
    {
        id: 6,
        title: 'The Breaker',
        thumbnail: 'https://i.ytimg.com/vi/ScmDrjJklkU/maxresdefault.jpg',
        description: 'Shi-Woon is a weak high school student who becomes involved with a martial arts master. As he learns martial arts, he faces powerful enemies and uncovers a world of martial arts struggles.',
        image: 'https://i.ytimg.com/vi/ScmDrjJklkU/maxresdefault.jpg',
        comments: []
    },
    {
        id: 7,
        title: 'Gosu',
        thumbnail: 'https://i.ytimg.com/vi/D_AU_Vm1aC8/maxresdefault.jpg',
        description: 'After the death of his master, a young man named "Gosu" seeks revenge on those responsible. His journey is filled with fierce battles and intricate plot twists.',
        image: 'https://i.ytimg.com/vi/D_AU_Vm1aC8/maxresdefault.jpg',
        comments: []
    },
    {
        id: 8,
        title: 'Lookism',
        thumbnail: 'https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABfBNHChZ14baRtqjE5LmCYbe6_BRhecyUxQ_UpGbg9Jk8E1M7K0P2nS-Jwf5ibhtL4kh8LAMjFYU5w3CQJUTcTjHhogUhTj9FpIC.jpg?r=713',
        description: 'A high school student can switch between two bodies—one handsome and one overweight. He navigates the challenges of life, popularity, and bullying while discovering the truth about both lives.',
        image: 'https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABfBNHChZ14baRtqjE5LmCYbe6_BRhecyUxQ_UpGbg9Jk8E1M7K0P2nS-Jwf5ibhtL4kh8LAMjFYU5w3CQJUTcTjHhogUhTj9FpIC.jpg?r=713',
        comments: []
    },
    {
        id: 9,
        title: 'Hardcore Leveling Warrior',
        thumbnail: 'https://i.ytimg.com/vi/tQ17cpg4MqA/maxresdefault.jpg',
        description: 'The story follows the strongest player in a virtual reality game who suddenly loses everything. To regain his status, he must fight through levels and adversaries in a highly competitive world.',
        image: 'https://i.ytimg.com/vi/tQ17cpg4MqA/maxresdefault.jpg',
        comments: []
    },
    {
        id: 10,
        title: 'Feng Yu Jiu Tian',
        thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE6DWIelfdAKBPhlr7ILJ6rE8FxXjN40THRA&s',
        description: 'A skilled assassin seeks revenge against those who wronged him while navigating a world of martial arts and intrigue. This webtoon features breathtaking action sequences and intricate character dynamics.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE6DWIelfdAKBPhlr7ILJ6rE8FxXjN40THRA&s',
        comments: []
    },
    {
        id: 11,
        title: 'God of Martial Arts',
        thumbnail: 'https://i.pinimg.com/736x/e6/3e/ed/e63eed5f19aa27130921e5415118e1e7.jpg',
        description: 'In a world dominated by martial arts, a powerful warrior seeks to regain his strength and uncover the secrets of his past. His journey is filled with battles, training, and uncovering deep conspiracies.',
        image: 'https://i.pinimg.com/736x/e6/3e/ed/e63eed5f19aa27130921e5415118e1e7.jpg',
        comments: []
    },
    {
        id: 12,
        title: 'My Dear Cold-Blooded King',
        thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhSrNa7Bir_ScpGX75S-IxTs5Bhx9O7hsOqg&s',
        description: 'Set in a historical setting, this action romance webtoon follows a strong female lead who finds herself entangled with a mysterious and powerful king. The series combines romance with thrilling action sequences.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhSrNa7Bir_ScpGX75S-IxTs5Bhx9O7hsOqg&s',
        comments: []
    },
    
];


// Render Navigation
function renderNav() {
    const navHtml = `
        <div class="nav">
            <button onclick="renderPage('home')">Home</button>
            <button onclick="renderPage('favorites')">Favorites</button>
            ${currentUser ? `<button onclick="logout()">Logout (${currentUser})</button>` : `<button onclick="renderLoginPage()">Login</button>`}
        </div>
    `;
    document.querySelector('.nav')?.remove(); 
    document.getElementById('app').insertAdjacentHTML('afterbegin', navHtml);
}

// Render page based on the selected option
function renderPage(page) {
    renderNav(); 

    const appDiv = document.querySelector('.content');
    appDiv.innerHTML = ''; 

    if (page === 'home') {
        appDiv.innerHTML = `
            <div class="home-page">
                <h1>Top 10 Popular Webtoons</h1>
                <ul class="toc">
                    ${webtoons.map(webtoon => `<li><a href="#" onclick="renderWebtoonDetail(${webtoon.id})">${webtoon.title}</a></li>`).join('')}
                </ul>
                <div class="webtoon-list">
                    ${webtoons.map(webtoon => createWebtoonCard(webtoon)).join('')}
                </div>
            </div>
        `;
    } else if (page === 'favorites') {
        appDiv.innerHTML = `
            <div class="favorites-page">
                <h1>Your Favorite Webtoons</h1>
                <div class="webtoon-list">
                    ${favorites.length === 0 ? `<p>You have no favorite webtoons yet.</p>` : favorites.map(favId => createWebtoonCard(webtoons.find(w => w.id === favId), true)).join('')}
                </div>
            </div>
        `;
    }
}

// Create a Webtoon Card
function createWebtoonCard(webtoon, isFavorite = false) {
    return `
        <div class="webtoon-card" onclick="renderWebtoonDetail(${webtoon.id})">
            <img src="${webtoon.thumbnail}" alt="${webtoon.title}" />
            <h2>${webtoon.title}</h2>
            <p>${webtoon.description}</p>
            ${isFavorite ? '' : `<button onclick="addToFavorites(${webtoon.id}, event)">Add to Favorites</button>`}
        </div>
    `;
}

// Initial page load
window.onload = () => {
    renderPage('home'); 
};


// Render Webtoon Detail Page
function renderWebtoonDetail(id) {
    const webtoon = webtoons.find(w => w.id === id);
    const appDiv = document.getElementById('app');
    appDiv.innerHTML = `
        <div class="webtoon-detail">
            <h1>${webtoon.title}</h1>
            <img src="${webtoon.image}" alt="${webtoon.title}" class="large-image" />
            <p>${webtoon.description}</p>
            <div>
                <h3>User Comments</h3>
                <ul id="comments-list">
                    ${webtoon.comments.length ? webtoon.comments.map(comment => `<li>${comment}</li>`).join('') : '<li>No comments yet.</li>'}
                </ul>
                <textarea id="comment-input" placeholder="Add a comment..."></textarea>
                <button onclick="addComment(${webtoon.id})">Submit Comment</button>
            </div>
        </div>
    `;
}

// Add Comment
function addComment(webtoonId) {
    const commentInput = document.getElementById('comment-input');
    const webtoon = webtoons.find(w => w.id === webtoonId);
    if (commentInput.value) {
        webtoon.comments.push(commentInput.value);
        commentInput.value = '';
        renderWebtoonDetail(webtoonId); 
    } else {
        alert("Comment cannot be empty.");
    }
}
