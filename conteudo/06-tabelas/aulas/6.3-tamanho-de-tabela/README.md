# Tamanhos de tabela

Podemos utilizar o atributo `style` com as propriedades `width` ou `height` para especificar o tamanho de uma tabela, linha ou coluna.

***

### Largura da tabela 

Para definir a largura de uma tabela, utilizamos o atributo  `style` ao elemento `<table>`:

###### código-fonte:

``` html
<table style="width:100%">
    <tr>
        <th>Nome</th>
        <th>Sobrenome</th>
        <th>Idade</th>
    </tr>
...
```

***

### Largura da coluna da tabela

Para definir a largura de uma coluna específica, utilizamos o atributo `style` em um elemento `<th>` ou `<td>`:

``` html
<table>
    <tr>
        <th style="width:70%">Nome</th>
        <th>Sobrenome</th>
        <th>Idade</th>
    </tr>
...
```

***

### Altura da linha da tabela

Para definir a altura de uma linha específica, utilizamos o atributo `style` em um elemento de linha da tabela:

````html
<table>
    <tr>
        <th>Nome</th>
        <th>Sobrenome</th>
        <th>Idade</th>
    </tr>
    <tr style="height:200px">
        <td>Marx</td>
        <td>Santos</td>
        <td>26</td>
    </tr>
...
````

***

> **PRÓXIMA AULA:** [Cabeçalhos de tabela](../6.4-cabecalho-de-tabela)

***


> **FONTE DO CONTEÚDO**:
>
> - [W3Schools - Tamanhos de tabela](https://www.w3schools.com/html/html_table_sizes.asp)