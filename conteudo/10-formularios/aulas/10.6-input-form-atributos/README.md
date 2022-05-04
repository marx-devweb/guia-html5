# Atributos do Input form 

### O atributo `form`

Especifica a qual formulário o elemento `<input>` pertence.

O valor deste atributo deve ser igual o valor do atributo `id` do elemento `<form>` que ele pertence.

###### exemplo:

```html
<!--Um campo de entrada localizado fora do formulário HTML (mas ainda faz parte do formulário):-->

<form action="/action_page.php" id="form1">
  <label for="nome">Nome:</label>
  <input type="text" id="nome" name="nome"><br><br>
  <input type="submit" value="Enviar">
</form>
<br>
<label for="sobrenome">Sobrenome:</label>
<input type="text" id="sobrenome" name="sobrenome" form="form1">
```

----

### O atributo `formaction`

Especifica a URL do arquivo que processará a entrada de dados quando o formulário for enviado.

Este atributo substitui o atributo `action` do elemento `<form>`. 

Válido apenas para os input type `submit` e `image`.

###### exemplo:

```html
<!--Um formulário HTML com dois botões de envio, com ações diferentes-->
<form action="/action_page.php">
    <label for="nome">Nome:</label>
    <input type="text" id="nome" name="nome"><br><br>
    <label for="sobrenome">Sobrenome:</label>
    <input type="text" id="sobrenome" name="sobrenome"><br><br>
    <input type="submit" value="Enviar">
    <input type="submit" formaction="/action_page2.php" value="Enviar como ADM">
</form>
```

---

### O atributo `formenctype`

Define como os dados do formulário, com `method="post"`, devem ser codificados quando enviados.

Válido apenas para os input type `submit` e `image`.

###### exemplo:

```html
<!--Um formulário com dois botões de envio. O primeiro envia os dados do formulário com codificação padrão, o segundo envia os dados do formulário codificados como "multipart/form-data":-->

<form action="/action_page_binary.asp" method="post">
    <label for="nome">Nome:</label>
    <input type="text" id="nome" name="nome"><br><br>
    <input type="submit" value="Enviar">
    <input type="submit" formenctype="multipart/form-data" value="Enviar como Multipart/form-data">
</form>
```

----

### O atributo `formmethod`

Define o método HTTP para enviar dados de formulário para a URL de ação.

Este atributo substitui o atributo `method` do elemento `<form>`.

Válido apenas para os input type `submit` e `image`.

###### exemplo:

```html
<!--Um formulário com dois botões de envio. O primeiro envia os dados do formulário com method="get". O segundo envia os dados do formulário com method="post":-->

<form action="/action_page.php" method="get">
    <label for="nome">Nome:</label>
    <input type="text" id="nome" name="nome"><br><br>
    <label for="sobrenome">Sobrenome:</label>
    <input type="text" id="sobrenome" name="sobrenome"><br><br>
    <input type="submit" value="Enviar usando método GET">
    <input type="submit" formmethod="post" value="Enviar usando método POST">
</form>
```

---

### O atributo `formtarget`

Define um nome ou uma palavra-chave que indica onde exibir a resposta recebida após o envio do formulário.

Esse atributo substitui o atributo de destino do elemento `<form>`.

Válido apenas para os input type `submit` e `image`.

###### exemplo:

```html
<!--Um formulário com dois botões de envio, com diferentes janelas de destino:-->

<form action="/action_page.php">
    <label for="nome">Nome:</label>
    <input type="text" id="nome" name="nome"><br><br>
    <label for="sobrenome">Sobrenome:</label>
    <input type="text" id="sobrenome" name="sobrenome"><br><br>
    <input type="submit" value="Enviar">
    <input type="submit" formtarget="_blank" value="Enviar para uma nova janela">
</form>
```

---

### O atributo `formnovalidate`

Define que um elemento `<input>` não deve ser validado quando for enviado.

Este atributo substitui o atributo `novalidate` do elemento `<form>`.

###### exemplo:

```html
<!--Um formulário com dois botões de envio (com e sem validação):-->

<form action="/action_page.php">
    <label for="email">Informe o email:</label>
    <input type="email" id="email" name="email"><br><br>
    <input type="submit" value="Enviar">
    <input type="submit" formnovalidate="formnovalidate" value="Enviar sem validação">
</form>
```

---

### O atributo `novalidate`

Define que todos os dados do formulário não devem ser validados quando enviados.

###### exemplo:

```html
<form action="/action_page.php" novalidate>
    <label for="email">Informe o email:</label>
    <input type="email" id="email" name="email"><br><br>
    <input type="submit" value="Enviar">
</form>
```


***

> **PRÓXIMO CONTEÚDO:** [Gráficos HTML](/conteudo/11-graficos)

***


> **FONTE DO CONTEÚDO**:
>
> - [W3Schools - Formulário de entrada HTML - Atributos](https://www.w3schools.com/html/html_form_attributes_form.asp)