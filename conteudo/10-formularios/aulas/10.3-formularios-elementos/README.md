# Formulários HTML - Elementos

### O elemento `<form>`

Define um formulário HTML. 

Este elemento suporta alguns atributos específicos para configurar a forma como o formulário se comporta. Todos os seus atributos são opcionais, mas é considerada a melhor prática sempre definir pelo menos o atributo `action `e o atributo `method`.

- O atributo `action` define o local (uma URL) em que os dados recolhidos do formulário devem ser enviados.
- O atributo `method` define qual o método HTTP para enviar os dados (ele pode ser "**GET**" ou "**POST**").

Um formulário possui diferentes tipos de elementos de entrada, como: campos de texto (linha única ou de várias linhas), caixas de seleção, botões de opção, botões de envio, etc.

---

### O elemento `<input>`

Define os campos de entrada de dados.

Este elemento pode ser exibido de várias maneiras, dependendo do atributo `type`.

###### exemplo:

```html
<label for="nome">Nome:</label>
<input type="text" id="nome" name="nome">
```

>  Todos os valores do atributo  `type` são abordados na próxima aula: [Formulários HTML - Input Types](../10.4-formularios-input-types)

---

### O elemento `<label>`

Define um rótulo para vários elementos do formulário.

Esta tag possui o atributo `for`. Este atributo deve ser igual o atributo `id` do elemento `<input>`, pois isso que fará a ligação entre os dois.

---

### O elemento `<select>`

Define uma lista suspensa:

###### exemplo: 

``` html
<label for="linguagens">Escolha uma linguagem:</label>
<select id="linguagens" name="linguagens">
    <option value="html">HTML</option>
    <option value="css">CSS</option>
    <option value="javascript">JavaScript</option>
    <option value="phyton">Phyton</option>
</select>
```

Os elementos `<option>` definem uma opção que pode ser selecionada.

Por padrão, o primeiro item na lista suspensa é selecionado.

Para definir uma opção pré-selecionada, adicione o `selected`atributo à opção:

###### exemplo:

```html
<option value="javascript" selected>JavaScript</option>
```

#### Valores Visíveis:

O atributo `size` especifica o número de valores visíveis:

```html
<select id="linguagens" name="linguagens" size="3">
```

#### Permitir várias seleções: 

O atributo `multiple` permitir que o usuário selecione mais de um valor:

```html
<select id="linguagens" name="linguagens" size="3" multiple>
```

---

### O elemento `<textarea>`

Define uma área de texto:

###### exemplo: 

```html
<textarea name="message" rows="10" cols="30">
Deixe aqui sua mensagem!
</textarea>
```

O atributo `rows` especifica o número visível de linhas em uma área de texto.

O atributo `cols` especifica a largura visível de uma área de texto.

---

### O elemento `<button>`

Define um botão clicável.

###### exemplo:

```html
<button type="button" onclick="alert('Olá mundo!')">Clique aqui!</button>
```

---

### Os elementos `<fieldset>` e `<legend>`

O elemento `<fieldset>` é usado para agrupar dados relacionados em um formulário.

O elemento `<legend>` define uma legenda para o elemento `<fieldset>`.

###### exemplo:

```html
<form action="/action_page.php">
  <fieldset>
    <legend>Dados:</legend>
    <label for="nome">Nome:</label><br>
    <input type="text" id="nome" name="nome" value="Marx"><br>
    <label for="sobrenome">Sobrenome:</label><br>
    <input type="text" id="sobrenome" name="sobrenome" value="Santos"><br><br>
    <input type="submit" value="Submit">
  </fieldset>
</form>
```

---

### O elemento `<datalist>`

Este elemento especifica uma lista de opções predefinidas para um elemento `<input>`.

O atributo `list` do elemento `<input>` deve se referir ao atributo `id` do elemento `<datalist>`.

###### exemplo:

```html
<form action="/action_page.php">
  <input list="linguagens">
  <datalist id="linguagens">
    <option value="HTML">
    <option value="CSS">
    <option value="JavaScript">
    <option value="Phyton">
    <option value="PHP">
  </datalist>
</form>
```

---

### O elemento `<output>`

Este elemento representa o resultado de um cálculo (como um realizado por um script).

``` html
<form action="/action_page.php"
  oninput="x.value=parseInt(a.value)+parseInt(b.value)">
  0
  <input type="range"  id="a" name="a" value="50">
  100 +
  <input type="number" id="b" name="b" value="50">
  =
  <output name="x" for="a b"></output>
  <br><br>
  <input type="submit">
</form>
```

***

> **PRÓXIMA AULA:** [Formulários HTML - Input Types](../10.4-formularios-input-types)

***


> **FONTE DO CONTEÚDO**:
>
> - [W3Schools - Formulários HTML - Elementos](https://www.w3schools.com/html/html_form_elements.asp)