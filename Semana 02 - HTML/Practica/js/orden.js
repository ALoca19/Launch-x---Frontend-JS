function ordenCliente(){
	
    check01 = document.getElementById("chocolate").checked;
    check02 = document.getElementById("cafe").checked;
    check03 = document.getElementById("coco").checked;
    check04 = document.getElementById("moke").checked;
    check05 = document.getElementById("vainilla").checked;
    check06 = document.getElementById("oreo").checked;

    var sabores = "", adornos="";

    if(check01)
    {
        sabores+=document.getElementById("chocolate").value+"\n";
    }
    if(check02)
    {
        sabores+=document.getElementById("cafe").value+"\n";
    }
    if(check03)
    {
        sabores+=document.getElementById("coco").value+"\n";
    }
    if(check04)
    {
        sabores+=document.getElementById("vainilla").value+"\n";
    }
    if(check05)
    {
        sabores+=document.getElementById("cafe").value+"\n";
    }
    if(check06)
    {
        sabores+=document.getElementById("oreo").value+"\n";
    }

    adorno01 = document.getElementById("flor").checked;
    adorno02 = document.getElementById("personaje").checked;
    adorno03 = document.getElementById("mono").checked;
    adorno04 = document.getElementById("mariposa").checked;
    
    numAdorno01 = document.getElementById("numFlor").value;
    numAdorno02 = document.getElementById("numPersonaje").value;
    numAdorno03 = document.getElementById("numMono").value;
    numAdorno04 = document.getElementById("numMariposa").value;

    if(adorno01)
    {
        adornos+=document.getElementById("flor").value+": "+numAdorno01+"\n";
    }
    if(adorno02)
    {
        adornos+=document.getElementById("personaje").value+": "+numAdorno02+"\n";
    }
    if(adorno03)
    {
        adornos+=document.getElementById("mono").value+": "+numAdorno03+"\n";
    }
    if(adorno04)
    {
        adornos+=document.getElementById("mariposa").value+": "+numAdorno04+"\n";
    }

    alert(sabores);
    alert(adornos);

    nombre = document.getElementById("Nombre").value;
    telefono = document.getElementById("telefono").value;
    email = document.getElementById("correo").value;
    descripcion = document.getElementById("desc").value;

    $.ajax({
        method:"post",	
        url: "../php/orden.php",
        data: {
          accion: "subirOrden",
          sabor    : sabores,
          ador: adornos,
          cliente: nombre,
          tel    : telefono,
          correo: email,
          desc: descripcion
        },
        success: function( result ) {
            resultJSON = JSON.parse(result);

            alert(resultJSON.mensaje);
/*
            if(resultJSON.estado==1){
  
                tabla		 = $("#example1").DataTable();
                
                renglon		 = tabla.row("#row_"+idAct).data();
                
                renglon[0]   = '<div align="center">'+nombreAct+'</div>'; //
                renglon[1]   = '<div align="center">'+observacionesAct+'</div>';//
  
              tabla.row("#row_"+idAct).data(renglon);	  		
  
            }else
               alert(resultJSON.mensaje);*/
        }
      });
   	
}