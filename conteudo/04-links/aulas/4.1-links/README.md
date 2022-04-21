# Links HTML

Os links são encontrados em quase todas as páginas da web. Os links permitem pular para outro documento.

A tag `<a>` define um hiperlink e tem a seguinte sintaxe:

``` html
<a href="url">Esse é um link</a>
```

O atributo `href` indica o destino do link.

o texto '"Esse é um link", é a parte que ficará visível para o leitor.

Por padrão, os links aparecem da seguinte forma em todos os navegadores:

- Um link não visitado está sublinhado e azul
- Um link visitado é sublinhado e roxo
- Um link ativo está sublinhado e vermelho

---

### O atributo de destino

O atributo `target` especifica onde abrir o documento vinculado. Ele pode ter um dos seguintes valores:

- `_self` - abre o documento na mesma janela/guia em que foi clicado;
- `_blank` - abre o documento em uma nova janela ou guia;
- `_parent` - abre o documento no quadro pai;
- `_top` - abre o documento em todo o corpo da janela;

###### exemplo:

``` html
<a href="https://www.w3schools.com/" target="_blank">Este link irá abrir a  página W3Schools em uma nova janela!</a>
```

---

### URLs absolutos x URLs relativos

As URLs absolutos indicam um endereço da web no atributo `href`:

``` html
<a href="https://www.w3schools.com/">W3Schools</a>
```

<a href="https://www.w3schools.com/" target="_blank">W3Schools</a>

<br>

E as URLs relativos indicam um link para uma página dentro do mesmo site.

``` html
<a href="/conteudo/04-links/aulas/4.2-cores-de-links/index.html">Cores dos Links</a>
```

<a href="/conteudo/04-links/aulas/4.2-cores-de-links" target="_blank">Cores dos Links</a>

---

### Imagem como link

Para usar uma imagem como link, basta colocar a tag `<img>` dentro da tag `<a>`:

``` html
<a href="#">
    <img src="../4.1-links/smiley.gif">
</a>
```

<a href="#" target="_blank">
    <img src="../4.1-links/smiley.gif">
</a>

---

### Link para um endereço de e-mail

Deveremos utilizar o  `mailto:` dentro do atributo `href`:

``` html
<a href="mailto:marx.devweb@gmail.com">Me envie um email</a>
```

<a href="mailto:marx.devweb@gmail.com" target="_blank">Me envie um email</a>

---

### Botão como link

Para usar um botão HTML como um link, você precisa adicionar algum código JavaScript.

JavaScript permite especificar o que acontece em determinados eventos, como o clique de um botão:

```` html
<button onclick="document.location='/conteudo/04-links/aulas/4.2-cores-de-links'">Cores dos Links</button>
````

---

### Títulos de links

O atributo `title` especifica informações extras sobre um elemento.

``` html
<a href="https://www.w3schools.com/html/" title="Go to W3Schools HTML section">Visite a W3Schools</a>
```

***

> **PRÓXIMO AULA:** [Cores de Links](../4.2-cores-de-links)

***


> **FONTE DO CONTEÚDO**:
>
> - [W3Schools - Links](https://www.w3schools.com/html/html_links.asp)