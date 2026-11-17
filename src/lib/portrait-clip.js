// Adapter keeps the upstream boot contract while using Saif's own static portrait.
export class PortraitClip {
 constructor(){this.ready=false;this.duration=8;this.el=new Image();this.el.src='public/saif/heroes/home.svg';this.w=600;this.h=900;this.el.currentTime=0;}
 async whenReady(){await this.el.decode();this.ready=true;}
 async play(){return true;}
 pause(){}
 poll(){return false;}
 box(){return [0,0,1,1];}
 seamFade(){return 1;}
}
