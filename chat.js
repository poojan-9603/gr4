document.addEventListener('DOMContentLoaded', function() {
    // Sample chat data
    const chats = [
        { id: 1, name: 'Max', breed: 'German Shepherd', lastMessage: 'Would you like to meet at the park tomorrow?', emoji: '🐕' },
        { id: 2, name: 'Bella', breed: 'Labrador', lastMessage: 'My dog loves playing fetch!', emoji: '🐕' },
        { id: 3, name: 'Charlie', breed: 'Beagle', lastMessage: 'Thanks for the playdate yesterday!', emoji: '🐕' },
        { id: 4, name: 'Luna', breed: 'Husky', lastMessage: 'Luna is very excited to meet your dog.', emoji: '🐕' }
    ];

    // Sample messages for a conversation
    const sampleMessages = [
        { sender: 'them', text: 'Hi there! I saw your dog profile and thought our dogs might get along well.' },
        { sender: 'me', text: 'Hello! That sounds great. What kind of dog do you have?' },
        { sender: 'them', text: 'I have a German Shepherd named Max. He\'s very friendly and loves to play fetch.' },
        { sender: 'me', text: 'That\'s awesome! My dog loves playing fetch too. Would you like to meet at the dog park sometime?' },
        { sender: 'them', text: 'Definitely! How about this weekend? Saturday around 2pm?' },
        { sender: 'me', text: 'Saturday at 2pm works for me. Which dog park do you usually go to?' },
        { sender: 'them', text: 'We usually go to Central Dog Park. It has a nice open area for dogs to run around.' },
        { sender: 'me', text: 'Perfect! I know that park. We\'ll see you there on Saturday at 2pm.' },
        { sender: 'them', text: 'Great! Looking forward to it. Max will be so excited!' },
        { sender: 'me', text: 'Same here! See you then!' }
    ];

    // Populate chat list
    const chatsContainer = document.querySelector('.chats');
    
    chats.forEach(chat => {
        const chatItem = document.createElement('div');
        chatItem.className = 'chat-item';
        chatItem.dataset.id = chat.id;
        
        chatItem.innerHTML = `
            <div class="dog-pic">${chat.emoji}</div>
            <div class="chat-info">
                <div class="chat-name">${chat.name}</div>
                <div class="chat-preview">${chat.lastMessage}</div>
            </div>
        `;
        
        chatItem.addEventListener('click', function() {
            // Remove active class from all chats
            document.querySelectorAll('.chat-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Add active class to clicked chat
            this.classList.add('active');
            
            // Show chat conversation
            showChatConversation(chat);
        });
        
        chatsContainer.appendChild(chatItem);
    });

    // Function to show chat conversation
    function showChatConversation(chat) {
        const chatHeader = document.querySelector('.chat-header');
        const messagesContainer = document.querySelector('.messages');
        
        // Update chat header
        chatHeader.innerHTML = `
            <div class="header-profile-pic">${chat.emoji}</div>
            <div>
                <div class="header-name">${chat.name}</div>
                <div class="header-breed">${chat.breed}</div>
            </div>
        `;
        
        // Clear previous messages
        messagesContainer.innerHTML = '';
        
        // Add messages
        sampleMessages.forEach(message => {
            const messageElement = document.createElement('div');
            messageElement.className = `message ${message.sender === 'me' ? 'sent' : 'received'}`;
            messageElement.textContent = message.text;
            
            messagesContainer.appendChild(messageElement);
        });
        
        // Scroll to bottom of messages
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    // Send message functionality
    const messageInput = document.getElementById('message-text');
    const sendButton = document.querySelector('.send-btn');
    
    function sendMessage() {
        const messageText = messageInput.value.trim();
        
        if (messageText) {
            const messagesContainer = document.querySelector('.messages');
            
            // Create new message element
            const messageElement = document.createElement('div');
            messageElement.className = 'message sent';
            messageElement.textContent = messageText;
            
            // Add message to container
            messagesContainer.appendChild(messageElement);
            
            // Clear input
            messageInput.value = '';
            
            // Scroll to bottom of messages
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }
    }
    
    sendButton.addEventListener('click', sendMessage);
    
    messageInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    // Search functionality
    const searchInput = document.getElementById('search-chat');
    
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        
        document.querySelectorAll('.chat-item').forEach(item => {
            const chatName = item.querySelector('.chat-name').textContent.toLowerCase();
            const chatPreview = item.querySelector('.chat-preview').textContent.toLowerCase();
            
            if (chatName.includes(searchTerm) || chatPreview.includes(searchTerm)) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        });
    });
});