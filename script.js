// Elementos del DOM
const elements = {
  chatbotToggler: document.querySelector(".chatbot-toggler"),
  closeBtn: document.querySelector(".close-btn"),
  chatbox: document.querySelector(".chatbox"),
  chatInput: document.querySelector(".chat-input textarea"),
  sendChatBtn: document.querySelector(".chat-input span")
};

// Configuración de la API
const API_CONFIG = {
  KEY: "AIzaSyB3TRp7qQoitZGXNdsuWPe-_dFrszbZbzE",
  URL: "https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent"
};

// Estado del chat
let userMessage = "";
const inputInitHeight = elements.chatInput.scrollHeight;

// Funciones auxiliares
const createChatMessage = (message, isOutgoing) => {
  const li = document.createElement("li");
  li.classList.add("chat", isOutgoing ? "outgoing" : "incoming");
  
  const content = isOutgoing 
    ? `<p>${message}</p>`
    : `<span class="material-symbols-outlined">smart_toy</span><p>${message}</p>`;
  
  li.innerHTML = content;
  return li;
};

const scrollChatToBottom = () => elements.chatbox.scrollTo(0, elements.chatbox.scrollHeight);

const adjustInputHeight = () => {
  elements.chatInput.style.height = `${inputInitHeight}px`;
  elements.chatInput.style.height = `${elements.chatInput.scrollHeight}px`;
};

// Funciones principales
const generateResponse = async (chatElement) => {
  const messageElement = chatElement.querySelector("p");

  try {
    const response = await fetch(`${API_CONFIG.URL}?key=${API_CONFIG.KEY}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ 
        contents: [{ role: "user", parts: [{ text: userMessage }] }] 
      })
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.error.message);
    
    messageElement.textContent = data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, '$1');
  } catch (error) {
    messageElement.classList.add("error");
    messageElement.textContent = `Error: ${error.message}`;
  } finally {
    scrollChatToBottom();
  }
};

const handleChat = () => {
  userMessage = elements.chatInput.value.trim();
  if (!userMessage) return;

  elements.chatInput.value = "";
  adjustInputHeight();

  elements.chatbox.appendChild(createChatMessage(userMessage, true));
  scrollChatToBottom();

  setTimeout(() => {
    const incomingMessage = createChatMessage("Pensando...", false);
    elements.chatbox.appendChild(incomingMessage);
    scrollChatToBottom();
    generateResponse(incomingMessage);
  }, 600);
};

// Event listeners
elements.chatInput.addEventListener("input", adjustInputHeight);

elements.chatInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
    e.preventDefault();
    handleChat();
  }
});

elements.sendChatBtn.addEventListener("click", handleChat);
elements.closeBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
elements.chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));