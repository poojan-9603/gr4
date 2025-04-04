document.addEventListener('DOMContentLoaded', function() {
    // Filter item click event
    document.querySelectorAll('.filter-item').forEach(item => {
        item.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    });

    // Reset button functionality
    document.querySelector('.reset-btn').addEventListener('click', function() {
        document.querySelectorAll('.filter-item').forEach(item => {
            item.classList.remove('active');
        });
    });

    // Apply button functionality
    document.querySelector('.apply-btn').addEventListener('click', function() {
        // Get selected filters
        const selectedFilters = {
            breeds: [],
            ages: [],
            personalities: []
        };

        // Get selected breeds
        document.querySelectorAll('.filter-group:nth-child(1) .filter-item.active').forEach(item => {
            selectedFilters.breeds.push(item.textContent);
        });

        // Get selected ages
        document.querySelectorAll('.filter-group:nth-child(2) .filter-item.active').forEach(item => {
            selectedFilters.ages.push(item.textContent);
        });

        // Get selected personalities
        document.querySelectorAll('.filter-group:nth-child(3) .filter-item.active').forEach(item => {
            selectedFilters.personalities.push(item.textContent);
        });

        // For now, just show what was selected
        if (selectedFilters.breeds.length || selectedFilters.ages.length || selectedFilters.personalities.length) {
            alert('Filters applied! Redirecting to home page with filtered results.');
            window.location.href = 'index.html';
        } else {
            alert('No filters selected. Please select at least one filter.');
        }
    });
});