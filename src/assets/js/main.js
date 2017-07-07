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


  const root = $('#root');
  render(root);
});
