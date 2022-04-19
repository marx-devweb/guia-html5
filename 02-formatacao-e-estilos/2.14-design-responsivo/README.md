# Design Responsivo em HTML

> Web Design Responsivo é usar HTML e CSS para redimensionar, ocultar, reduzir ou ampliar automaticamente um site, para torna-ló bom em todos os dispositivos (computadores, tablets e telefones):

---

### Configurando a janela de visualização

Utilizamos a tag `<meta>` para criar um site responsivo.

```` html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
````

Esta tag definirá a janela de visualização de sua página, que fornecerá ao navegador instruções sobre como controlar as dimensões e o dimensionamento da página.

---

### Imagens responsivas

São imagens que se adaptam bem a qualquer tamanho de navegador.

#### Usando a propriedade largura

A propriedade CSS `width` define a a largura da imagem, se esta propriedade estiver com o valor de 100%

a imagem será responsiva e aumentará e diminuirá a escala.

###### exemplo:

```` html
<img src="imagens/img_girl.jpg" style="width:100%;">
````

<img src="imagens/img_girl.jpg" style="width:100%;">

No exemplo acima, a imagem foi ampliada para ser maior que seu tamanho original. Para ter uma solução melhor, podemos utilizar a propriedade CSS `max-width`.

```` html
<img src="imagens/img_girl.jpg" style="max-width:100%;height:auto;">
````

<img src="imagens/img_girl.jpg" style="max-width:100%; height:auto">

---

### Mostrar imagens diferentes dependendo da largura do navegador

Quando queremos definir imagens diferente de acordo com o tamanho da janela do navegador, utilizamos o elemento `<picture>`.

###### código-fonte:

``` html
<picture>
  <source srcset="imagens/img_smallflower.jpg" media="(max-width: 600px)">
  <source srcset="imagens/img_flowers.jpg" media="(max-width: 1500px)">
  <source srcset="imagens/flowers.jpg">
  <img src="imagens/img_smallflower.jpg" alt="Flowers">
</picture>
```

---

### Tamanho do texto responsivo

Utilizamos a unidade `vw` para definir o tamanho do texto. 

*`vw` significa viewport (janela de exibição).*

Utilizando esta propriedade, o tamanho do texto seguirá o tamanho da janela do navegador.

###### código-fonte: 

``` html
<h1 style="font-size:10vw">Olá mundo!</h1>
```

*Viewport é o tamanho da janela do navegador. 1vw = 1% da largura da janela de visualização. Se a janela de visualização tiver 50 cm de largura, 1vw é 0,5 cm.*

---

### Consultas de mídia

É comum utilizar media queries em páginas web responsivas. Com consultas de mídia, podemos definir estilos completamente diferentes para diferentes tamanhos de navegador.

---

> **PRÓXIMA AULA:** [Semântica](../2.15-semantica)

***


> **FONTE DO CONTEÚDO**:
>
> - [W3Schools - HTML Responsivo](https://www.w3schools.com/html/html_responsive.asp)

