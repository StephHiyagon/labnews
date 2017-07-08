Const Footer = (update) =>{
  const section = $('<footer class="foot col-md-10"></footer>');
  const div1=$('<div class="editado"></div>');
  const name =$('<img src="assets/img/logo-footer.png"/>');
  const info=$('<p class="editado--info"> © Editado por Laboratoria Av. José Pardo #601 Lima 1 Perú Copyright © Laboratoria.la Todos los derechos reservados.</p>');
  const div2=$('<div class="repre"></div>');
  const p1=$('<p class="repre__dg">DIRECTOR GENERAL:</p>');
  const p11=$('<p class="repre__dg--name">Francisco Miró Quesada Cantuarias</p>');
  const p2=$('<p class="repre__dp">DIRECTOR PERIODÍSTICO:</p>');
  const p21=$('<p class="repre__dp--name">Fernando Berckemeyer Olaechea</p>');
  const p3=$('<p class="repre__sus">SUSCRIPCIONES:</p>');
  const p31=$('<p class="repre__sus--correo">suscriptores@comercio.com.pe</p>');
  const p4=$('<p class="repre__po">PUBLICIDAD ONLINE:</p>');
  const p41=$('<p class="repre__po--correo">fonoavisos@comercio.com.pe</p>');
  const p5=$('<p class="repre__club">CLUB EL COMERCIO:</p>');
  const p51=$('<p class="repre__club--correo">clubelcomercio@comercio.com.pe</p>');
  const p52=$('<p class="repre__club--term">Compromiso de Autorregulación Comercial</p>');
  const div3=$('<div class="condiciones"></div>');
  const dp1=$('<p class="cond__1">TÉRMINOS Y CONDICIONES DE USO</p>');
  const dp2=$('<p class="cond__2">TRABAJA CON NOSOTROS</p>');
  const dp3=$('<p class="cond__3">LIBRO DE RECLAMACIONES</p>');
  const dp4=$('<p class="cond__4">SEDES PRINCIPALES</p>');
  const dp5=$('<p class="cond__5">POLÍTICAS DE PRIVACIDAD</p>');

  section.append(div1);
  div1.append(name);
  div1.append(info);
  section.append(div2);
  div2.append(p1);
  div2.append(p11);
  div2.append(p2);
  div2.append(p21);
  div2.append(p3);
  div2.append(p31);
  div2.append(p4);
  div2.append(p41);
  div2.append(p5);
  div2.append(p51);
  div2.append(p52);
  div3.append(dp1);
  div3.append(dp2);
  div3.append(dp3);
  div3.append(dp4);
  div3.append(dp5);
  section.append(div3);

  return section;

}
