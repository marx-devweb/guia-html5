# Formulários HTML - Input Types (tipos de entrada)

Aqui estão os diferentes tipos de entrada em HTML:

### `Type="text"`

Define um campo para entrada de texto de linha única.

###### sintaxe:

``` html
<input type="text">
```

###### exemplo:

```html
<form>
    <label for="nome">Nome:</label><br>
    <input type="text" id="nome" name="nome"><br>
    <label for="sobrenome">Sobrenome:</label><br>
    <input type="text" id="sobrenome" name="sobrenome">
</form>
```

---

### `Type="password"`

Define um campo para entrada de senha.

###### sintaxe:

```html
<input type="password" id="pwd" name="pwd">
```

###### exemplo:

```html
<form>
  <label for="username">Nome de Usuário:</label><br>
    <input type="text" id="username" name="username"><br>
    <label for="pwd">Senha:</label><br>
    <input type="password" id="pwd" name="pwd">
</form>
```

---

### `Type="submit"`

Define um botão para enviar os dados do formulário.

###### sintaxe:

```html
<input type="submit" value="Submit">
```

###### exemplo:

```html
<form action="/action_page.php">
    <label for="nome">Nome:</label><br>
    <input type="text" id="nome" name="nome"><br>
    <label for="sobrenome">Sobrenome:</label><br>
    <input type="text" id="sobrenome" name="sobrenome"><br><br>
    <input type="submit" value="Submit">
</form>
```

---

### `Type="reset"`

Define um botão para redefinir todos os valores do formulário já preenchido para seus valores padrão.

###### sintaxe:

```html
<input type="reset">
```

###### exemplo:

```html
<form action="/action_page.php">
    <label for="nome">Nome:</label><br>
    <input type="text" id="nome" name="nome"><br>
    <label for="sobrenome">Sobrenome:</label><br>
    <input type="text" id="sobrenome" name="sobrenome"><br><br>
    <input type="submit" value="Submit">
    <input type="reset">
</form>
```

---

### `Type="radio"`

Define um botão de escolha.

Este atributo irá criar diversos botões de opções, onde o usuário irá poder escolher somente uma opção.

###### sintaxe:

```html
<input type="radio">
```

###### exemplo:

```html
<form>
    <input type="radio" id="html" name="linguagens" value="HTML">
    <label for="html">HTML</label><br>
    <input type="radio" id="css" name="linguagens" value="CSS">
    <label for="css">CSS</label><br>
    <input type="radio" id="javascript" name="linguagens" value="JavaScript">
    <label for="javascript">JavaScript</label>
</form>
```

---

### `Type="checkbox"`

Define uma caixa de marcação.

Este atributo irá criar diversas caixas de marcação, onde o usuário irá poder escolher uma ou mais opções.

###### sintaxe:

```html
<input type="checkbox">
```

###### exemplo:

```html
<form>
    <input type="checkbox" id="linguagem1" name="linguagem1" value="HTML">
    <label for="linguagem1">HTML</label><br>
    <input type="checkbox" id="linguagem2" name="linguagem2" value="CSS">
    <label for="linguagem2">CSS</label><br>
    <input type="checkbox" id="linguagem3" name="linguagem3" value="JavaScript">
    <label for="linguagem3">JavaScript</label>
</form>
```

---

### `Type="button"`

Define um botão.

###### sintaxe:

```html
<input type="button">
```

###### exemplo:

```html
<input type="button" onclick="alert('Olá Mundo!')" value="Clique!">
```

---

### `Type="color"`

Define um campo para o usuário escolher uma cor. A interface de um seletor de cores não tem nenhuma funcionalidade obrigatória a não ser aceitar cores simples em texto.

###### sintaxe:

```html
<input type="color">
```

###### exemplo:

```html
<form>
    <label for="favcolor">Selecione sua cor favorita:</label>
    <input type="color" id="favcolor" name="favcolor">
</form>
```

---

### `Type="date"`

Define um campo para o usuário informar uma data (ano, mês e dia, sem horário).

###### sintaxe:

```html
<input type="date">
```

###### exemplo:

```html
<form>
    <label for="data">Informe uma data:</label>
    <input type="date" id="data" name="data">
</form>
```

 Também podemos utilizar os atributos `min` e `max` para adicionar restrições a datas:

``` html
<form>
    <label for="datamax">Insira uma data antes de 01-01-1980:</label>
    <input type="date" id="datamax" name="datamax" max="1979-12-31"><br><br>
    <label for="datamin">Insira uma data após 01-01-2000:</label>
    <input type="date" id="datamin" name="datamin" min="2000-01-02">
</form>
```

---

### `Type="datetime-local"`

Define um campo para o usuário informar uma data e horário, sem fuso horário.

