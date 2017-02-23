var tl = new TimelineLite();
tl.from(".title",2,{opacity:0,x:-100,ease:Bounce.easeOut},0)
  .from("ul",2,{opacity:0,x:100,ease:Bounce.easeOut},0)
  .staggerFrom("span,.component h1,p",1,{scale:0,opacity:0,ease:Back.easeOut},0.2,0)
  .staggerFrom(".details,.component img",1,{scsle:0,opacity:0,x:100,ease:Back.easeInOut},0.2,"0.8");
