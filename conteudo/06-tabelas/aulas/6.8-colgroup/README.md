# Colgroup - Grupo de tabela

O elemento `<colgroup>` é usado para estilizar colunas especificas de uma tabela.

No exemplo abaixo, estilizaremos somente as duas primeiras colunas da tabela. 

``` html
<table>
  <colgroup>
    <col span="2" style="background-color: #D6EEEE">
  </colgroup>
  <tr>
    <th>SEG</th>
    <th>TER</th>
    <th>QUA</th>
    <th>QUI</th>
...
```

O elemento `<colgroup>` e usado como um contêiner para as especificações da coluna.

Cada grupo é especificado com um elemento `<col>`.

O atributo `span` especifica quantas colunas irá receber o estilo.

O atributo `style` especifica o estilo para fornecer as colunas.

----

### Propriedades legais de CSS

Há apenas uma seleção muito limitada de propriedades CSS que podem ser usadas no colgroup:

- `width`
- `visibility`
- `background`
- `border`

---

### Vários elementos de coluna

Para estilizar mais colunas com estilos diferentes:

``` html
<table>
  <colgroup>
    <col span="2" style="background-color: #D6EEEE">
    <col span="3" style="background-color: pink">
  </colgroup>
  <tr>
    <th>SEG</th>
    <th>TER</th>
    <th>QUA</th>
    <th>QUI</th>
...
```

---

### Grupos vazios

Para estilizar colunas no meio da tabela, é só inserir um elemento `<col>` sem estilos:

``` html
<table>
  <colgroup>
    <col span="3">
    <col span="2" style="background-color: pink">
  </colgroup>
  <tr>
    <th>SEG</th>
    <th>TER</th>
    <th>QUA</th>
    <th>QUI</th>
...
```

---

### Ocultar colunas

Para ocultar uma coluna, utilizamos a propriedade `visibility: collapse`:

``` html
<table>
  <colgroup>
    <col span="2">
    <col span="3" style="visibility: collapse">
  </colgroup>
  <tr>
    <th>SEG</th>
    <th>TER</th>
    <th>QUA</th>
    <th>QUI</th>
...
```

***

> **PRÓXIMO CONTEÚDO:** [Listas](/conteudo/07-listas)

***


> **FONTE DO CONTEÚDO**:
>
> - [W3Schools - Colgroup](https://www.w3schools.com/html/html_table_colgroup.asp)