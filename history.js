document.addEventListener('DOMContentLoaded', function() {
    // Sample history data
    const historyItems = [
        { id: 1, name: 'Max', breed: 'German Shepherd', date: '2023-10-15', emoji: '🐕' },
        { id: 2, name: 'Bella', breed: 'Labrador', date: '2023-10-10', emoji: '🐕' },
        { id: 3, name: 'Charlie', breed: 'Beagle', date: '2023-10-05', emoji: '🐕' },
        { id: 4, name: 'Luna', breed: 'Husky', date: '2023-09-28', emoji: '🐕' },
        { id: 5, name: 'Cooper', breed: 'Golden Retriever', date: '2023-09-20', emoji: '🐕' }
    ];

    // Populate history list
    const historyList = document.querySelector('.history-list');
    
    historyItems.forEach(item => {
        const historyItem = document.createElement('div');
        historyItem.className = 'history-item';
        historyItem.dataset.id = item.id;
        
        const date = new Date(item.date);
        const formattedDate = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
        
        historyItem.innerHTML = `
            <div class="history-profile">
                <div class="dog-pic">${item.emoji}</div>
                <div>
                    <div class="dog-name">${item.name}</div>
                    <div class="dog-breed">${item.breed}</div>
                    <div class="history-date">${formattedDate}</div>
                </div>
            </div>
            <button class="remove-btn">Remove</button>
        `;
        
        historyList.appendChild(historyItem);
    });

    // Remove button functionality
    document.querySelectorAll('.remove-btn').forEach(button => {
        button.addEventListener('click', function() {
            const historyItem = this.closest('.history-item');
            historyItem.style.opacity = '0';
            
            setTimeout(() => {
                historyItem.remove();
                
                // If no history items left, show message
                if (document.querySelectorAll('.history-item').length === 0) {
                    const historyList = document.querySelector('.history-list');
                    historyList.innerHTML = '<div class="empty-history">No history items</div>';
                }
            }, 300);
        });
    });

    // Search functionality
    const searchInput = document.getElementById('search-history');
    
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        
        document.querySelectorAll('.history-item').forEach(item => {
            const dogName = item.querySelector('.dog-name').textContent.toLowerCase();
            const dogBreed = item.querySelector('.dog-breed').textContent.toLowerCase();
            const historyDate = item.querySelector('.history-date').textContent.toLowerCase();
            
            if (dogName.includes(searchTerm) || dogBreed.includes(searchTerm) || historyDate.includes(searchTerm)) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        });
    });
});