<?php 
//Untuk mengizinkan request koneksi dari ionic
header("Access-Control-Allow-Origin: *");
$conn = mysqli_connect("localhost","root","","perpustakaan");
//CEK KONEKSI
if(mysqli_connect_errno()){
	echo "Koneksi gagal". mysqli_connect_error();
}	

?>