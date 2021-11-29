Events.on(EventType.ClientLoadEvent, e => { 
Vars.ui.custom.buttons.button("@scripts.maps-pack.authors-top",Icon.info,()=>{ 
var authors = new BaseDialog("@scripts.maps-pack.authors-top"); 
authors.cont.add("@scripts.maps-pack.top").row(); 
authors.addCloseButton(); 
authors.show();
}); 
})
