<?php

$host = "51.116.122.27";
$user = "root";
$password = "Dimmed-darkened-suction1";
$database = "boeiee";

// Verbinding maken met de database
$conn = new mysqli($host, $user, $password, $database);

// Controleren op verbindingsfouten
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Query uitvoeren om de waarde "xyz" op te halen
$query = "SELECT CurrentLuchtTemperatuur FROM product LIMIT 1";
$result = $conn->query($query);

// Controleren op queryfouten
if (!$result) {
    die("Query failed: " . $conn->error);
}

// Controleren of er rijen zijn teruggegeven
if ($result->num_rows > 0) {
    // Rij ophalen
    $row = $result->fetch_assoc();
    
    // Waarde "xyz" afdrukken
    echo $row['kolom_naam'];
} else {
    echo "Geen resultaten gevonden voor 'xyz' in de 'boeiee' tabel.";
}

// Verbinding sluiten
$conn->close();

?>
