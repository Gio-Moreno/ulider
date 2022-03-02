fetch('./assets/data/dataEquipos.json')
.then(response => response.json() )
.then(data => {
    let div = "";    
    data.equipos.forEach(function(equipo){
        div += `
        <div class="causes-item">
            <div class="causes-img">
                <a href="./programas/dts/dts${equipo.idteam}.html"><img src="assets/img/equipos/dts${equipo.idteam}/dts${equipo.idteam}-perfil.jpg" title="${equipo.tipo} ${equipo.nombre}" alt="${equipo.tipo} ${equipo.nombre}"></a>
            </div>
            <div class="causes-text my-4">
                <a href="./programas/dts/dts${equipo.idteam}.html"><h3>${equipo.tipo} <span class="text-warning">${equipo.nombre}</span></h3></a>
                <p>${equipo.mision}</p>
            </div>
        </div>
        `;
    });
    document.getElementById('listaEquipos').innerHTML = div;
   
});



