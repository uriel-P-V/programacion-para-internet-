<?php
$puerto = 3307;
$server = "localhost";
$user = "root";
$pass = "";
$db = "registro";

$con = mysqli_connect($server, $user, $pass, $db, $puerto) or die("Error al conectarse a la base de datos");

$nombre = $_POST['nombre'];
$email = $_POST['email'];
$password = $_POST['password'];

$consulta = "INSERT INTO usuariosRegistrados (nombre, email, password) VALUES ('$nombre', '$email', '$password')";

$resultado = mysqli_query($con, $consulta);

if ($resultado) {
  echo "Registro exitoso";
} else {
  echo "Error al registrar";
}

mysqli_close($con);
header("location: registro.html");
?>




