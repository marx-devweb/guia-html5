# Imagens HTML

A tag `<img>` é usada para incorporar uma imagem em uma página da web. Esta tag não possui fechamento e possui dois atributos obrigatórios:

- `src` - Especifica o caminho para a imagem
- `alt` - Especifica um texto alternativo para a imagem caso por algum motivo o usuário não conseguir visualiza-lá.

###### sintaxe:

``` html
<img src="url" alt="texto alternativo">
```

----

### Tamanho da imagem -  largura e altura

Para definir um tamanho para a imagem, podemos utilizar os atributos `width` e `height`. 

Ambos os atributos `width` e `height` sempre definem a largura e a altura da imagem em pixels.

``` html
<img src="logo.png" alt="Logo Marx" width="400" height="180">
```

<img src="logo.png" alt="Logo Marx" width="400" height="180">

Também podemos utilizar o atributo `style` com as propriedades `width` e `height` que obteremos o mesmo resultado.

``` html
<img src="logo.png" alt="Logo Marx" style="width:400px; height:180px;">
```

<img src="logo.png" alt="Logo Marx" style="width:400px; height:180px;">

Ambas as maneiras são válidas em HTML, mas e remendável sempre utilizar o atributo `style`.

---

###  Imagens de outra pasta

Para adicionar imagens de que esteja em uma subpasta:

``` html
<img src="imagens/logo.png" alt="Logo Marx">
```

<img src="imagens/logo.png" alt="Logo Marx">

---

### Imagens em outro servidor/site

Para apontar para uma imagem em outro servidor, deveremos especificar uma URL absoluta (completa) no atributo `src`:

``` html
<img src="https://www.w3schools.com/images/w3schools_green.jpg" alt="W3Schools.com">
```

<img src="https://www.w3schools.com/images/w3schools_green.jpg" alt="W3Schools.com">

---

### Imagens animadas

Para adicionar uma imagem animada:

``` html
<img src="imagens/programming.gif" alt="Computer Man" style="width:48px;height:48px;">
```

<img src="imagens/programming.gif" alt="Computer Man" style="width:48px;height:48px;">

---

### Imagem como um link

Para usar uma imagem como link:

``` html
<a href="#">
  <img src="imagens/smiley.gif" alt="HTML tutorial" style="width:42px;height:42px;">
</a>
```

<a href="#">  <img src="imagens/smiley.gif" alt="HTML tutorial" style="width:42px;height:42px;"></a>

---

### Imagem flutuante

Para fazer uma imagem flutuar a direita ou a esquerda, podemos utilizar a propriedade CSS `float`:

###### Imagem flutuando a direita:

``` html
<img src="imagens/smiley.gif" alt="Cara sorridente" style="float:right;width:42px;height:42px;">
```

###### <img src="imagens/smiley.gif" alt="Cara sorridente" style="float:right;width:42px;height:42px;">



###### Imagem flutuando a esquerda:

``` html
<img src="imagens/smiley.gif" alt="Cara sorridente" style="float:left;width:42px;height:42px;">
```

<img src="/imagens/smiley.gif" alt="Cara sorridente" style="float:left;width:42px;height:42px;">

***

### Formatos de imagem comuns

Aqui estão os tipos de arquivo de imagem mais comuns, que são suportados em todos os navegadores (Chrome, Edge, Firefox, Safari, Opera):

| Abreviação | Formato de arquivo                    | Extensão de arquivo              |
| ---------- | ------------------------------------- | -------------------------------- |
| APNG       | Animated Portable Network Graphics    | .apng                            |
| GIF        | Graphics Interchange Format           | .gif                             |
| ICO        | Microsoft Icon                        | .ico, .cur                       |
| JPEG       | Joint Photographic Expert Group image | .jpg, .jpeg, .jfif, .pjpeg, .pjp |
| PNG        | Portable Network Graphics             | .png                             |
| SVG        | Scalable Vector Graphics              | .svg                             |

***

> **PRÓXIMO AULA:** [Mapas de imagem](../5.2-mapas-de-imagem)

***


> **FONTE DO CONTEÚDO**:
>
> - [W3Schools - Imagens HTML](https://www.w3schools.com/html/html_images.asp)