# Elementos semânticos

Um elemento semântico descreve seu significado para o navegador e para o desenvolvedor.

Em HTML existem alguns elementos semânticos que são usados para definir diferentes partes de uma página web:  

<img src="img_sem_elements.gif">

---

### Elemento `<section>`

Define uma seção em um documento HTML.

De acordo com a documentação HTML do W3C: "Uma seção é um agrupamento temático de conteúdo, normalmente com um título".

Exemplos de onde utilizar:

- Capítulos
- Introdução
- Novos itens
- Informações de contato

``` html
<section>
    <h3>Seção 1</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia amet rerum ad. Dolorum dolore maxime doloribus.
    </p>
</section>
<section>
    <h3>Seção 2</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia amet rerum ad. Dolorum dolore maxime doloribus.
    </p>
</section>
```

----

### Elemento `<article>`

Especifica conteúdo independente e auto-contido.

Exemplos de onde utilizar:

- Postagens do fórum
- Postagens no blog
- Comentários do usuário
- Cartões de produtos
- Artigos de jornal

``` html
<article>
    <h3>Artigo 1</h3>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure quas earum quae libero nisi ad ipsam fugit.
    </p>
</article>
<article>
    <h3>Artigo 2</h3>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure quas earum quae libero nisi ad ipsam fugit.
    </p>
</article>
```

----

### Elemento `<header>`

Representa um contêiner para conteúdo introdutório ou um conjunto de links de navegação.

> **Nota:** Podemos ter vários elementos `<header>` em um documento HTML, só que não podemos colocar um elemento `<header>` dentro dos elementos `<footer>`, `<address>`ou outro elemento `<header>`.

``` html
<article>
    <header>
        <h1>Cabeçalho para um artigo</h1>
        <p>Podemos usar o elemento header para definir cabeçalhos</p>
    </header>
</article>
```

---

### Elemento `<footer>`

Define um rodapé para um documento ou seção.

Podemos ter vários elementos `<footer>` no nosso documento.

``` html
<footer>
  <p>Autor: Marx dos Santos</p>
  <p><a href="mailto:marx.devweb@gmail.com">marx.devweb@gmail.com</a></p>
</footer>
```

----

### Elemento `<nav>`

Define um conjunto de links de navegação.

> Nem todos os links de um documento deve estar dentro do elemento `<nav>`, este elemento destina-se apenas ao menu principal de links.

``` html
<nav>
  <a href="#">HTML</a> |
  <a href="#">CSS</a> |
  <a href="#">JavaScript</a> |
  <a href="#">jQuery</a>
</nav>
```

---

### Elemento `<aside>`

Define algum conteúdo além do conteúdo em que é colocado (como uma barra lateral).

###### exemplo:

``` html
<p>Minha família e eu visitamos o centro do Epcot neste verão. O tempo estava bom e o Epcot foi incrível! Eu tive um ótimo verão junto com minha família!
</p>
<aside>
    <h4>Epcot Center</h4>
    <p>O Epcot é um parque temático no Walt Disney World Resort com atrações emocionantes, pavilhões internacionais, fogos de artifício premiados e eventos especiais sazonais.
    </p>
</aside>
```

---

### Elementos `<figure>` e `<figcaption>`

A tag `<figure>` especifica conteúdo independente, como ilustrações, diagramas, fotos, listagens de código etc. Enquanto a tag `<figcaption>` define uma legenda para o elemento `<figure>`.

###### exemplo: 

``` html
<figure>
  <img src="pic_trulli.jpg" alt="Trulli">
  <figcaption>Fig1. - Trulli, Puglia, Italy.</figcaption>
</figure>
```

<figure>  <img src="pic_trulli.jpg" alt="Trulli">  <figcaption>Fig1. - Trulli, Puglia, Italy.</figcaption></figure>

---

> **PRÓXIMA AULA:** [Guia de estilo](../2.16-guia-de-estilo)

***


> **FONTE DO CONTEÚDO**:
>
> - [W3Schools - Elementos Semânticos](https://www.w3schools.com/html/html5_semantic_elements.asp)

