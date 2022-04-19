# Elementos de Citação

### `<blockquote>` para citações

O elemento HTML `<blockquote>` define uma seção que é citada de outra fonte.

Os navegadores geralmente recuam elementos `<blockquote>`.

###### exemplo:

````html
<p>Aqui está uma citação do site do WWF:</p>
<blockquote cite="http://www.worldwildlife.org/who/index.html">
Há 50 anos, o WWF protege o futuro da natureza. A principal organização de conservação do mundo, O WWF funciona em 100 países e é apoiado por 1,2 milhão de membros nos Estados Unidos e perto de 5 milhões em todo o mundo.
</blockquote>
````

###### resultado:

<blockquote cite="http://www.worldwildlife.org/who/index.html">
Há 50 anos, o WWF protege o futuro da natureza. A principal organização de conservação do mundo, O WWF funciona em 100 países e é apoiado por 1,2 milhão de membros nos Estados Unidos e perto de 5 milhões em todo o mundo.
</blockquote>

---

### Tag `<q>` 

Esta tag define uma citação curta.

Os navegadores normalmente inserem aspas ao redor da cotação.

###### exemplo:

````html
<p>O objetivo do WWF é: <q>Construir um futuro onde as pessoas vivam em harmonia com a natureza.</q></p>
````

###### resultado:

<p>O objetivo do WWF é: <q>Construir um futuro onde as pessoas vivam em harmonia com a natureza.</q></p>

---

### Tag `<abbr>` 

Esta tag define uma abreviação ou um acrônimo, como "HTML", "CSS", "Mr.", "Dr.", "ASAP", "ATM".

###### exemplo:

````html
<p>A <abbr title="Organização Mundial da Saúde">OMS</abbr> foi fundada em 1948.</p>
````

###### resultado:

<p>A <abbr title="Organização Mundial da Saúde">OMS</abbr> foi fundada em 1948.</p>

---

### Tag `<address>` 

Esta tag define as informações de contato do autor/proprietário de um documento ou artigo.

###### exemplo:

````html
<address>
Escrito por John Doe.<br>
Visite-nos em:<br>
Exemplo.com<br>
Caixa 564, Disneylândia<br>
EUA
</address>
````

###### resultado:

<address>
Escrito por John Doe.<br>
Visite-nos em:<br>
Exemplo.com<br>
Caixa 564, Disneylândia<br>
EUA
</address>

---

### Tag `<cite>` 

Esta tag define o título de um trabalho criativo (por exemplo, um livro, um poema, uma música, um filme, uma pintura, uma escultura etc.).

###### exemplo:

````html
<p><cite>O Grito</cite> de Edvard Munch. Pintado em 1893.</p>
````

###### resultado:

<p><cite>O Grito</cite> de Edvard Munch. Pintado em 1893.</p>

---

#### Tag `<bdo>` 

Esta tag é usada para substituir a direção do texto atual:

BDO significa substituição bidirecional.

###### exemplo:

````html
<bdo dir="rtl">Este texto será escrito da direita para a esquerda</bdo>
````

----

> **PRÓXIMA AULA:** [CSS](../2.6-css)

***


> **FONTE DO CONTEÚDO**:
>
> - [W3Schools - Elementos de Citações](https://www.w3schools.com/html/html_quotation_elements.asp)