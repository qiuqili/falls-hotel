var tl = new TimelineLite();
tl.from(".title",2,{opacity:0,x:-100,ease:Back.easeOut},0)
  .from("ul",2,{opacity:0,x:100,ease:Back.easeOut},0)
  .staggerFrom("span,.component h1,p",1,{opacity:0,ease:Circ.easeOut},0.1,0)
  .staggerFrom(".details,.component img",1,{opacity:0,x:100,ease:Circ.easeOut},0.1,"0.3");
