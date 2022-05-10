# API de geolocalização HTML

A API de geolocalização HTML é usada para obter a posição geográfica de um usuário.

A posição somente será fornecida se o usuário a permitir.

---

### Usando geolocalização HTML

Utilizamos o método JavaScript `getCurrentPosition()` para retornar a posição do usuário.

###### exemplo que retorna a latitude e longitude da posição do usuário:

```html
<button onclick="getLocation()">OBTER COORDENADAS</button>
<p id="demo"></p>
<script>
    var x = document.getElementById("demo");
    
    //funçao para verificar se a geolocalização é compatível.
    function getLocation() {
        //se suportado, ira executar o método getCurrentPosition().
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        //caso contrário, exibará a mensagem para o usuário.
        } else {
            x.innerHTML = "A geolocalização não é suportada por este navegador.";
        }
    }
    
    //função para gerar a latitude e a longitude.
    function showPosition(position) {
        x.innerHTML = "Latitude: " + position.coords.latitude +
            "<br>Longitude: " + position.coords.longitude;
    }
</script>
```

---

### Lidando com Erros e Rejeições

O segundo parâmetro do método `getCurrentPosition()` é usado para tratar erros. Ele especifica uma função a ser executada se não conseguir obter a localização do usuário:

###### exemplo:

```html
<script>
    ...
    function showError(error) {
        switch(error.code) {
            case error.PERMISSION_DENIED:
                x.innerHTML = "O usuário negou a solicitação de geolocalização."
                break;
            case error.POSITION_UNAVAILABLE:
                x.innerHTML = "As informações de localização não estão disponíveis."
                break;
            case error.TIMEOUT:
                x.innerHTML = "A solicitação para obter a localização do usuário expirou."
                break;
            case error.UNKNOWN_ERROR:
                x.innerHTML = "Ocorreu um erro desconhecido."
                break;
        }
    }
</script>
```

---

### O método `getCurrentPosition()` - Dados de retorno

Propriedades de retorno se disponíveis:

| Propriedade               | Retorno                                                      |
| ------------------------- | ------------------------------------------------------------ |
| `coords.latitude`         | A latitude como um número decimal (sempre retornado)         |
| `coords.longitude`        | A longitude como um número decimal (sempre retornado)        |
| `coords.accuracy`         | A precisão da posição (sempre retornada)                     |
| `coords.altitude`         | A altitude em metros acima do nível médio do mar (retornado se disponível) |
| `coords.altitudeAccuracy` | A precisão da altitude da posição (retornada se disponível)  |
| `coords.heading`          | A direção em graus no sentido horário a partir do Norte (retornado se disponível) |
| `coords.speed`            | A velocidade em metros por segundo (retornada se disponível) |
| `timestamp`               | A data/hora da resposta (retornada se disponível)            |

---

### Objeto `geolocation`  - Outros métodos interessantes

- `watchPosition()` - Retorna a posição atual do usuário e continua a retornar a posição atualizada conforme o usuário se move (como o GPS em um carro).
- `clearWatch()` - Interrompe o método `watchPosition()`.

###### exemplo:

```html
...
<script>
    var x = document.getElementById("demo");
    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.watchPosition(showPosition);
        } else {
            x.innerHTML = "A geolocalização não é suportada por este navegador.";
        }
    }
    function showPosition(position) {
        x.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
    }
</script>
```

***

> **PRÓXIMA AULA:** [API de arrastar e soltar](../13.2-arrastar-soltar)

***


> **FONTE DO CONTEÚDO**:
>
> - [W3Schools - API de geolocalização](https://www.w3schools.com/html/html5_geolocation.asp)