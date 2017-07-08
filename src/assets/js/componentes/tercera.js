const Tercera = (update) =>{
  const section=$('<section class="tech col-md-12"></section>');
  const tercera=$('<div class="tercera col-md-10"></div>');
  const name=$('<h2 class="col-md-4">'+state.categorias[2].title+'</h2>');
  const divA=$('<div class="separador"></div>');
  for(var i=14;i<19;i++){
    const terceraP=$('<div class="col-md-3 tercera--'+i+'"></div>');
    const imgP =$('<img src="assets/img/news/'+state.noticias[i].img+'" class="tercera--img-'+i+' col-md-12 "/>');
    const titleP=$('<h3 class="tercera--title-'+i+' col-md-10">'+state.noticias[i].title+'</h3>');


    terceraP.append(imgP);
    terceraP.append(titleP);
    tercera.append(terceraP);

  }

  section.append(name);
  name.append(divA);
  section.append(tercera);
   return section;
}
