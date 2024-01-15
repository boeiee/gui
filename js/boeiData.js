function fetchDataAndDisplay() {
    // HTTP-verzoek naar de API-endpoint
    fetch("http://boeiee.nl/CurrentLuchtTemperatuur.php")
        .then(response => response.text()) // Gebruik response.text() in plaats van response.json()
        .then(data => {
            // Update de inhoud van de H5-tag met het ID "KwaliteitsIndex"
            document.getElementById("KwaliteitsIndex").innerText = data;
        })
        .catch(error => {
            console.error("Fout bij het ophalen van gegevens:", error);
        });
}

// Voer fetchDataAndDisplay uit bij het laden van de pagina
fetchDataAndDisplay();

// Stel een interval in om fetchDataAndDisplay elke 30 seconden uit te voeren
setInterval(fetchDataAndDisplay, 30000);
