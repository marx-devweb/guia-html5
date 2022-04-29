# Listas não ordenadas

Uma lista não ordenada representa uma lista de itens que não tem uma ordenação numérica.

Os itens desta lista serão exibidos com um marcador que pode ter varias formas, como um ponto, um círculo, ou um quadrado. 

Para definir uma lista não ordenada, utilizamos o elemento `<ul>`:

###### exemplo:

``` html
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>
```

###### resultado: 

<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>

---

### Definindo o marcador de item da lista

Para definir o marcador desta lista, utilizamos a propriedade CSS `list-style-type`. 

Está propriedade pode ter um dos seguintes valores

-  `disc` - é o marcador padrão.
- `circle` - define um circulo para o marcador
- `square` - define um quadrado para o marcador
- `none` - remove o marcador da lista

---

### Lista aninhada

Podemos aninhar nossas listas, ou seja, utilizar uma lista não ordenada dentro de uma lista não ordenada:

###### exempl

``` html
<ul>
    <li>Desenvolvedor Front-end
        <ol>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
        </ol>
    </li>
    <br>
    <li>Desenvolvedor Back-end
        <ol>
            <li>Python</li>
            <li>Java</li>
            <li>JavaScript</li>
        </ol>
    </li>
    <br>
    <li>Desenvolvedor Mobile
        <ol>
            <li>Kotlin </li>
            <li>Swift </li>
            <li>Python</li>
        </ol>
    </li>
</ul>
```

###### resultado:

<ul>
    <li>Desenvolvedor Front-end
        <ol>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
        </ol>
    </li>
    <br>
    <li>Desenvolvedor Back-end
        <ol>
            <li>Python</li>
            <li>Java</li>
            <li>JavaScript</li>
        </ol>
    </li>
    <br>
    <li>Desenvolvedor Mobile
        <ol>
            <li>Kotlin </li>
            <li>Swift </li>
            <li>Python</li>
        </ol>
    </li>
</ul>

---

### Lista horizontal com CSS

Criar um menu de navegação e uma maneira muito interessante de usar uma lista horizontalmente:

``` html
<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Menu Navegação</title>
    <style>
        ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
            overflow: hidden;
            background-color: #333333;
        }

        li {
            float: left;
        }

        li a {
            display: block;
            color: #FFF;
            text-align: center;
            padding: 16px;
            text-decoration: none;
        }

        li a:hover {
            background-color: #111111;
        }
    </style>
</head>

<body>
    <h1>Menu Navegação</h1>
    <ul>
        <li><a href="#">HTML</a></li>
        <li><a href="#">CSS</a></li>
        <li><a href="#">JavaScript</a></li>
        <li><a href="#">Phyton</a></li>
    </ul>
</body>

</html>
```

***

> **PRÓXIMA AULA:** [Listas ordenadas](../7.3-listas-ordenadas)

***


> **FONTE DO CONTEÚDO**:
>
> - [W3Schools - Listas não ordenadas](https://www.w3schools.com/html/html_lists_unordered.asp)