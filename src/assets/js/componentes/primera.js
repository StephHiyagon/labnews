const Primera = (update) =>{
  console.log(state.noticias);
  var img =state.noticias[0].img;
  var title=state.noticias[0].title;
  var brief=state.noticias[0].brief;

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
    const primera=$('<div class="primera"></div>');
    const imgP =$('<img src="assets/img/news/'+img+'" class="primera--img"/>');
    const titleP=$('<h3 class="primera--title">'+title+'</h3>');
    const parrafoP=$('<p class="primera--parrafo">'+brief+'</p>');

    navP.append(ul);
    section.append(navP);
    primera.append(imgP);
    primera.append(titleP);
    primera.append(parrafoP);
    section.append(primera);



    // state.pintar="primeraNoti";
    // update();

    return section;

  // },4000);


// }


};
