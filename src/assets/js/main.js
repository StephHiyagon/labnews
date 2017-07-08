const render = (root) =>{
  root.empty();

  const wrapper = $('<div class="wrapper"></div>');

  // setTimeout(function(){
  //   console.log("entraste");
    wrapper.append(Header(update));

    root.append(wrapper);
  // },5000);
  setTimeout(function(){
    wrapper.append(Primera(update));
  },3000);

  $(window).scroll(function(e) {
    const cursorY = $(window).scrollTop();
    console.log(cursorY);
    if (parseInt(cursorY) == 974) {
      wrapper.append(Segunda(update));
    }
    if(parseInt(cursorY)== 1715){
      wrapper.append(Tercera(update));
    }

    if(parseInt(cursorY)==2324){
      wrapper.append(Cuarta(update));
    }

    if(parseInt(cursorY)==2913){
      wrapper.append(Quinta(update));
    }

    if(parseInt(cursorY)==3331){
      wrapper.append(Footer(update));
    }
  });

  const update = function(){
    render(root);
  };


}

const state ={
  noticias:null,
  categorias:null,
  pintar:null
}

$(_ =>{

  $.get("/api/news",(data) =>{
    if(!data){ return alert('sin data')};

    state.noticias= data;
    console.log(state.noticias);
    console.log(state.noticias[0]);
  });

  $.get("/api/categories/",(data2) =>{
    if(!data2){ return alert('sin data')};

    state.categorias= data2;
    console.log(state.categorias);
    console.log(state.noticias[0]);
  });

  const root = $('#root');
  render(root);
});
