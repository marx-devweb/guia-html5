# Bordas da Tabela

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

### Bordas arredondadas

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

> **PRÓXIMA AULA:** [Tamanho de tabela](../6.3-tamanho-de-tabela)

***


> **FONTE DO CONTEÚDO**:
>
> - [W3Schools - Bordas da tabela](https://www.w3schools.com/html/html_table_borders.asp)