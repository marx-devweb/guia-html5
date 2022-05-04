# Atributos do Input

### O atributo `value`

Define um valor inicial para um campo de entrada. Este atributo é opcional exceto quando o valor do atributo `type` for `radio` ou `checkbox`.

```html
<form>
    <label for="nome">Nome:</label><br>
    <input type="text" id="nome" name="nome" value="Marx"><br>
    <label for="sobrenome">Sobrenome:</label><br>
    <input type="text" id="sobrenome" name="sobrenome" value="Santos">
</form>
```

---

### O atributo `readonly`

Define um campo de entrada que é somente leitura, isso significa que o usuário não pode modificar o campo.

###### exemplo:

```html
<form>
    <label for="nome">Nome:</label><br>
    <input type="text" id="nome" name="nome" value="Marx" readonly><br>
    <label for="sobrenome">Sobrenome:</label><br>
    <input type="text" id="sobrenome" name="sobrenome" value="Santos">
</form>
```

---

### O atributo `disabled`

Define um campo de entrada desabilitado, ou seja, que o campo de entrada não esta disponível para interação.

###### exemplo:

```html
<form>
    <label for="nome">Nome:</label><br>
    <input type="text" id="nome" name="nome" value="Marx" disabled><br>
    <label for="sobrenome">Sobrenome:</label><br>
    <input type="text" id="sobrenome" name="sobrenome" value="Santos">
</form>
```

---

### O atributo `size`

Define a largura visível de um campo de entrada. Este tamanho e definido em caracteres.

Este atributo apenas funciona quando o atributo `type` está definido como: `text`, `search`, `tel`, `url`, `email` ou `password`.

###### exemplo:

```html
<form>
    <label for="nome">Nome:</label><br>
    <input type="text" id="nome" name="nome" size="50"><br>
    <label for="sobrenome">Sobrenome:</label><br>
    <input type="text" id="sobrenome" name="sobrenome" size="4">
</form>
```

---

### O atributo `maxlength`

Define um número máximo de caracteres que o usuário pode inserir.

###### exemplo:

```html
<form>
    <label for="nome">Nome:</label><br>
    <input type="text" id="nome" name="nome" size="50"><br>
    <label for="pin">PIN:</label><br>
    <input type="text" id="pin" name="pin" maxlength="4" size="4">
</form>
```

---

### Os atributos `min` e `max`

Definem um valor mínimo e um valor máximo para um campo de entrada.

Estes atributos apenas  funcionam quando o atributo `type` está definido como: `number`, `range`, `date`, `datetime-local`, `month`, `time` e `week`.

###### exemplo:

```html
<form>
    <label for="data-max">Insira uma data antes de 01-01-1980:</label>
    <input type="date" id="data-max" name="data-max" max="1979-12-31"><br><br>
    
    <label for="data-min">Insira uma data após 01-01-2000:</label>
    <input type="date" id="data-min" name="data-min" min="2000-01-02">
    
    <label for="quantidade">Informe uma quantidade (entre 1 e 5):</label>
    <input type="number" id="quantidade" name="quantidade" min="1" max="5">    
</form>
```

---

### O atributo `multiple`

Define que o usuário pode inserir mais de um valor no campo de entrada.

Este atributo apenas funciona quando o atributo `type` está definido como: `email` ou `file`.

###### exemplo:

```html
<form>
    <label for="files">Selecione um arquivo:</label>
    <input type="file" id="files" name="files" multiple>
</form>
```

---

### O atributo `pattern`

Define uma expressão regular usada para validar o valor do campo de entrada. O padrão deve casar com o valor completo da entrada, não apenas uma parte.

Este atributo apenas funciona quando o atributo `type` está definido como: `text`, `search`, `tel`, `url` ou `email`.

> **Dica**: Use o atributo `title` para descrever o padrão para ajudar o usuário. 

###### exemplo:

