<?php
              
$Respuesta=array();

if(isset($_POST['accion']))
{
                  
    include "conexion.php";
                 
    switch ($_POST['accion']) {
        case 'subirOrden':
            crearOrden($conexion);
            break;	
        default:
            $Respuesta["estado"]=0;
            $Respuesta["mensaje"]="Accion no valida";
            echo json_encode($Respuesta);
            break;
        }
              
}
else{
    $Respuesta["estado"]=0;
    $Respuesta["mensaje"]="Faltan Parametros";
    echo json_encode($Respuesta);
}

function crearOrden($conexion)
{
    $Respuesta=array();

	if(isset($_POST['sabor'])&&isset($_POST['tel'])&&isset($_POST['cliente']))
    {
		$sabor = $_POST['sabor'];
		$adornos = $_POST['ador'];
        $nombre = $_POST['cliente'];
		$telefono = $_POST['tel'];
        $email = $_POST['correo'];
		$descripcion = $_POST['desc'];

		$Query = "INSERT INTO clientes(Nombre, Telefono, Correo) VALUES('$nombre','$telefono', '$email')";

		mysqli_query($conexion,$Query);

		if(mysqli_affected_rows($conexion)>0)
        {
			$id =mysqli_insert_id($conexion);
			$Respuesta['mensaje']	="Se ingreso el dato";
            $Query = "INSERT INTO pedidos (IDCliente, Sabores, Adornos, Descripcion) VALUES('$id','$sabor', '$adornos', '$descripcion')";
             
            mysqli_query($conexion,$Query);

            if(mysqli_affected_rows($conexion)>0){
                
                $Respuesta['estado']	=1;
                $Respuesta['mensaje']	="Se ingreso el dato";
            
                
            }else{
                $Respuesta['estado']=0;
                $Respuesta['mensaje']="Ocurrio un error desconocido";
            }
		
			
		}else{
			$Respuesta['estado']=0;
			$Respuesta['mensaje']="Ocurrio un error desconocido";
		}

	}
	else
    {
		$Respuesta['estado']=0;
		$Respuesta['mensaje']="Faltan parametros";
	}
    

    $Respuesta['mensaje']="Hola";
	echo json_encode($Respuesta);
}
              
                    
	
?>