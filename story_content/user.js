window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script1 = function()
{
  // Solución de Asistente Virtual para Storyline 360
// Utilizando Web Speech API (gratuita) y sistema de respuestas predefinidas

function askAI() {
  var player = GetPlayer();
  var question = player.GetVar("userQuestion");
  
  // 1. Obtener respuesta de la IA (sistema de respuestas predefinidas)
  var aiText = getAIResponse(question);
  
  // 2. Guardar la respuesta en una variable de Storyline (opcional)
  player.SetVar("aiResponse", aiText);
  
  // 3. Convertir texto a voz usando Web Speech API (gratuito)
  speakText(aiText);
}

// Función para obtener respuesta basada en palabras clave
function getAIResponse(question) {
  // Convertir la pregunta a minúsculas para facilitar la comparación
  var lowerQuestion = question.toLowerCase();
  
  // Sistema simple de respuestas basado en palabras clave
  if (lowerQuestion.includes("hola") || lowerQuestion.includes("saludos") || lowerQuestion.includes("buenos días")) {
    return "Hola, soy tu asistente virtual. ¿En qué puedo ayudarte hoy?";
  }
  else if (lowerQuestion.includes("gracias") || lowerQuestion.includes("agradezco")) {
    return "De nada. Estoy aquí para ayudarte.";
  }
  else if (lowerQuestion.includes("nombre") || lowerQuestion.includes("llamas")) {
    return "Soy el asistente virtual de este curso. Estoy aquí para responder tus preguntas.";
  }
  else if (lowerQuestion.includes("ayuda") || lowerQuestion.includes("ayudar")) {
    return "Puedo ayudarte con información sobre este curso. Pregúntame lo que necesites saber.";
  }
  // Puedes añadir tantas condiciones como necesites para tu curso específico
  else if (lowerQuestion.includes("módulo") || lowerQuestion.includes("modulo") || lowerQuestion.includes("lección")) {
    return "Este curso contiene varios módulos. Puedes navegar entre ellos usando el menú principal.";
  }
  // Respuesta por defecto cuando no se encuentra coincidencia
  else {
    return "Interesante pregunta. Permíteme sugerirte revisar el contenido del curso o contactar con el instructor para información más específica.";
  }
}

// Función para convertir texto a voz usando Web Speech API (gratuito)
function speakText(text) {
  // Verificar si el navegador soporta la API de síntesis de voz
  if ('speechSynthesis' in window) {
    // Crear una nueva instancia de SpeechSynthesisUtterance
    var utterance = new SpeechSynthesisUtterance(text);
    
    // Configurar el idioma (español)
    utterance.lang = 'es-ES';
    
    // Opcional: ajustar velocidad (0.1 a 10, 1 es normal)
    utterance.rate = 1;
    
    // Opcional: ajustar tono (0 a 2, 1 es normal)
    utterance.pitch = 1;
    
    // Opcional: ajustar volumen (0 a 1)
    utterance.volume = 1;
    
    // Opcional: seleccionar una voz específica (si está disponible)
    // Esto seleccionará una voz en español si está disponible
    var voices = window.speechSynthesis.getVoices();
    var spanishVoice = voices.find(function(voice) {
      return voice.lang.includes('es');
    });
    
    if (spanishVoice) {
      utterance.voice = spanishVoice;
    }
    
    // Reproducir el texto
    window.speechSynthesis.speak(utterance);
    
    // Opcional: mostrar mensaje de error si hay problemas
    utterance.onerror = function(event) {
      console.error('Error en la síntesis de voz:', event);
    };
  } else {
    // Mensaje de error si el navegador no soporta la API
    console.error('Este navegador no soporta la API de síntesis de voz.');
    // Opcional: mostrar un mensaje al usuario
    alert('Tu navegador no soporta la síntesis de voz. Por favor, utiliza un navegador moderno como Chrome, Edge o Safari.');
  }
}
}

};
