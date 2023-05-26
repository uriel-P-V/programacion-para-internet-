
<?php
$puerto = 3307;
$server = "localhost";
$user = "root";
$pass = "";
$db = "registro";

$con = mysqli_connect($server, $user, $pass, $db, $puerto) or die("Error al conectarse a la base de datos");

$email2 = $_POST['email2'];
$password2 = $_POST['password2'];


$consulta = "SELECT * FROM usuariosRegistrados WHERE email='$email2' AND password='$password2'";
$resultado = mysqli_query($con, $consulta);

if(mysqli_num_rows($resultado) > 0) {

  
  $consulta = "INSERT INTO registrosDeLogin (email) VALUES ('$email2')";
  mysqli_query($con, $consulta);
  header("Location: index.html");
} else {
 
  echo "Error al iniciar sesión";
}

mysqli_close($con);
?>

