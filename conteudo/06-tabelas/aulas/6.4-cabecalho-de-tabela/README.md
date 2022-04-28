# Cabeçalhos de tabela

Para definir o cabeçalho de uma tabela, utilizamos a tag `<th>`.

*Por padrão, o texto nos elementos `<th>` está em negrito e centralizado, mas você podemos alterar isso com CSS.*

`th` significa table header (cabeçalho da tabela)

***

### Cabeçalhos de tabela vertical

Para usar a primeira coluna como cabeçalho da tabela, podemos definir a primeira célula de cada linha com um elemento `<th>`:

``` html
<table>
    <tr>
        <th>Nome</th>    
        <td>Marx</td>
        <td>Emily</td>        
    </tr>
    <tr>
        <th>Sobrenome</th>
        <td>Santos</td>
        <td>Beatriz</td>
    </tr>
    <tr>
        <th>Idade</th>
        <td>26</td>
        <td>25</td>
    </tr>
</table>
```

***

### Alinhar cabeçalhos de tabela

Para alinhar um cabeçalho da tabela à esquerda, podemos utilizar a propriedade CSS `text-align`:

``` css
th {
  text-align: left;
}
```

***

### Cabeçalho para várias colunas

Para definir que um cabeçalho se estenda por duas ou mais colunas, podemos usar o atributo `colspan` no elemento `<th>`:

``` html
 <table>
     <tr>
        <th colspan="2">Nome Completo</th>
        <th>Idade</th>
    </tr>
	...
```

***

### Legenda da tabela

Para adicionar uma legenda em uma tabela, podemos usar a tag `<caption>`:

```` html
<table>
    <caption>Dados Pessoais</caption>
     <tr>
        <th>Nome</th>
        <th>Sobrenome</th>
        <th>Idade</th>
     </tr>
	...
````

***

> **PRÓXIMA AULA:** [Padding e Spacing](../6.5-padding-spacing)

***


> **FONTE DO CONTEÚDO**:
>
> - [W3Schools - Cabeçalhos de tabela](https://www.w3schools.com/html/html_table_headers.asp)