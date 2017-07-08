const Segunda = (update) =>{
  const section=$('<section class="mundo col-md-12"></section>');
  const segunda=$('<div class="segunda col-md-10"></div>');
  const name=$('<h2 class="col-md-4">'+state.categorias[1].title+'</h2>');
  const divA=$('<div class="separador"></div>');
  for(var i=4;i<14;i++){
    const segundaP=$('<div class="col-md-3 segunda--'+i+'"></div>');
    const imgP =$('<img src="assets/img/news/'+state.noticias[i].img+'" class="segunda--img-'+i+' col-md-12 "/>');
    const titleP=$('<h3 class="segunda--title-'+i+' col-md-10">'+state.noticias[i].title+'</h3>');


    segundaP.append(imgP);
    segundaP.append(titleP);
    segunda.append(segundaP);

  }

  section.append(name);
  name.append(divA);
  section.append(segunda);
   return section;
}
