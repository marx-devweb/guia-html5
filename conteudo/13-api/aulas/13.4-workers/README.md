# API de Web Workers

Um web worker é um JavaScript executado em segundo plano, independentemente de outros scripts, sem afetar o desempenho da página. Você pode continuar fazendo o que quiser: clicar, selecionar coisas, etc., enquanto o web worker é executado em segundo plano.

---

### Verificando suporte para Web Worker

###### exemplo:

```javascript
if (typeof(Worker) !== "undefined") {
  // Sim! seu navegador possui suportepara o web worker!

} else {
  // Desculpe! seu navegador não possui suporte para web worker.
}
```

---

### Criando um Web Worker

Criaremos o nosso web work em um JavaScript externo. 

Aqui, criamos o script que faz a contagem.

###### exemplo:

```javascript
var i = 0;
function timedCount() {
    i = i + 1;
    postMessage(i); //este método posta uma mensagem de volta na página HTML
    setTimeout("teimedCount()",500);
}

timedCount();
```

---

### Criando um objeto Web Worker



###### exemplo:

```javascript
```







###### exemplo:

```javascript
```







###### exemplo:

```javascript
```













***

> **PRÓXIMA AULA:** [API SSE](../13.5-sse)

***


> **FONTE DO CONTEÚDO**:
>
> - [W3Schools - API de Web Workers](https://www.w3schools.com/html/html5_webworkers.asp)