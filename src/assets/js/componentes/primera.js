const Primera = (update) =>{
  console.log(state.noticias);
  // var img =state.noticias[0].img;
  // var title=state.noticias[0].title;
  // var brief=state.noticias[0].brief;
  // var img2 = state.noticias[1].img;
  // var title2=state.noticias[1].title;
  // var brief2= state.noticias[1].brief;

  // setTimeout(function(){
    console.log(state.noticias);
    var categoria =["Lo último","Opinión","Cultura","Perú","Tecnología","Mundo","Economía","Lifestyle","Deporte"];
    const section=$('<section class="principal"></section>');
    const navP =$('<nav class="navP col-md-12"></nav>');
    const ul =$('<ul class="navP__item col-md-10"></ul>');
    for(var i=0;i<9;i++){
      const li = $('<li class="navP__item--cat col-md-1">'+categoria[i]+'</li>');
      ul.append(li);
    }
    navP.append(ul);

    const primera=$('<div class="primera col-md-12"></div>');
    for(var i=0;i<4;i++){
      const imgP =$('<img src="assets/img/news/'+state.noticias[i].img+'" class="primera--img-'+i+' col-md-10 "/>');
      const titleP=$('<h2 class="primera--title-'+i+' col-md-8">'+state.noticias[i].title+'</h2>');
      const parrafoP=$('<p class="primera--parrafo-'+i+' col-md-5">'+state.noticias[i].brief+'</p>');

      primera.append(imgP);
      primera.append(titleP);
      primera.append(parrafoP);
    }


    section.append(navP);

    section.append(primera);

    // const segunda=$('<div class="segunda col-md-14"></div>');
    // const imgP2 =$('<img src="assets/img/news/'+img2+'" class="primera--img col-md-10"/>');
    // const titleP2=$('<h1 class="primera--title col-md-8">'+title2+'</h1>');
    // const parrafoP2=$('<p class="primera--parrafo col-md-5">'+brief2+'</p>');
    //
    //
    // // section.append(navP);
    // segunda.append(imgP2);
    // segunda.append(titleP2);
    // segunda.append(parrafoP2);
    // section.append(segunda);



    // state.pintar="primeraNoti";
    // update();

    return section;

  // },4000);


// }


};
