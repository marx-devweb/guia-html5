# Formulários HTML - Introdução

> Os formulários HTML são um dos principais pontos de interação entre um usuário e um web site ou aplicativo. Eles permitem que os usuários enviem dados para o web site.

Para criar um formulário HTML, utilizamos o elemento HTML `<form>`. 

Um formulário possui diferentes tipos de elementos de entrada, como: campos de texto (linha única ou de várias linhas), caixas de seleção, botões de opção, botões de envio, etc.

---

### O elemento `<form>`

Todos formulários HTML começam com um elemento `<form>` como este:

###### sintaxe:

```html
<form>
    ...
</form>
```

Este elemento suporta alguns atributos específicos para configurar a forma como o formulário se comporta. Todos os seus atributos são opcionais, mas é considerada a melhor prática sempre definir pelo menos o atributo `action `e o atributo `method`.

- O atributo `action` define o local (uma URL) em que os dados recolhidos do formulário devem ser enviados.
- O atributo `method` define qual o método HTTP para enviar os dados (ele pode ser "**GET**" ou "**POST**").

Um formulário possui diferentes tipos de elementos de entrada, como: campos de texto (linha única ou de várias linhas), caixas de seleção, botões de opção, botões de envio, etc.

---

### O elemento `<input>`

Este elemento define os campos de entrada de dados do usuário.

Sua semântica varia consideravelmente dependendo do valor de seu atributo `type`.

O atributo `type` é extremamente importante porque define a forma como o elemento `<input>` se comporta.

###### exemplos:

```html
<input type="text"><!--Define um campo de entrada de texto de linha unica-->
```

``` html
<input type="radio"><!--Defini um botão para selecionar uma das muitas opções)-->
```

``` html
<input type="checkbox"><!--Exibe uma caixa de seleção-->
```

``` html
<input type="submit"><!--Exibe um botão enviar-->
```

``` html
<input type="button"><!--Exibe um botão clicável-->
```

> Todos os diferentes tipos de entrada são abordados neste capítulo: [Formulários HTML - Tipos de entrada](../10.4-formularios-tipos-de-entrada)

---

### Campos de texto 

O `<input type="text">` define um campo de entrada de texto de linha única.

###### exemplo:

```html
<form>
    <label for="nome">Nome:</label><br>
    <input type="text" id="name" name="name"><br>
    <label for="sobrenome">Sobrenome:</label><br>
    <input type="text" id="sobrenome" name="sobrenome">
</form>
```


---

### O elemento `<label>`

Este elemento define uma legenda para um campo de entrada. 

Esta tag possui o atributo `for`. Este atributo deve ser igual o atributo `id` do elemento `<input>`, pois isso que fará a ligação entre os dois.

---

### Botões do rádio

O `<input type="radio">` define um botão de rádio.

Este atributo irá criar diversos botões de opção, onde o usuário irá poder escolher somente uma.

###### exemplo:

``` html
<form>
    <input type="radio" id="html" name="fav_language" value="HTML">
    <label for="html">HTML</label><br>
    <input type="radio" id="css" name="fav_language" value="CSS">
    <label for="css">CSS</label><br>
    <input type="radio" id="javascript" name="fav_language" value="JavaScript">
    <label for="javascript">JavaScript</label>
</form>
```


---

### Caixas de seleção

O `<input type="checkbox">` define uma caixa de seleção.

Este atributo irá criar diversas caixas de opção, onde o usuário irá poder escolher uma ou mais opções.

###### exemplo:

``` html
<form>
    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
    <label for="vehicle1">HTML</label><br>
    <input type="checkbox" id="vehicle2" name="vehicle2" value="Car">
    <label for="vehicle2">CSS</label><br>
    <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat">
    <label for="vehicle3">JavaScript</label>
</form>
```


---

### Botão de enviar

O `<input type="submit">` define um botão para enviar os dados do formulário para um manipulador de formulários.

O manipulador de formulário é especificado no atributo  `action` do formulário.

###### exemplo:

``` html
<form action="/action_page.php">
    <label for="nome">Nome:</label><br>
    <input type="text" id="name" name="name"><br>
    <label for="sobrenome">Sobrenome:</label><br>
    <input type="text" id="sobrenome" name="sobrenome"><br>
    <input type="submit" value="Submit">
</form>
```


---

### O atributo de nome para `<input>`

Observe que nos exemplos acima, cada campo de entrada possui um atributo `name` a ser enviado.

Se o atributo `name` for omitido, o valor do campo de entrada não será enviado.

***

> **PRÓXIMA AULA:** [Formulários HTML - Atributos](../10.2-formularios-atributos)

***


> **FONTE DO CONTEÚDO**:
>
> - [W3Schools - Formulários HTML](https://www.w3schools.com/html/html_forms.asp)