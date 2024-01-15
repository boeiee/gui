function fetchAllDataAndDisplay() {
    // Haal de luchttemperatuur op
    fetch("https://boeiee.nl/CurrentLuchtTemperatuur.php")
        .then(response => response.text())
        .then(luchtTemperatuur => {
            // Haal de PPM op
            fetch("https://boeiee.nl/CurrentPPM.php")
                .then(response => response.text())
                .then(ppm => {
                    // Haal de watertemperatuur op
                    fetch("https://boeiee.nl/CurrentWaterTemperatuur.php")
                        .then(response => response.text())
                        .then(waterTemperatuur => {
                            // Vermenigvuldig de gegevens
                            const result = parseFloat(luchtTemperatuur) * parseFloat(ppm) * parseFloat(waterTemperatuur);

                            // Rond het KwaliteitsIndex af tot één cijfer achter de komma
                            const roundedResult = result.toFixed(1);

                            // Update de inhoud van de H5-tag met het ID "KwaliteitsIndex"
                            document.getElementById("KwaliteitsIndex").innerText = roundedResult;
                        })
                        .catch(error => {
                            console.error("Fout bij het ophalen van watertemperatuur:", error);
                        });
                })
                .catch(error => {
                    console.error("Fout bij het ophalen van PPM:", error);
                });
        })
        .catch(error => {
            console.error("Fout bij het ophalen van luchttemperatuur:", error);
        });
}


function CurrentLuchtTemperatuur() {
    // https-verzoek naar de API-endpoint
    fetch("https://boeiee.nl/CurrentLuchtTemperatuur.php")
        .then(response => response.text())
        .then(data => {
            // Rond het getal af tot één cijfer achter de komma
            const roundedData = parseFloat(data).toFixed(1);

            // Update de inhoud van de H5-tag met het ID "CurrentLuchtTemperatuur"
            document.getElementById("CurrentLuchtTemperatuur").innerText = roundedData;
        })
        .catch(error => {
            console.error("Fout bij het ophalen van gegevens:", error);
        });
}

function CurrentWaterTemperatuur() {
    // https-verzoek naar de API-endpoint
    fetch("https://boeiee.nl/CurrentWaterTemperatuur.php")
        .then(response => response.text())
        .then(data => {
            // Rond het getal af tot één cijfer achter de komma
            const roundedData = parseFloat(data).toFixed(1);

            // Update de inhoud van de H5-tag met het ID "CurrentWaterTemperatuur"
            document.getElementById("CurrentWaterTemperatuur").innerText = roundedData;
        })
        .catch(error => {
            console.error("Fout bij het ophalen van gegevens:", error);
        });
}

// Voer CurrentLuchtTemperatuur uit bij het laden van de pagina
CurrentLuchtTemperatuur();
CurrentWaterTemperatuur();
fetchAllDataAndDisplay();

// Stel een interval in om CurrentLuchtTemperatuur elke 30 seconden uit te voeren
setInterval(CurrentLuchtTemperatuur, 30000);
setInterval(CurrentWaterTemperatuur, 30000);
setInterval(fetchAllDataAndDisplay, 30000);