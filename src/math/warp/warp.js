class Warp {

    update(){
        throw new Error('Not implemented')
    }

    warpPoint(x,y){
        throw new Error('Not implemented');
    }
  
}


function mod(val,max){
    val = val%max
    if( val < 0 ){
        val += max
    }
    return val
}