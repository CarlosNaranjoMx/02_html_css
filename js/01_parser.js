<script>
        document.getElementById('currency-form').addEventListener('submit', function(event) {
            event.preventDefault(); // Evitar que el formulario se envíe normalmente
            var amount = parseFloat(document.getElementById('amount').value);
            
            // Realizar solicitud para obtener los datos de la tasa de cambio
            fetch('https://cdn.dinero.today/api/latest.json')
                .then(response => response.json())
                .then(data => {
                    // Verificar si la tasa de cambio MXN está disponible en los datos
                    if (data && data.rates && data.rates.MXN) {
                        var exchangeRate = data.rates.MXN; // Obtener la tasa de cambio MXN
                        var convertedAmount = amount * exchangeRate;
                        document.getElementById('result').innerHTML = amount + ' dólares equivalen a ' + convertedAmount.toFixed(2) + ' pesos mexicanos';
                    } else {
                        document.getElementById('result').innerHTML = 'Error al obtener la tasa de cambio MXN';
                    }
                })
                .catch(error => {
                    document.getElementById('result').innerHTML = 'Error al realizar la solicitud para obtener la tasa de cambio';
                });
        });
    </script>