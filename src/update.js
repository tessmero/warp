

function fitToContainer(){
  canvas.style.width='100%';
  canvas.style.height='100%';
  
  if( canvas.offsetHeight > canvas.offsetWidth ){
      canvas.style.height=`${canvas.offsetWidth}px`;
  } 
  
  canvas.width  = canvas.offsetWidth/graphics_scale;
  canvas.height = canvas.offsetHeight/graphics_scale;
}

function update(dt) {
    fitToContainer()
    
    // transition between warp functions
    warp_transition_r = Math.min( warp_transition_r+warp_transition_dr, 1.0 )
    if( (warp_transition_r >= 1) & (Math.random() < warp_change_odds*dt)){
        warp_transition_r = 0;
        if( next_warp ){
            warp = next_warp;
        }
        next_warp = getNextWarp()
    }
    
      
      warp.update()
      if( next_warp ){
        next_warp.update()
      }
  
    // automatically change env movement if no recent mouse action
    mouse_forget_countdown = Math.max(0,mouse_forget_countdown-dt)
    if( mouse_forget_countdown <= 0 ){
        if( Math.random() < (wind_change_odds*dt) ){
            var old_wind_speed = target_pan_vel[0]
            target_pan_vel[0] = (Math.random()*2-1) * max_wind_speed
            if( Math.sign(old_wind_speed)!=0 & (Math.sign(target_pan_vel[0])!=Math.sign(old_wind_speed)) ){
                target_pan_vel[0] = 0
            }
            target_pan_vel[1] = .15
        }
        
    // move environment based on mouse pos
    } else {
        target_pan_vel[0]  = max_wind_speed * (canvasMouseX - canvas.width/2) / (canvas.width/2)
        target_pan_vel[1]  = max_wind_speed * (canvasMouseY - canvas.height/2) / (canvas.height/2)
    }
    
    // accel environment to target velocity
    var dx = target_pan_vel[0]-pan_vel[0]
    var dy = target_pan_vel[1]-pan_vel[1]
    if( dx*dx + dx*dy > pan_change_speed*pan_change_speed ){
        var angle = Math.atan2(dy,dx)
        pan_vel[0] += pan_change_speed*Math.cos(angle)
        pan_vel[1] += pan_change_speed*Math.sin(angle)
    }
    
    // update environment
    anim_angle = mod(anim_angle+anim_speed*dt,Math.PI*2)
    pan_pos[0] += pan_vel[0]
    pan_pos[1] += pan_vel[1]
}