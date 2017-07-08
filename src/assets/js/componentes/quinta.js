const Quinta = (update) =>{
  const section=$('<section class="opinion col-md-12"></section>');
  const quinta=$('<div class="quinta col-md-10"></div>');
  const name=$('<h2 class="col-md-4">'+state.categorias[4].title+'</h2>');
  const divA=$('<div class="separador"></div>');
  for(var i=24;i<28;i++){
    const quintaP=$('<div class="col-md-3 quinta--'+i+'"></div>');
    const imgP =$('<img src="assets/img/news/'+state.noticias[i].img+'" class="quinta--img-'+i+' col-md-12 "/>');
    const titleP=$('<h3 class="quinta--title-'+i+' col-md-10">'+state.noticias[i].title+'</h3>');

    quintaP.append(imgP);
    quintaP.append(titleP);
    quinta.append(quintaP);
  }
  

  section.append(name);
  name.append(divA);
  section.append(quinta);
   return section;
}
