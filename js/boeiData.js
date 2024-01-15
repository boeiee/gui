function fetchDataAndDisplay() {
    // HTTP-verzoek naar de API-endpoint
    fetch("http://boeiee.nl/CurrentLuchtTemperatuur.php")
        .then(response => response.text())
        .then(data => {
            // Rond het getal af tot één cijfer achter de komma
            const roundedData = parseFloat(data).toFixed(1);

            // Update de inhoud van de H5-tag met het ID "KwaliteitsIndex"
            document.getElementById("KwaliteitsIndex").innerText = roundedData;
        })
        .catch(error => {
            console.error("Fout bij het ophalen van gegevens:", error);
        });
}

// Voer fetchDataAndDisplay uit bij het laden van de pagina
fetchDataAndDisplay();

// Stel een interval in om fetchDataAndDisplay elke 30 seconden uit te voeren
setInterval(fetchDataAndDisplay, 30000);
