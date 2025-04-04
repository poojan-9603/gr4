document.addEventListener('DOMContentLoaded', function() {
    // Sample chat data - updated to focus more on dogs and playdates
    const chats = [
        { id: 1, name: "Emma", pet: "Bella", breed: "Labrador", lastMessage: "Hi Sarah! That sounds great! Bella has tons of energy too and enjoys high-energy play. I think they'd get along really well." },
        { id: 2, name: "John", pet: "Max", breed: "German Shepherd", lastMessage: "Max is ready for the park tomorrow!" },
        { id: 3, name: "Alice", pet: "Luna", breed: "Beagle", lastMessage: "Luna loved meeting your dog yesterday." },
        { id: 4, name: "Michael", pet: "Charlie", breed: "Poodle", lastMessage: "Charlie needs a playdate soon." },
        { id: 5, name: "Sophia", pet: "Bailey", breed: "Corgi", lastMessage: "Bailey is recovering well from surgery." },
        { id: 6, name: "David", pet: "Cooper", breed: "Bulldog", lastMessage: "Cooper's birthday party is next week!" },
        { id: 7, name: "Olivia", pet: "Rocky", breed: "Husky", lastMessage: "Rocky misses your dog, when can we meet?" },
        { id: 8, name: "James", pet: "Daisy", breed: "Golden Retriever", lastMessage: "Daisy just got her new toys." }
    ];

    // Sample messages for Emma's chat - updated to be more dog-focused
    const emmaMessages = [
        { sender: "Sarah", content: "Hey Emma! I saw Bella's profile—she seems like a great match for my Golden Retriever, Milo. He's super energetic and loves to play. Want to set up a playdate?" },
        { sender: "Emma", content: "Hi Sarah! That sounds great! Bella has tons of energy too and enjoys high-energy play. I think they'd get along really well." }
    ];

    // Populate chat list
    const chatListElement = document.querySelector('.chats');
    
    chats.forEach(chat => {
        const chatItem = document.createElement('div');
        chatItem.classList.add('chat-item');
        chatItem.dataset.id = chat.id;
        
        if (chat.id === 1) {
            chatItem.classList.add('active');
        }
        
        // Updated to show pet name and breed in the chat list
        chatItem.innerHTML = `
            <div class="profile-pic">${chat.pet.charAt(0)}</div>
            <div class="chat-info">
                <div class="chat-name">${chat.name}'s ${chat.pet}</div>
                <div class="chat-preview">${chat.breed}</div>
            </div>
        `;
        
        chatListElement.appendChild(chatItem);
    });

    // Rest of your code remains the same
    // ...
}