###### sintaxe:

```html
<input type="datetime-local">
```

###### exemplo:

```html
<form>
    <label for="datahora">Informe uma data e horas:</label>
    <input type="datetime-local" id="datahora" name="datahora">
</form>
```

---

### `Type="email"`

Define um campo para o usuário inserir um endereço de e-mail. O valor do campo é validado para estar vazio ou ter um único endereço de e-mail válido antes de ser enviado.

###### sintaxe:

```html
<input type="email">
```

###### exemplo:

```html
<form>
    <label for="email">informe um email:</label>
    <input type="email" id="email" name="email">
</form>
```

---

### `Type="file"`

Define um campo para o usuário anexar um arquivo e um botão "Procurar" para uploads de arquivos.

###### sintaxe:

```html
<input type="file">
```

###### exemplo:

```html
<form>
    <label for="arquivo">Selecione um arquivo:</label>
    <input type="file" id="arquivo" name="arquivo">
</form>
```

---

### `Type="hidden"`

Define um campo de entrada que não é exibido para o usuário mas cujo valor é enviado ao servidor.

Um campo oculto permite que os desenvolvedores da Web incluam dados que não podem ser vistos ou modificados pelos usuários quando um formulário é enviado.

Um campo oculto geralmente armazena o registro do banco de dados que precisa ser atualizado quando o formulário é enviado.

###### sintaxe:

```html
<input type="hidden">
```

###### exemplo:

```html
<form>
    <label for="nome">Nome:</label>
    <input type="text" id="nome" name="nome"><br><br>
    <input type="hidden" id="custId" name="custId" value="3487">
    <input type="submit" value="Submit">
</form>
```

---

### `Type="month"`

Define um campo para o usuário informar o mês e ano, sem fuso horário.

###### sintaxe:

```html
<input type="month">
```

###### exemplo:

```html
<form>
    <label for="mes-aniversario">Informe o mês e ano do seu aniversário:</label>
    <input type="month" id="mes-aniversario" name="mes-aniversario">
</form>
```

---

### `Type="number"`

Define um campo para o usuário inserir números de ponto flutuante.

###### sintaxe:

```html
<input type="number">
```

###### exemplo:

```html
<form>
  <label for="quantity">Informe uma quantidade (entre 1 e 5):</label>
  <input type="number" id="quantidade" name="quantidade" min="1" max="5">
</form>
```

---

### `Type="range"`

Define um controle para inserir um número cujo valor exato não é importante (como um controle deslizante). O intervalo padrão é de 0 a 100. No entanto, podemos definir restrições sobre quais números são aceitos com os atributos `min`, `max` e `step`.

###### sintaxe:

```html
<input type="range">
```

###### exemplo:

```html
<form>
    <label for="vol">Volume (entre 1 e 5):</label>
    <input type="range" id="vol" name="vol" min="0" max="50">
</form>
```

---

### `Type="search"`

Define um campo de texto para o usuário digitar termos de busca; quebras de linha são automaticamente removidas do valor entrado.

###### sintaxe:

```html
<input type="search">
```

###### exemplo:

```html
<form>
    <label for="pesquisa">Oque você procura?</label>
    <input type="search" id="pesquisa" name="pesquisa">
</form>
```

---

### `Type="tel"`

Define um campo para o usuário inserir um número de telefone.

###### sintaxe:

```html
<input type="tel">
```

###### exemplo:

```html
<form>
    <label for="telefone">Digite seu número de telefone:</label>
    <input type="tel" id="telefone" name="telefone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}">
</form>
```

---

### `Type="time"`

Define um campo para o usuário inserir um horário sem fuso horário.

###### sintaxe:

```html
<input type="time">
```

###### exemplo:

```html
<form>
    <label for="hora">Informe um horário:</label>
    <input type="time" id="hora" name="hora">
</form>
```

---

### `Type="url"`

Define um campo para o usuário informar um endereço de URL.

###### sintaxe:

```html
<input type="url">
```

###### exemplo:

```html
<form>
    <label for="paginainicial">Adicione sua página inicial:</label>
    <input type="url" id="paginainicial" name="paginainicial">
</form>
```

---

### `Type="week"`

Define um campo para o usuário selecionar uma semana e ano.

###### sintaxe:

```html
<input type="week">
```

###### exemplo:

```html
<form>
    <label for="week">Select a week:</label>
    <input type="week" id="week" name="week">
</form>
```

***

> **PRÓXIMA AULA:** [Formulários HTML - Atributos de entrada](../10.5-formularios-atributos-de-entrada)

***


> **FONTE DO CONTEÚDO**:
>
> - [W3Schools - Formulários HTML - Input Types](https://www.w3schools.com/html/html_form_input_types.asp)