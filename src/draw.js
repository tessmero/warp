


function avg(p0,p1,r){
    return [p0[0]*(1.0-r)+p1[0]*r,p0[1]*(1.0-r)+p1[1]*r]
}
    
// Render graphics
function draw(fps, t) {
   
   var n_particles = Math.floor(canvas.width*canvas.height*particles_per_screen_pixel)
   
    ctx.fillStyle = 'black'
    ctx.fillRect( 0, 0, canvas.width, canvas.height )

    ctx.fillStyle = 'white'
    resetRand()
    for( var i = 0 ; i < n_particles ; i++ ){
        var a = anim_angle + rand() * Math.PI*2
        var r = rand() + .5
        var x = pan_pos[0] + rand() * canvas.width + r*Math.cos(a * Math.floor(rand()*10))
        var y = pan_pos[1] + rand() * canvas.height //+ r*Math.sin(a)
        var txy0 = warp.warpPoint(x,y)
        if( next_warp ){
            var txy1 = next_warp.warpPoint(x,y)
            var txy = avg(txy0,txy1,warp_transition_r)
        } else {
            var txy = txy0
        }
        ctx.fillRect( txy[0]-particle_radius, txy[1]-particle_radius, 2*particle_radius, 2*particle_radius )
    }

    // draw logo
    ctx.font = "italic 20px Blippo, fantasy";
    ctx.fontWeight = "35px";
    ctx.textAlign = "center";
    ctx.fillStyle = "white";
    var x = canvas.width/2;
    var y = canvas.height/2;
    var oy = 5
    var dy = 10
    var ddr = 1
    ctx.fillStyle = "white";
    for( var ddx = -ddr ; ddx<=ddr ; ddx++ ){
        for( var ddy = -ddr ; ddy<=ddr ; ddy++ ){
            ctx.fillText("tessmero", x+ddx, y+oy-dy+ddy);
            ctx.fillText(". github . io", x+ddx, y+oy+dy+ddy);
        }      
    }        
    ctx.fillStyle = "black";
    ctx.fillText("tessmero", x, y+oy-dy);
    ctx.fillText(". github . io", x, y+oy+dy);
    

    // Draw FPS on the screen
    //ctx.font = "25px Arial";
    //ctx.textAlign = "left";
    //ctx.fillStyle = "white";
    //var x = 10
    //var y = 100
    //ctx.fillText("FPS: " + fps, x, y);
    
    // draw mouse location
    //if( mouse_forget_countdown > 0 ){
    //    ctx.fillStyle = "red"
    //    ctx.beginPath()
    //    ctx.arc( canvasMouseX, canvasMouseY, 10, 0, Math.PI*2 )
    //    ctx.fill()
    //}
    
    //y += 30
    //ctx.fillText(`camera: ${cameraX.toFixed(2)}, ${cameraY.toFixed(2)}, ${zoomLevel.toFixed(2)}`, x, y);
    //y += 30
    //ctx.fillText(gameState, x, y);
    //y += 30 
    //ctx.fillText(`canvas pos: ${canvasMouseX}, ${canvasMouseY}`, x, y);
    //y += 30
    //ctx.fillText(`virtual pos: ${virtualMouseX}, ${virtualMouseY}`, x, y);
}