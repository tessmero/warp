function updateMousePos(event){
    
    var rect = canvas.getBoundingClientRect();
    var scaleX = canvas.width / rect.width;
    var scaleY = canvas.height / rect.height;
    canvasMouseX = (event.clientX - rect.left) * scaleX;
    canvasMouseY = (event.clientY - rect.top) * scaleY;
    
    mouse_forget_countdown = mouse_forget_duration;
    
}