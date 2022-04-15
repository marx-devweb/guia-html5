# Atributo id

> O atributo `id` pode especificar somente um elemento HTML.
>

O atributo `id` é usado para apontar para uma declaração de estilo específica em uma folha de estilo. Também é usado pelo JavaScript para acessar e manipular o elemento com o `id` específico.

A sintaxe para `id` é: um #, seguido por um nome.

No exemplo a seguir temos um elemento  `<h1>` que aponta para o nome do `id` "myHeader". Este elemento `<h1>` será estilizado de acordo com a definição  `#myHeader` de estilo na seção `<head>`:

``` html
<!DOCTYPE html>
<html>
<head>
    <style>
        #myHeader {
          background-color: lightblue;
          color: black;
          padding: 40px;
          text-align: center;
        }
    </style>
</head>
<body>
    <h1 id="myHeader">Meu cabeçalho</h1>
</body>
</html>
```

> *O nome do id diferencia maiúsculas de minúsculas!*
>
> *O nome do id deve conter pelo menos um caractere, não pode começar com um número e não deve conter espaços em branco (espaços, tabulações, etc.).*

---

### Diferença entre `class` e `id`

Uma `class` pode ser usado por vários elementos HTML, enquanto um `id` deve ser usado apenas por um elemento HTML dentro da página.

---

### Marcadores com `id` e `links`

Os marcadores são usados para permitir que os leitores saltem para partes específicas de uma página da web.

Para usar um marcador, você deve primeiro criá-lo e, em seguida, adicionar um link a ele.

###### exemplo:

Primeiro, crie um marcador com o atributo `id`:

```` html
<h2 id="C4">Capítulo 4</h2>
````

Em seguida, adicione um link ao marcador ("Pular para o Capítulo 4"), de dentro da mesma página:

```` html
<a href="#C4">Pular para o Capítulo 4</a>
````

---

### Usando o atributo `id` com JavaScript

O atributo `id` também pode ser usado pelo JavaScript para realizar algumas tarefas para aquele elemento específico.

JavaScript pode acessar um elemento com um id específico com o método `getElementById()`:

``` javascript
<script>
    function displayResult() {
    document.getElementById("myHeader").innerHTML = "Have a nice day!";
}
</script>
```

---

> **PRÓXIMA AULA:** [Caminhos de arquivo ](../2.11-caminhos-arquivos)

***


> **FONTE DO CONTEÚDO**:
>
> - [W3Schools - Atributo id](https://www.w3schools.com/html/html_id.asp)

