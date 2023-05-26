<?php
$puerto = 3307;
$server = "localhost";
$user = "root";
$pass = "";
$db = "registro";
$con = mysqli_connect($server, $user, $pass, $db ,$puerto) or die("Error al conectarse a la base de datos");
$almacenar = "INSERT INTO usuarios (nombre,correo,telefono,asunto, mensaje) VALUES ('$_POST[registro]', '$_POST[registro2]', '$_POST[registro3]', '$_POST[registro4]', '$_POST[registro5]')";

$resultado = mysqli_query($con, $almacenar);
if (!$resultado) {
    echo "Error al registrarse";
} else {
    echo "Registro exitoso";
}
mysqli_close($con);
header("location: index.html");
?>






