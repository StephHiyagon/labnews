const Cuarta = (update) =>{
  const section=$('<section class="educacion col-md-12"></section>');
  const cuarta=$('<div class="cuarta col-md-10"></div>');
  const name=$('<h2 class="col-md-4">'+state.categorias[3].title+'</h2>');
  const divA=$('<div class="separador"></div>');
  for(var i=19;i<25;i++){
    const cuartaP=$('<div class="col-md-3 cuarta--'+i+'"></div>');
    const imgP =$('<img src="assets/img/news/'+state.noticias[i].img+'" class="cuarta--img-'+i+' col-md-12 "/>');
    const titleP=$('<h3 class="cuarta--title-'+i+' col-md-10">'+state.noticias[i].title+'</h3>');

    cuartaP.append(imgP);
    cuartaP.append(titleP);
    cuarta.append(cuartaP);

  }

  section.append(name);
  name.append(divA);
  section.append(cuarta);
   return section;
}
