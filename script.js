const BASE_URL = 'https://generator.base.artblocks.io/0x0000000080d04343d60d06e1a36aaf46c9242805/';

function getTokenIdsFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const tokens = params.get('tokens');
    return tokens ? tokens.split(',').map(t => t.trim()) : [];
}

function calculateLayout(count) {
    if (count === 1) return { cols: 1, rows: 1 };
    if (count === 2) return { cols: 2, rows: 1 };
    if (count === 3) return { cols: 3, rows: 1 };
    if (count === 4) return { cols: 2, rows: 2 };
    if (count === 5) return { cols: 5, rows: 1 };
    if (count === 6) return { cols: 3, rows: 2 };
    
    // For more than 6, create a balanced grid
    const cols = Math.ceil(Math.sqrt(count));
    const rows = Math.ceil(count / cols);
    return { cols, rows };
}

function createIframes(tokenIds) {
    const container = document.getElementById('container');
    const layout = calculateLayout(tokenIds.length);
    
    container.style.gridTemplateColumns = `repeat(${layout.cols}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${layout.rows}, 1fr)`;

    tokenIds.forEach(tokenId => {
        const wrapper = document.createElement('div');
        wrapper.className = 'iframe-wrapper';
        
        const iframe = document.createElement('iframe');
        iframe.src = BASE_URL + tokenId;
        iframe.loading = 'lazy'; // Enable lazy loading for better performance
        
        wrapper.appendChild(iframe);
        container.appendChild(wrapper);
    });
}

// Initialize the page
const tokenIds = getTokenIdsFromUrl();
createIframes(tokenIds); 