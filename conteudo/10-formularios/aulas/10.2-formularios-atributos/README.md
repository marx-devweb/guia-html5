# Formulários HTML - Atributos

Neste capítulo, iremos abordar os diferentes atributos para o elemento HTML `<form>`.

---

### O atributo `action`

Este atributo define para onde os dados são enviados. Seu valor deve ser um URL válido. Se esse atributo não for fornecido, os dados serão enviados para o URL da página que contém o formulário.

No exemplo abaixo, os dados do formulário são enviados para um arquivo chamado "action_page.php":

###### exemplo:

``` html
<form action="/action_page.php">
  <label for="nome">Nome:</label><br>
  <input type="text" id="nome" name="nome" value="Marx"><br>
  <label for="sobrenome">Sobrenome:</label><br>
  <input type="text" id="sobrenome" name="sobrenome" value="Santos"><br><br>
  <input type="submit" value="Submit">
</form>
```

---

### O atributo `target`

O atributo `target` especifica aonde exibir a resposta após o envio do formulário.

Este atributo possui os seguintes valores:

```html
<form action="/action_page.php" target="_blank"><!--A resposta é exibida em uma nova janela ou guia-->
```

```html
<form action="/action_page.php" target="_self"><!--A resposta é exibida na janela atual-->
```

```html
<form action="/action_page.php" target="_parent"><!--A resposta é exibida no quadro pai-->
```

```html
<form action="/action_page.php" target="_top"><!--A resposta é exibida em todo o corpo da janela-->
```

---

### O atributo `method`

Este atributo define como os dados são enviados.

O protocolo HTTP fornece algumas maneiras de executar um pedido de envio, é dois deles podem ser usados para enviar os dados de formulários HTML, são eles: o método GET e o método POST.

- `method="get"` - Este método é usado pelo navegador para pedir ao servidor para enviar de volta um determinado recurso: "Hey servidor, eu quero obter este recurso." Nesse caso, o navegador envia um corpo vazio. Como o corpo está vazio, se um formulário é enviado usando esse método, os dados enviados para o servidor são anexados ao URL.
- `method="post"` - Este é o método que o navegador envia ao servidor para pedir uma resposta que leva em conta os dados fornecidos no corpo da solicitação HTTP: "Hey servidor, dê uma olhada nesses dados e envie-me de volta um resultado apropriado". Se um formulário é enviado usando esse método, os dados são anexados ao corpo do pedido HTTP.

###### exemplo método GET:

``` html
<form action="/action_page.php" method="get">
```

###### exemplo método POST:

``` html
<form action="/action_page.php" method="post">
```

#### Observações sobre GET:

- Anexa os dados do formulário à URL, em pares nome/valor
- NUNCA use GET para enviar dados confidenciais! (os dados do formulário enviado são visíveis na URL!)
- O comprimento de um URL é limitado (2048 caracteres)
- Útil para envios de formulários em que um usuário deseja marcar o resultado
- GET é bom para dados não seguros, como strings de consulta no Google

#### Observações sobre o POST:

- Anexa os dados do formulário dentro do corpo da solicitação HTTP (os dados do formulário enviado não são mostrados na URL)
- O POST não tem limitações de tamanho e pode ser usado para enviar grandes quantidades de dados.
- Envios de formulários com POST não podem ser marcados

---

### O atributo de `autocomplete`

Este atributo especifica se um formulário deve ter o preenchimento automático ativado ou desativado.

Quando o preenchimento automático está ativado, o navegador completa automaticamente os valores com base nos valores que o usuário inseriu anteriormente.

###### exemplo:

``` html
<form action="/action_page.php" autocomplete="on">
```

---

### O atributo `novalidate`

Quando ativado, este atributo especifica que os dados do formulário não devem ser validados quando enviado.

###### exemplo:

```html
<form action="/action_page.php" novalidate>
```

***

> **PRÓXIMA AULA:** [Formulários HTML - Elementos](../10.3-formularios-elementos)

***


> **FONTE DO CONTEÚDO**:
>
> - [W3Schools - Formulários HTML - Atributos](https://www.w3schools.com/html/html_forms_attributes.asp)