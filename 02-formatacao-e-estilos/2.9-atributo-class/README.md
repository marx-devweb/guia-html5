# Atributo `class`

> O atributo `class` é usado para especificar uma classe para um elemento HTML.
>
> Vários elementos podem compartilhar a mesma `class`.

---

### Sintaxe

Para criar uma `class`, devemos escrever um caractere ponto (.), seguido por um nome de `class`. Em seguida, defina as propriedades CSS entre chaves {} na seção `<head>`.

No exemplo a seguir temos três elementos `<div>` com um  `class` com o valor "city". Todos o três elementos `<div>` serão estilizados igualmente de acordo com a class `.city` na seção `<head>`:

```` html
<!DOCTYPE html>
<html>
<head>
    <style>
        .city {
            background-color: tomato;
            color: white;
            border: 2px solid black;
            margin: 20px;
            padding: 20px;
        }
    </style>
</head>
    
<body>
     <div class="city">
        <h2>Londres</h2>
        <p>Londres é a capital da Inglaterra.</p>
    </div>

    <div class="city">
        <h2>Paris</h2>
        <p>Paris é a capital da França.</p>
    </div>

    <div class="city">
        <h2>Tóquio</h2>
        <p>Tóquio é a capital do Japão.</p>
    </div>
</body>
</html>
````

No exemplo a seguir temos dois elementos `<span>` com um atributo `class` com o valor de "note". Ambos os elementos `<span>` serão estilizados igualmente de acordo com a class `.note`  na seção:

```` html
...
<head>
	<style>
        .note {
            font-size: 120%;
            color: red;
        }
	</style>
</head>
<body>
    <h1>Meu título <span class="note">Importante</span> </h1>
    <p>Este é um texto <span class="note">importante</span></p>
...
````

---

### Várias `class`

Para definir várias `class`,  é só separar os nomes das classes com um espaço, exemplo:

``` html
<div class="city main">
```

No exemplo a seguir, o primeiro elemento `<h2>` pertence à `class` `.city` e também à `class` `.main` e obterá os estilos de ambas as `class`: 

``` html
<h2 class="city main">Londres</h2>
<h2 class="city">Paris</h2>
<h2 class="city">Tóquio</h2>
```

---

### Diferentes elementos podem compartilhar a mesma `class`

No exemplo a seguir, `<h2>` e `<p>` utilizam  a `class` `.city` e compartilharão o mesmo estilo:

``` html
<h2 class="city">Paris</h2>
<p class="city">Paris é a capital da França.</p>
```

---

### Uso do atributo `class` com JavaScript

JavaScript pode acessar elementos `class` com o método `getElementsByClassName()`:

``` javascript
<script>
    function myFunction() {
    var x = document.getElementsByClassName("city");
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
}
</script>
```



---

> **PRÓXIMA AULA:** [Atributo id](../2.10-atributo-id)

***


> **FONTE DO CONTEÚDO**:
>
> - [W3Schools - Atributo class](https://www.w3schools.com/html/html_classes.asp)

