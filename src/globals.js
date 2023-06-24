
// graphics context
var canvas;
var ctx;
var graphics_scale = 2;

// mouse
var canvasMouseX = 0 //pixels
var canvasMouseY = 0 //pixels
var mouse_forget_countdown = 0 //ms
var mouse_forget_duration = 3000 //ms

// environment
var particles_per_screen_pixel = 4e-2
var particle_radius = 1


// environment tranformation
var warp_sequence = []
var warp = new SimpleWarp()
var next_warp = null
var warp_transition_r = 1
var warp_transition_dr = 1e-2 // fraction per ms
var warp_change_odds = 1e-4 // chance of change per ms

// global environment movement
var pan_pos = [0,0]
var pan_vel = [0,.15]
var target_pan_vel = [0,.17] // target value for pan_vel
var max_wind_speed = 2   // max for pan_vel[0]
var pan_change_speed = 1e-1 // accel per ms
var wind_change_odds = 1e-4 // chance of change per ms

// individual particles movement
var anim_angle = 0
var anim_speed = .0005