const imagenes = [
    {
        imagen:"https://as01.epimg.net/diarioas/imagenes/2021/07/21/actualidad/1626850303_934147_1626850623_noticia_normal_recorte1.jpg"
    },
    {
        imagen:"https://estaticos-cdn.prensaiberica.es/clip/09973657-0b48-4488-9288-3c98cb3e7e77_16-9-aspect-ratio_default_0.jpg"
    },
    {
        imagen:"https://www.respetmascotas.com/_Assets/img/190110-Imagen-LaImportanciaDeSacarATuPerroTresVecesAlDia.jpg"
    },
    {
        imagen:"https://soyunperro.com/wp-content/uploads/2020/11/perro-paseando-por-el-campo.jpg"
    },
    {
        imagen:"https://t1.ea.ltmcdn.com/es/posts/5/6/2/10_caracteristicas_de_los_perros_24265_600_square.jpg"
    },
    {
        imagen:"https://hips.hearstapps.com/hmg-prod/images/raza-perro-alaskan-klee-kai-646c693637acc.jpeg"
    },
    {
        imagen:"https://images.hola.com/imagenes/mascotas/20220602210922/razas-perro-con-mas-olor-corporal-dn/1-95-776/razas-perro-motivos-olor-corporal-m.jpg?tx=w_680"
    },
    {
        imagen:"https://www.eltiempo.com/files/image_640_428/uploads/2021/03/25/605d32e3c7411.jpeg"
    },
    {
        imagen:"https://cdn.onemars.net/sites/nutro_es_NkyIN_B9cV/image/200_1615974073876.jpeg"
    },
    {
        imagen:"https://images.hola.com/imagenes/mascotas/20211129200495/perros-inquietos-causas/1-25-713/perro-activo-t.jpg?tx=w_680"
    },
    {
        imagen:"https://i0.wp.com/blog.mascotaysalud.com/wp-content/uploads/2020/06/Corgi-Gales-de-Cardigan-paseando.jpg?fit=865%2C540&ssl=1"
    }
] 
// console.log(imagenes);

// for(var i=0; i < imagenes.length; i++ )
// console.log(imagenes[i].imagen)









function imprimirCartas(imagenes){  
    var templateHtml = "";
    imagenes.map(foto =>{
            templateHtml += `
            <div class="div-img-galeria">
                <img class="galeria"  src=${foto.imagen} alt="imagen">
            </div>
         ` ; 
    
     document.querySelector('#img-galeria').innerHTML = templateHtml
    })
}
imprimirCartas(imagenes)
    
