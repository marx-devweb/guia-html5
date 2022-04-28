# Tabela HTML

A tag `<table>` define uma tabela em HTML. Além desta tag, podemos utilizar outras diversas tags para para criar linhas e células na tabela HTML, conforme tabela abaixo. 

| Tag          | Descrição                                                    |
| ------------ | :----------------------------------------------------------- |
| `<table>`    | Define a tabela                                              |
| `<th>`       | Define uma célula de cabeçalho em uma tabela                 |
| `<tr>`       | Define uma linha em uma tabela                               |
| `<td>`       | Define uma célula em uma tabela                              |
| `<caption>`  | Define uma legenda de tabela                                 |
| `<colgroup>` | Especifica um grupo de uma ou mais colunas em uma tabela para formatação |
| `<col>`      | Especifica as propriedades da coluna para cada coluna dentro de um elemento `<colgroup>` |
| `<thead>`    | Agrupa o conteúdo do cabeçalho em uma tabela                 |
| `<tbody>`    | Agrupa o conteúdo do corpo em uma tabela                     |
| `<tfoot>`    | Agrupa o conteúdo do rodapé em uma tabela                    |

---

### Definir uma tabela HTML

Abaixo temos uma estrutura básica de uma tabela:

###### código-fonte:

```` html
 <table>
     <tr>
        <th>Nome</th>
        <th>Sobrenome</th>
        <th>Idade</th>
     </tr>
     <tr>
         <td>Marx</td>
         <td>Santos</td>
         <td>26</td>
     </tr>
     <tr>
         <td>Emily</td>
         <td>Beatriz</td>
         <td>25</td>
     </tr>
</table>
````

###### resultado: 

| Nome  | Sobrenome | Idade |
| :---- | --------- | ----- |
| Marx  | Santos    | 26    |
| Emily | Beatriz   | 25    |

***

### Células da Tabela

Uma célula e definida pela pela tag `<td>`.

*`td` significa table data (dados da tabela).*

***

### Linhas da tabela

Uma linha da tabela e definida pela tag `<tr>`.

*`tr` significa table row (linha da tabela).*

***

### Cabeçalhos de tabela

Podemos definir um cabeçalho para nossa tabela utilizamos a tag `<th>`.

*`th` significa table header (cabeçalho da tabela)*

***

> **PRÓXIMA AULA:** [Bordas da tabela](../6.2-bordas-da-tabela)

***


> **FONTE DO CONTEÚDO**:
>
> - [W3Schools - Tabela HTML](https://www.w3schools.com/html/html_tables.asp)

