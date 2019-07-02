<?php
include "koneksi.php";

$sql = "SELECT a.kd_buku, a.judul, b.nama_pengarang, c.nama_penerbit, d.nama_kategori, a.edisi, a.status, a.cover FROM tb_buku a
		INNER JOIN tb_pengarang b ON a.kd_pengarang=b.kd_pengarang
		INNER JOIN tb_penerbit c ON a.kd_penerbit=c.kd_penerbit
		INNER JOIN tb_kategori d ON a.kd_kategori=d.kd_kategori";
$data = mysqli_query($conn, $sql);

while($rs = mysqli_fetch_array($data)){
	$buku[]=$rs;
}

echo json_encode($buku);
?>