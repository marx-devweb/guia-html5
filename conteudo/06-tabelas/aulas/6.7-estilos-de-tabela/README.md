# Estilo de tabela



### Cabeçalhos de tabela

Quando queremos que células sejam cabeçalhos, utilizamos a tag `<th>`...`</th>`

*Por padrão, o texto nos elementos `<th>` está em negrito e centralizado, mas você pode alterar isso com CSS.*

`th` significa table header (cabeçalho da tabela)

***

### Cabeçalhos de tabela vertical

Para usar a primeira coluna como cabeçalho de tabela, podemos definir a primeira célula em cada linha como um elemento `<th>`:

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

Por padrão, os cabeçalhos das tabelas estão em negrito e centralizados, para alinhar a esquerda os cabeçalhos da tabela, podemos utilizar a propriedade CSS `text-align`:

``` css
th {
  text-align: left;
}
```

***

### Cabeçalho para várias colunas

Podemos ter uma cabeçalho que se estende por duas ou mais colunas, para isso, podemos usar o atributo `colspan` no elemento `<th>`:

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

### <br>

## Bordas da Tabela

As tabelas podem ter bordas de diferentes estilos e formas.

Ao adicionar uma borda a uma tabela, também adiciona bordas ao redor de cada célula da tabela:

Para adicionar uma borda, podemos utilizar a propriedade CSS `border` nos elementos `<table>`, `<th>` e `<td>`:

###### código-fonte:

```` css
table, th, td {
  border: 1px solid black;
}
````

***

### Bordas recolhidas

Para evitar bordas duplas, podemos usar a propriedade CSS `border-collapse` como `collapse`.

Isso fará com que as bordas sejam reduzidas em uma única borda:

###### código-fonte:

```` css
table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}
````

***

### Bordas estilizada

Para definir uma cor de fundo para cada célula, podemos utilizar a propriedade CSS `background-color` e definir uma cor branca para as bordas:

```` css
table, th, td {
  border: 1px solid white;
  border-collapse: collapse;
}
th, td {
  background-color: #96D4D4;
}
````

***

### Bordas arredondas

Para definir os cantos da tabela e das células arredondados, podemos utilizar a propriedade CSS `border-radius`:

```` css
table, th, td {
  border-radius: 10px;
}
````

***

### Bordas pontilhadas

Para definir as bordas pontilhadas, podemos utilizar a propriedade CSS `border-style`:

```css
th, td {
  border-style: dotted;
}
```

Os seguintes valores são permitidos:

- `dotted`   
- `dashed`   
- `solid`   
- `double`   
- `groove`   
- `ridge`   
- `inset`   
- `outset`   
- `none`   
- `hidden` 

***

### Cor da borda

Para modificar a cor da borda, podemos utilizar a propriedade CSS `border-color`:

 ```` css
th, td {
  border-color: #96D4D4;
}
 ````

***

<br>

## Tamanhos de tabela

As tabelas HTML podem ter tamanhos diferentes para cada coluna, linha ou toda a tabela.

Podemos utilizar o atributo `style` com as propriedades `width` ou `height` para especificar o tamanho de uma tabela, linha ou coluna.

***

### Largura da Tabela 

Para definir a largura de uma tabela, adicione o atributo  `style` ao elemento `<table>`:

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

### Largura da Coluna da Tabela

Para definir o tamanho de uma coluna específica, podemos adicionar atributo `style` em um elemento `<th>` ou `<td>`:

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

Para definir a altura de uma linha específica, podemos adicionar o atributo `style` em um elemento de linha da tabela:

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

***

### Preenchimento de células

O preenchimento da célula é o espaço entre as bordas da célula e o conteúdo da célula.

Por padrão, o preenchimento é definido como 0.

Para adicionar preenchimento nas células da tabela, use a propriedade CSS `padding`:

````css
th, td {
  padding: 15px;
}
````

***

### Espaçamento entre células

Para dar um espaçamento maior entre as células, podemos utilizar a propriedade CSS `border-spacing` no elemento `table`:

```` css
table {
  border-spacing: 30px;
}
````

***

<br>

## Colspan e Rowspan

As tabelas HTML podem ter células que se estendem por várias linhas e/ou colunas.

#### Colspan

Para fazer uma célula se estender por várias colunas, podemos utilizar o atributo `colspan`:

```` html
<table>
     <tr>
        <th colspan="2">Nome Completo</th>
        <th>Idade</th>
     </tr>
 ...
````

#### Rowspan

Para fazer uma célula se estender por várias linhas, podemos utilizar o atributo `rowspan`:

```` html
<table>
     <tr>
        <th>Nome</th>
		<td>Marx</td>
     </tr>
     <tr>
         <th rowspan="2">Telefone</th>
         <td>(61) 99653-0683</td>
     </tr>
     <tr>
         <td>(61) 99514-3762</td>
     </tr>
</table>
````

***

<br>

## Estilo de tabela

Podemos utiliza CSS para melhorar a aparência das nossas tabelas.

### Listras de zebra horizontais

Para adicionar uma cor de fundo em todas as outras linhas da tabela, podemos obter um bom efeito de listras de zebra.

Para estilizar todos os outros elementos de linha da tabela, utilizaremos o seletor  `:nth-child(even)` assim:

```` css
tr:nth-child(even) {
  background-color: #D6EEEE;
}
````

***

### Listras de zebra verticais

Para fazer listras de zebra verticais, estilize todas as outras *colunas* , em vez de todas as outras *linhas*.

Defina os elementos `:nth-child(even)` de dados da tabela como este:

```` css
td:nth-child(even), th:nth-child(even) {
  background-color: #D6EEEE;
}
````

***

### Combine listras de zebra verticais e horizontais

Podemos combinar o estilo dos dois exemplos acima e terá listras em todas as outras linhas e colunas.

Se você usar uma cor transparente, obterá um efeito de sobreposição.

Utilizaremos uma cor  `rgba()` para especificar a transparência da cor:

```css
tr:nth-child(even) {
  background-color: rgba(150, 212, 212, 0.4);
}

th:nth-child(even),td:nth-child(even) {
  background-color: rgba(150, 212, 212, 0.4);
}
```

***

### Divisores horizontais

Podemos especificar bordas apenas na parte inferior de cada linha da tabela, com isso teremos uma tabela com divisores horizontais.

Para conseguir este efeito, adicionaremos a propriedade `border-bottom` a todos os elementos `tr` para obter divisores horizontais:



















***

> **PRÓXIMO AULA:** [Colgroup](../6.8-colgroup)

***


> **FONTE DO CONTEÚDO**:
>
> - [W3Schools - Estilo de tabela](https://www.w3schools.com/html/html_table_styling.asp)