```html
<form>
    <label for="abreviacao">Informe a abreviação do seu país:</label>
    <input type="text" id="abreviacao" name="abreviacao" pattern="[A-Za-z]{3}" title="Abreviação do país em três letras">
</form>
```

---

### O atributo `placeholder`

Define uma dica para o usuário do que ele pode inserir no campo de entrada. 

Este atributo apenas funciona quando o atributo `type` está definido como: `text`, `search`, `tel`, `url` ou `email`.

###### exemplo:

```html
<form>
    <label for="telefone">Informe o número de telefone:</label>
    <input type="tel" id="telefone" name="telefone" placeholder="123-45-678"  pattern="[0-9]{3}-[0-9]{5}-[0-9]{4}">
</form>
```

---

### O atributo `required`

Define um campo de entrada que deve ser preenchido antes de enviar o formulário.

Este atributo apenas funciona quando o atributo `type` está definido como: `text`, `search`, `url`, `tel`, `email`, `password`, `date-pickers`, `number`, `checkbox`, `radio` e `file`.

###### exemplo:

```html
<form>
    <label for="usuario">Nome de usuário:</label>
    <input type="text" id="usuario" name="usuario" required>
</form>
```

---

### O atributo `step`

Define os intervalos de números legais para um campo de entrada.

**Exemplo**: if step="3", os números legais podem ser -3, 0, 3, 6, etc.

> **Dica:** Este atributo pode ser usado junto com os atributos `max` e `min` para criar um intervalo de valores válidos.

###### exemplo:

```html
<form>
    <label for="pontos">Pontos:</label>
    <input type="number" id="pontos" name="pontos" step="3">
</form>
```

---

### O atributo `autofocus`

Define um campo de entrada com um foco principal assim que a página for carregada. 

Apenas um elemento do formulário em um documento pode ter o atributo `autofocus`.

Este atributo não pode ser aplicado se o atributo `type` estiver definido como `hidden`.

###### exemplo:

```html
<form>
    <label for="nome">Nome:</label><br>
    <input type="text" id="nome" name="nome" autofocus><br>
    <label for="sobrenome">Sobrenome:</label><br>
    <input type="text" id="sobrenome" name="sobrenome">
</form>
```

---

### Os atributos `height` e `width`

Definem a altura e a largura de um `<input type="image">`.

###### exemplo:

```html
<form>
    <label for="nome">Nome:</label>
    <input type="text" id="nome" name="nome"><br><br>
    <label for="sobrenome">Sobrenome:</label>
    <input type="text" id="sobrenome" name="sobrenome"><br><br>
    <input type="image" src="img_submit.gif" alt="Submit" width="48" height="48">
</form>
```

---

### O atributo `list`

Define uma lista de opções pré-definidas de sugestões para o usuário.

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

----

### O atributo `autocomplete`

Define um formulário ou campo de entrada com um preenchimento automático ativado ou desativado, ou seja, quando o usuário começa a digitar em um campo, o navegador exibe opções para preencher o campo, com base nos valores digitados anteriormente.

Este atributo não pode ser aplicado se o atributo `type` estiver definido como: `text`, `search`, `url`, `tel`, `email`, `password`, `datepickers`, `range`, e `color`.

###### exemplo:

```html
<form action="/action_page.php" autocomplete="on">
    <label for="nome">Nome:</label>
    <input type="text" id="nome" name="nome"><br><br>
    <label for="sobrenome">Sobrenome:</label>
    <input type="text" id="sobrenome" name="sobrenome"><br><br>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" autocomplete="off"><br><br>
    <input type="submit" value="Submit">
</form>
```

***

> **PRÓXIMA AULA:** [Atributos do input form](../10.6-input-form-atributos)

***


> **FONTE DO CONTEÚDO**:
>
> - [W3Schools - Formulários HTML - Atributos de entrada](https://www.w3schools.com/html/html_form_attributes.asp)