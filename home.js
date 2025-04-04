document.addEventListener('DOMContentLoaded', function() {
    // Sample dog data - expanded to 15 profiles
    const dogs = [
        { id: 1, name: 'Max', breed: 'German Shepherd', age: 4, size: 'Large', vaccination: 'Up to date', location: '3 miles away', temperament: 'Protective', ownerName: 'Jack', experience: 'Experienced', emoji: '🐕' },
        { id: 2, name: 'Bella', breed: 'Labrador', age: 2, size: 'Medium', vaccination: 'Up to date', location: '5 miles away', temperament: 'Friendly', ownerName: 'Emma', experience: 'Intermediate', emoji: '🐕' },
        { id: 3, name: 'Charlie', breed: 'Beagle', age: 3, size: 'Small', vaccination: 'Up to date', location: '2 miles away', temperament: 'Curious', ownerName: 'Michael', experience: 'Beginner', emoji: '🐕' },
        { id: 4, name: 'Luna', breed: 'Husky', age: 5, size: 'Large', vaccination: 'Partial', location: '7 miles away', temperament: 'Independent', ownerName: 'Sophia', experience: 'Experienced', emoji: '🐕' },
        { id: 5, name: 'Cooper', breed: 'Golden Retriever', age: 1, size: 'Medium', vaccination: 'Up to date', location: '4 miles away', temperament: 'Gentle', ownerName: 'Noah', experience: 'Intermediate', emoji: '🐕' },
        { id: 6, name: 'Lucy', breed: 'Poodle', age: 6, size: 'Small', vaccination: 'Up to date', location: '6 miles away', temperament: 'Smart', ownerName: 'Olivia', experience: 'Experienced', emoji: '🐕' },
        { id: 7, name: 'Bailey', breed: 'Corgi', age: 2, size: 'Small', vaccination: 'Up to date', location: '1 mile away', temperament: 'Playful', ownerName: 'William', experience: 'Beginner', emoji: '🐕' },
        { id: 8, name: 'Rocky', breed: 'Bulldog', age: 4, size: 'Medium', vaccination: 'Up to date', location: '3 miles away', temperament: 'Calm', ownerName: 'Ava', experience: 'Intermediate', emoji: '🐕' },
        { id: 9, name: 'Daisy', breed: 'Dachshund', age: 3, size: 'Small', vaccination: 'Partial', location: '5 miles away', temperament: 'Energetic', ownerName: 'James', experience: 'Beginner', emoji: '🐕' },
        { id: 10, name: 'Milo', breed: 'Shih Tzu', age: 7, size: 'Small', vaccination: 'Up to date', location: '2 miles away', temperament: 'Affectionate', ownerName: 'Charlotte', experience: 'Experienced', emoji: '🐕' },
        { id: 11, name: 'Zoe', breed: 'Boxer', age: 2, size: 'Large', vaccination: 'Up to date', location: '4 miles away', temperament: 'Energetic', ownerName: 'Benjamin', experience: 'Intermediate', emoji: '🐕' },
        { id: 12, name: 'Jack', breed: 'Australian Shepherd', age: 3, size: 'Medium', vaccination: 'Up to date', location: '6 miles away', temperament: 'Intelligent', ownerName: 'Mia', experience: 'Experienced', emoji: '🐕' },
        { id: 13, name: 'Sadie', breed: 'Chihuahua', age: 5, size: 'Small', vaccination: 'None', location: '1 mile away', temperament: 'Sassy', ownerName: 'Elijah', experience: 'Beginner', emoji: '🐕' },
        { id: 14, name: 'Chopper', breed: 'Terrier Mix', age: 5, size: 'Small', vaccination: 'None', location: '7 miles away', temperament: 'Aggressive', ownerName: 'Jack', experience: 'New', emoji: '🐕' },
        { id: 15, name: 'Toby', breed: 'Pit Bull', age: 4, size: 'Large', vaccination: 'Up to date', location: '3 miles away', temperament: 'Loyal', ownerName: 'Amelia', experience: 'Experienced', emoji: '🐕' }
    ];

    let currentDogIndex = 0;
    
    // Function to show a random dog profile
    function showRandomDog() {
        // Get a random index
        currentDogIndex = Math.floor(Math.random() * dogs.length);
        showDogProfile(dogs[currentDogIndex]);
    }
    
    // Function to show the next dog profile
    function showNextDog() {
        currentDogIndex = (currentDogIndex + 1) % dogs.length;
        showDogProfile(dogs[currentDogIndex]);
    }
    
    // Function to display a dog profile
    function showDogProfile(dog) {
        const dogDrawing = document.querySelector('.dog-drawing');
        const dogInfo = document.querySelector('.dog-info');
        
        dogDrawing.innerHTML = `
            <div class="dog-image">${dog.emoji}</div>
        `;
        
        dogInfo.innerHTML = `
            <div class="dog-details">
                <h2>Name: ${dog.name}</h2>
                <p>Age: ${dog.age}</p>
                <p>Size: ${dog.size}</p>
                <p>Vaccination Status: ${dog.vaccination}</p>
                <p>Location: ${dog.location}</p>
                <p>Temperament: ${dog.temperament}</p>
                <div class="owner-info">
                    <p>Owner Name: ${dog.ownerName}</p>
                    <p>Experience: ${dog.experience}</p>
                </div>
            </div>
        `;
    }
    
    // Show a random dog when the page loads
    showRandomDog();
    
    // Next button functionality
    document.querySelector('.reject-btn').addEventListener('click', function() {
        showNextDog();
    });
    
    // Close button functionality (same as next)
    document.querySelector('.close-btn').addEventListener('click', function(e) {
        e.preventDefault();
        showNextDog();
    });
    
    // Message button functionality
    document.querySelector('.message-btn').addEventListener('click', function() {
        window.location.href = 'chat.html';
    });
});