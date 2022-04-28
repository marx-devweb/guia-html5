# Colspan e Rowspan

As tabelas HTML podem ter células que se estendem por várias linhas e/ou colunas.

#### Atributo Colspan

Para fazer uma célula se estender por várias colunas:

```` html
<table>
    <tr>
        <th colspan="2">Nome e Sobrenome</th>
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
    <tr>
        <td>José</td>
        <td>Henrique</td>
        <td>32</td>
    </tr>
</table>
````

---

#### Atributo Rowspan

Para fazer uma célula se estender por várias linhas:

```` html
<table>
    <tr>
        <th>Nome</th>
        <th>Sobrenome</th>
        <th>Telefone</th>
    </tr>
    <tr>
        <td>Marx</td>
        <td>Santos</td>
        <td>(61) 999547-8859</td>
    </tr>
    <tr>
        <td rowspan="2">Emily</td>
        <td rowspan="2">Beatriz</td>
        <td>(61) 989587-6558</td>
    </tr>
    <tr>
        <td>(61) 989891-7826</td>
    </tr>
</table>
````

***

> **PRÓXIMA AULA:** [Estilo de tabela](../6.7-estilos-de-tabela)

***


> **FONTE DO CONTEÚDO**:
>
> - [W3Schools - Colspan e Rowspan](https://www.w3schools.com/html/html_table_colspan_rowspan.asp)