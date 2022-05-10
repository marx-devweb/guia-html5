# API de arrastar e soltar

Exemplo simples de uma API para arrastar e soltar:

```html
<body>
    ...
    <div id="div1" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
    <br>
    <img id="drag1" src="logo.png" draggable="true" ondragstart="drag(event)">
    
    <script>
        function allowDrop(ev) {
            ev.preventDefault();
        }
        
        function drag(ev) {
            ev.dataTransfer.setData("text", ev.target.id);
        }
        
        function drop(ev) {
            ev.preventDefault();
            var data = ev.dataTransfer.getData("text");
            ev.target.appendChild(document.getElementById(data));
        }
    </script>
</body>
```

Todo este exemplo será explicado abaixo.

---

### Tornar um elemento arrastável

O atributo `draggable` torna um elemento arrastável:

###### exemplo:

```html
<img draggable="true">
```

---

### O que arrastar - `ondragstart` e `setData()`

No exemplo acima, o atributo `ondragstart` chama uma função, `drag(event)`, que especifica quais dados serão arrastados.

O método `dataTransfer.setData()` define o tipo de dados e o valor dos dados arrastados:

###### exemplo:

```javascript
function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}
```

---

### Onde cair - `ondragover`

O evento `ondragover` especifica onde os dados/elementos arrastados pode ser soltos.

Para permitir que o que os dados/elementos seja solto em um determinado elemento, utilizamos o método `event.preventDefault()` para o evento `ondragover`: 

###### exemplo:

```javascript
event.preventDefault()
```

---

### Faça o Drop - `ondrop`

No nosso exemplo, o atributo `ondrop` chama uma função, `drop(event)`:

É nesse momento que ocorre o evento de soltar:

###### exemplo:

```javascript
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
```

##### Código explicado:

- O `preventDefault()` evita que o navegador manipule os dados por padrão (o padrão é aberto como link ao soltar)
- O método `dataTransfer.getData()` obtém os dados arrastados. Este método retornará todos os dados que foram definidos para o mesmo tipo no método `setData()`

***

> **PRÓXIMA AULA:** [API de armazenamento](../13.3-armazenamento-na-web)

***


> **FONTE DO CONTEÚDO**:
>
> - [W3Schools - API de arrastar e soltar](https://www.w3schools.com/html/html5_draganddrop.asp)