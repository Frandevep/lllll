// Escuchar mensajes desde el popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "addAnnotation") {
      const annotation = request.annotation;
      const timestamp = request.timestamp;
      addAnnotationToVideo(annotation, timestamp);
    }
  });
  
  function addAnnotationToVideo(annotation, timestamp) {
    // Aquí puedes agregar la lógica para mostrar la anotación en el video
    console.log(`Anotacion: ${annotation} en el tiempo: ${timestamp}`);
  }