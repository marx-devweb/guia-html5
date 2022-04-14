# Elementos HTML

> Um elemento HTML é definido por uma tag inicial, algum conteúdo e uma tag final.

`<tagname>` *O conteúdo vai aqui...* `</tagname>`

###### Exemplo:

```html
<h1>Meu primeiro título</h1>

<p>Meu primeiro parágrafo.</p>
```

***

### Elementos aninhados

Um elemento aninhados e aquele que contem elementos dentro de outros elementos. Todos os documentos HTML consistem em elementos HTML aninhados.

###### exemplo:

```html
<!DOCTYPE html>
<html>
<body>

<h1>Esse e um título</h1>
<p>Esse é um parágrafo.</p>

</body>
</html>
```

No exemplo acima, o elemento  `<html>` é o elemento raiz e define todo o documento HTML. Tem uma tag inicial `<html>` e uma tag final `</html>`. 

Dentro do elemento  `<html>` há um elemento `<body>` que define o corpo do documento, ele também possui uma tag inicial `<body>` e uma tag final `</body>`.

Então, dentro do elemento  `<body>` existem outros dois elementos, que são o `<h1>` e `<p>`. O elemento `<h1>` define um título e também possui uma tag inicial e uma tag final. E a tag `<p>` define um paragrafa e também possui uma tag inicial e final.

***

### Elementos HTML vazios

Elementos HTML sem conteúdo são chamados de elementos vazios.

A tag `<br>` define uma quebra de linha e é um elemento vazio sem uma tag de fechamento:

***

### HTML não diferencia maiúsculas de minúsculas

As tags HTML não diferenciam maiúsculas de minúsculas: `<P>` significa o mesmo que `<p>`.

O padrão HTML não exige tags em minúsculas, mas o W3C recomenda letras minúsculas em HTML e exige letras minúsculas para tipos de documentos mais rígidos, como XHTML.

***

> **PRÓXIMO AULA:** [Atributos](../1.6-atributos)

***


> **FONTE DO CONTEÚDO**:
>
> - [W3Schools - Elementos](https://www.w3schools.com/html/html_elements.asp)
