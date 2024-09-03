# Chatbot Demo

Este proyecto es un chatbot demo que permite a los usuarios interactuar con un modelo de lenguaje generativo a través de una interfaz web. El chatbot utiliza la API de Google Gemini para generar respuestas a los mensajes del usuario.

## Funcionalidades

- **Enviar Mensajes**: Los usuarios pueden escribir mensajes en la caja de entrada. Al presionar "Enter" o hacer clic en el botón de enviar, el mensaje se envía al chatbot.
- **Recibir Respuestas**: El chatbot responde a los mensajes del usuario con contenido generado por la API de Google Gemini.
- **Interfaz Dinámica**: La interfaz se ajusta automáticamente al contenido del chat, incluyendo la altura del campo de entrada y el desplazamiento del chat a la parte inferior cuando se reciben nuevas respuestas.
- **Manejo de Errores**: Si ocurre un error al intentar generar una respuesta, se mostrará un mensaje de error en el chat.

## Instalación

Este chatbot está basado en JavaScript y no requiere instalación de dependencias adicionales. Para integrarlo en un proyecto web:

1. **HTML y CSS**: Asegúrese de tener una estructura HTML que incluya los elementos necesarios con las clases especificadas en el código (e.g., `.chatbot-toggler`, `.chatbox`, `.chat-input`).
2. **JavaScript**: Incluya el código JavaScript proporcionado en un archivo de script o dentro de etiquetas `<script>` en su HTML.
3. **API Key**: Reemplace la clave de API y la URL en la configuración (`API_CONFIG`) con sus credenciales propias.

## Uso

1. **Abrir/Minimizar Chatbot**: Haga clic en el botón de alternancia del chatbot para abrir o cerrar la ventana del chat.
2. **Escribir Mensaje**: Escriba su mensaje en el campo de entrada. La altura del campo se ajustará automáticamente.
3. **Enviar Mensaje**: Presione "Enter" o haga clic en el ícono de enviar para enviar su mensaje.
4. **Ver Respuesta**: Espere a que el chatbot genere y muestre una respuesta. El chat se desplazará automáticamente hacia abajo si es necesario.

## Personalización

El código es modular y puede personalizarse fácilmente para ajustarse a necesidades específicas, como cambiar el diseño del chat o agregar funcionalidades adicionales.

## Notas

- Este demo utiliza una clave de API para acceder a la API de Google Gemini. Asegúrese de mantener su clave segura y no compartirla públicamente.
- El tiempo de respuesta depende de la conexión a la API y del modelo de lenguaje utilizado.
