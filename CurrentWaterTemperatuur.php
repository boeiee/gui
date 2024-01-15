<?php

$host = "51.116.122.27";
$user = "root";
$password = "Dimmed-darkened-suction1";
$database = "boeiee";

// Probeer een verbinding te maken met de database
try {
    $conn = new mysqli($host, $user, $password, $database);

    // Controleer op verbindingsfouten
    if ($conn->connect_error) {
        throw new Exception("Connection failed: " . $conn->connect_error);
    }

    // Voer de query uit om de waarde "xyz" op te halen
    $query = "SELECT AVG(CurrentTemperatuur) AS WaterTemp FROM (SELECT CurrentTemperatuur FROM product ORDER BY Tijd DESC LIMIT 30 ) AS subquery;";
    $result = $conn->query($query);

    // Controleer op queryfouten
    if ($result === false) {
        throw new Exception("Query failed: " . $conn->error);
    }

    // Controleer of er rijen zijn teruggegeven
    if ($result->num_rows > 0) {
        // Haal de rij op
        $row = $result->fetch_assoc();

        // Gebruik de juiste alias "WaterTemp" om de waarde op te halen
        echo $row['WaterTemp'];
    } else {
        echo "Geen resultaten gevonden voor 'xyz' in de 'product' tabel.";
    }
} catch (Exception $e) {
    echo "Error: " . $e->getMessage();
} finally {
    // Sluit de databaseverbinding, ongeacht of er een fout is opgetreden of niet
    if (isset($conn) && $conn instanceof mysqli) {
        $conn->close();
    }
}
?>
