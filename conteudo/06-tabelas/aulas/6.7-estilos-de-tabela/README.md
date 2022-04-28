# Estilos de tabela

Podemos utiliza CSS para melhorar a aparência das nossas tabelas.

---

### Listras zebra horizontal

Utilizamos o pseudo-classe `:nth-child(even)` para estilizar os elementos de linha e obter o efeito de listras de zebra.

```` css
tr:nth-child(even) {
  background-color: #D6EEEE;
}
````

***

### Listras de zebra verticais

Para fazer listras de zebra verticais, estilizamos as colunas `td`.

Definimos os elementos `:nth-child(even)` de dados da tabela como este:

```` css
td:nth-child(even), th:nth-child(even) {
  background-color: #D6EEEE;
}
````

***

### Combinando listras de zebra verticais e horizontais

Para combinar as listras de zebras tanto na vertical quanto na horizontal.

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

Para especificar bordas apenas na parte inferior de cada linha da tabela.

Utilizaremos a propriedade `border-bottom` a todos os elementos `tr` para obter divisores horizontais:

``` css
tr {
  border-bottom: 1px solid #ddd;
}
```

---

### Mesa flutuante

Para destacar as linhas ao passar o mouse, utilizaremos o seletor `tr:hover`:

``` css
tr:hover{
    background-color: #D6EEEE;
}
```

***

> **PRÓXIMO AULA:** [Colgroup](../6.8-colgroup)

***


> **FONTE DO CONTEÚDO**:
>
> - [W3Schools - Estilo de tabela](https://www.w3schools.com/html/html_table_styling.asp)