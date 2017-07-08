const Header = (update) =>{
  console.log("entraste al header");

  const header = $('<header class="col-xs-12 col-md-12"></header>');
  const headerS= $('<div class="navH col-xs-12 col-md-12"></div>');
  const divI= $('<div class="nav col-xs-4 col-md-4"></div>');
  const nav =$('<nav class="nav__section col-xs-3 col-md-3"></nav>');
  const menu = $('<div class="nav__section--ico col-xs-2 col-md-2"></div>');
  const menuN =$('<div class="nav__section--name col-xs-2 col-md-6">SECTION</div>');
  const search =$('<div class="nav__search col-xs-3 col-md-3"></div>');
  const searchI = $('<div class="nav__search--ico col-xs-2 col-md-2"></div>');
  const searchN = $('<div class="nav__search--name col-xs-6 col-md-6">SEARCH</div>');
  const redes = $('<div class="nav__redes col-md-4"></div>');
  const face = $('<img class="nav__redes--face col-md-4" src="assets/img/fb.png"></img>');
  const twit = $('<img class="nav__redes--twit col-md-4" src="assets/img/tw.png"></img>');
  const link = $('<img class="nav__redes--link col-md-4" src="assets/img/in.png"></img>');
  const hr= $('<hr/>');
  const logoD =$('<div class="logo col-md-12"></div>');
  const logo= $('<img class="logo__imagen col-md-4"src="assets/img/logoicon.png" alt="logo-laboratoria"/>');
  const tiempo=$('<div class="tiempo"></div>');
  const fecha =$('<div class="tiempo__fecha">Lunes, Junio 12 de 2017</div>');
  const clima =$('<img class="tiempo__clima" src="assets/img/cloud.png"></img>');
  const temp = $('<div class="tiempo__temp">22°</div>');

  header.append(headerS);
  headerS.append(divI);
  divI.append(nav);
  divI.append(search);
  nav.append(menu);
  nav.append(menuN);
  search.append(searchI);
  search.append(searchN);
  headerS.append(redes);
  redes.append(face);
  redes.append(twit);
  redes.append(link);
  header.append(hr);
  header.append(logoD);
  logoD.append(logo);
  header.append(tiempo);
  tiempo.append(fecha);
  tiempo.append(clima);
  tiempo.append(temp);




  return header;
}
