# API de armazenamento

Com o armazenamento na Web, os aplicativos da Web podem armazenar dados localmente no navegador do usuário.

O armazenamento na Web é mais seguro e grandes quantidades de dados podem ser armazenadas localmente, sem afetar o desempenho do site.

---

### Objetos de armazenamento da Web 

- `window.localStorage` - armazena dados sem data de validade;
- `window.sessionStorage` - armazena dados para uma sessão (os dados são perdidos quando a guia do navegador é fechada);

O exemplo abaixo verifica se o navegador tem suporte para `localStorage` e `sessionStorage`:

###### exemplo:

```javascript
if (typeof(Storage) !== "undefined") {
  // Código para localStorage/sessionStorage.
} else {
  // Desculpe! Sem suporte para armazenamento na Web..
}
```

---

### O objeto `localStorage`

Este objeto armazena os dados sem data de expiração. Os dados não serão excluídos quando o navegador for fechado e estarão disponíveis no próximo dia, semana ou ano.

###### exemplo:

```javascript
// Armazenar
localStorage.setItem("lastname", "Smith");
//cria um par de nome/valor,como name="lastname" e value="Smith

// Recuperar
document.getElementById("result").innerHTML = localStorage.getItem("lastname");
//Recupere o valor de "lastname" e insira-o no elemento com id="result"
```

O exemplo acima também pode ser escrito assim:

```javascript
// Armazenar
localStorage.lastname = "Smith";

// Recuperar
document.getElementById("result").innerHTML = localStorage.lastname;
```

Para remover o item `localStorage` "sobrenome" é a seguinte:

```javascript
localStorage.removeItem("lastname");
```

O exemplo a seguir conta o número de vezes que um usuário clicou em um botão. Neste código a string de valor é convertida em um número para poder aumentar o contador:

###### exemplo:

```javascript
function clickCounter() {
    if (typeof (Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount) + 1;
        } else {
            localStorage.clickcount = 1;
        }
        document.getElementById("result").innerHTML = "Você clicou no botão " + localStorage.clickcount + " vez(es).";
    } else {
        document.getElementById("result").innerHTML = "Desculpe, seu navegador não suporta Web Storage...";
    }
}
```

---

### O objeto `sessionStorage`

Este objeto é igual ao objeto `localStorage`, só que ele armazena os dados de apenas uma sessão, ou seja, os dados são excluídos quando o usuário fecha a guia do navegador.

Abaixo temos o mesmo exemplo anterior, só que neste exemplo o navegador irá armazenar os dados somente na sessão atual:

###### exemplo:

```javascript
function clickCounter2() {
    if (typeof (Storage) !== "undefined") {
        if (sessionStorage.clickcount) {
            sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
        } else {
            sessionStorage.clickcount = 1;
        }
        document.getElementById("result2").innerHTML = "Você clicou no botão " + sessionStorage
            .clickcount + " vez(es) nesta sessão.";
    } else {
        document.getElementById("result").innerHTML = "Desculpe, seu navegador não suporta Web Storage...";
    }
}
```

***

> **PRÓXIMA AULA:** [API de Web Workers](../13.4-workers)

***


> **FONTE DO CONTEÚDO**:
>
> - [W3Schools - API de armazenamento](https://www.w3schools.com/html/html5_webstorage.asp)