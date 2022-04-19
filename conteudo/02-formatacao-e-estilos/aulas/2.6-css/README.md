

# Estilos CSS

CSS significa Cascading Style Sheets.

CSS é usado para formatar o layout de uma página da web, controlar cor, fonte, texto, espaçamentos, posicionamentos, imagens de fundo, tamanhos de tela e muito mais.

CSS pode ser adicionado no documentos HTML de 3 maneiras:

- **Inline** - usando o atributo `style` .
- **Interno** - usando um elemento `<style>` na seção `<head>`.
- **Externo** - usando um elemento `<link>`  para vincular a um arquivo CSS externo.

---

### CSS embutido

Utilizamos o atributo `style` para aplicar um estilo único a em um elemento HTML.

``` html
<h1 style="color:blue;">Um título azul.</h1>
<p style="color:red;">Um parágrafo vermelho.</p>
```

*No exemplo acima, definimos o título `<h1>` com a cor azul e o parágrafo com a cor vermelha*

---

### CSS interno

Para usar o CSS interno,  declaramos na seção `<head>`  a tag `<style>`. Dessa maneira, a página HTML que declaramos o css interno receberá uma formatação única.

Abaixo temos um exemplo de como utilizar esta formatação:

``` html
<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            background-color:Grey;
        }
        h1 {
            color: blue;
        }
        p {
            color: red;
        }
    </style>
</head>
<body>
    <h1>Este é um título.</h1>
    <p>Este é um parágrafo.</p>
</body>
</html>
```

*No exemplo acima, definimos o fundo com a cor cinza, o título `<h1>` com a cor azul e o parágrafo com a cor vermelha.*

---

### CSS externo

Quando queremos definir um estilo para muitas páginas HTML, utilizamos uma folha de estilo externa. Para utilizar este recurso, devemos adicionar um `<link>` na seção de cada página HTML, conforme exemplo abaixo:

``` html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
...
```

A folha de estilo dever ser salva com uma extensão `.css`.

Aqui está a aparência do arquivo `styles.css`:

``` css
body {
  background-color: lightblue;
}
h1 {
  color: blue;
}
p {
  color: yellow;
}
```

*No exemplo acima, definimos o fundo com a cor azul clara, o título `<h1>` com a cor azul e o parágrafo com a cor amarela.*

---

### Cores, fontes e tamanhos

A propriedade `color` define uma cor para o texto.

A propriedade `font-family` define uma fonte.

A propriedade `font-size` define o tamanho do texto.

Abaixo temos a aplicação dessas propriedades:

```` html
<style>
    h1 {
      color: blue;
      font-family: verdana;
      font-size: 300%;
    }
    p {
      color: yellow;
      font-family: courier;
      font-size: 160%;
    }
</style>
...
````

---

### Borda

A propriedade `border` define uma borda em torno de um elemento HTML, conforme exemplo abaixo.

````css
p {
  border: 2px solid violet;
}
````

---

### Preenchimento

A propriedade `padding` define um preenchimento (espaço) entre o texto e a borda, conforme exemplo abaixo:

```` css
p {
  border: 2px solid violet;
  padding: 30px;
}
````

---

### Margem

A propriedade `margin` define uma margem (espaço) fora da borda, conforme exemplo abaixo:

```` css
p {
  border: 2px solid violet;
  margin: 50px;
}
````

---

### Link para CSS externo

As folhas de estilo externas podem ser referenciadas com um URL completo ou com um caminho relativo à página da Web atual.

###### Este exemplo usa um URL completo para vincular a uma folha de estilo:

```` html
<link rel="stylesheet" href="https://www.w3schools.com/html/styles.css">
````

---

###### Este exemplo vincula a uma folha de estilo localizada na pasta html no site atual: 

```` html
<link rel="stylesheet" href="styles.css">
````

---

> **PRÓXIMA AULA:** [Favicon](../2.7-favicon)

***


> **FONTE DO CONTEÚDO**:
>
> - [W3Schools - Estilos CSS](https://www.w3schools.com/html/html_css.asp)

