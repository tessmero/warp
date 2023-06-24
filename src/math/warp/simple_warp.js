class SimpleWarp extends Warp {
    
    update(){
        this.ellipse = [canvas.width/2,canvas.height/2,75,55] //x,y,a,b
        this.r2 = [Math.pow(this.ellipse[2],2),Math.pow(this.ellipse[3],2)]
        this.edge_width = 10
    }
    
    warpPoint(x,y){

        x = mod(x,canvas.width)
        y = mod(y,canvas.height)
        
        var wx = this.ellipse[0]
        var wy = this.ellipse[1]
        var wa = this.ellipse[2]
        var wb = this.ellipse[3]

        var dx = x-wx;
        var dy = y-wy;
        var inout = dx*dx / this.r2[0] + dy*dy / this.r2[1]
        if( inout > 1 ){
            return [x,y]
        }

        var t = (1.0-inout)
        t = Math.sqrt(t) * (t) + t*(1.0-t)
        var sr = t * this.edge_width
        var angle = Math.atan2(dy / wb, dx / wa);  
        
        return [wx + (wa-sr) * Math.cos(angle), wy + (wb-sr)*Math.sin(angle)]
    }
}