var IdEliminar  =0;
var IdActualizar=0;
var IdEvidencia=0;

function inventarioTodo(){

	//varificarSecion

	$.ajax({
	  method:"post",
	  url: "../php/inventariado.php",
	  data: {
	    accion: "read"
	  },
	  success: function( result ) {
		  
		  
		var resultJSON = JSON.parse(result);
		alert(resultJSON.mensaje);
	
	  	
	  	if(resultJSON.estado==1){
	  		
	  		var tabla=$('#example1').DataTable();

	  		resultJSON.alta_eventos.forEach(function(alta_evento){
	  			
				Titulo='<div align="center">'+alta_evento.nombre+'</div>';
				Cantidad='<div align="center">'+alta_evento.cantidad+'</div>';
				Precio='<div align="center">'+alta_evento.precio+'</div>';
				Detalles='<div align="center"><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modal-actualizar" onclick="IdenticaActualizar('+alta_evento.id+');">Detalles</button></div>';

	  			tabla.row.add([
					Titulo,
					Cantidad,
					Precio,
					Detalles
	  				]).draw().node().id="row_"+alta_evento.id;

	  		});
	  		
	  	}else
	    	alert(resultJSON.mensaje);
	  }
	});
}

function identificarInventario(inventarioDe)
{
	$.ajax({
		method:"post",
		url: "../php/inventariado.php",
		data: {
			accion: "llenarTabla",
			inventario: inventarioDe
		},

		success: function( result ) {
				
		  var resultJSON = JSON.parse(result);
			
			if(resultJSON.estado==1){
				
				var tabla=$('#example1').DataTable();
				tabla.clear().draw();
                
 //               $('#example1').dataTable().fnClearTable();

				resultJSON.alta_eventos.forEach(function(alta_evento){
					
				  Titulo='<div align="center">'+alta_evento.nombre+'</div>';
				  Cantidad='<div align="center">'+alta_evento.cantidad+'</div>';
				  Precio='<div align="center">'+alta_evento.precio+'</div>';
				  Detalles='<div align="center"><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modal-actualizar" onclick="IdenticaActualizar('+alta_evento.id+');">Detalles</button></div>';
				 
					tabla.row.add([
					  Titulo,
					  Cantidad,
					  Precio,
					  Detalles
						]).draw().node().id="row_"+alta_evento.id;
  
				});
				
			}else
			  alert(resultJSON.mensaje);
		}
	  });
}


function datosDeProducto(name)
{
	producto=name;

	$.ajax({
		method:"post",
		url: "../php/inventariado.php",
		data: {
		  id: name,
		  accion: "datosProducto"
		},
		success: function( result ) {
			resultJSON = JSON.parse(result);
			alert(resultJSON.mensaje);	
			
			if(resultJSON.estado==1){
				
				nombre="<b>Titulo</b>: "+resultJSON.nombre;
				document.getElementById("nombreTitulo").innerHTML=nombre;
				nombre="<b>Tipo</b>: "+resultJSON.categoria;
				document.getElementById("nombreTipo").innerHTML=nombre;
				nombre="<b>Editorial</b>: "+resultJSON.Editorial;
				document.getElementById("nombreEditorial").innerHTML=nombre;
			}else{
				alert(resultJSON.mensaje);	
			}
			
		}
	  });
	
}

function llenarTablaSucursales(name)
{
	$.ajax({
		method:"post",
		url: "../php/inventariado.php",
		data: {
			accion: "llenarTablaSucursal",
			id: name
		},

		success: function( result ) {
				
		  var resultJSON = JSON.parse(result);
			
			if(resultJSON.estado==1){
				
				var tabla=$('#tablaSucursales').DataTable();
				
                tabla.clear().draw();
 //               $('#example1').dataTable().fnClearTable();

				resultJSON.alta_eventos.forEach(function(alta_evento){
					
				  identificador=alta_evento.id;
				  Sucursal=alta_evento.lugar;
				  Disponible='<div align="center">'+alta_evento.Stock+'</div>';
				 
					tabla.row.add([
						identificador,
						Sucursal,
						Disponible

						]).draw().node().id="row_"+alta_evento.id;
  
				});
				
			}else
			  alert(resultJSON.mensaje);
		}
	  });
}


	






