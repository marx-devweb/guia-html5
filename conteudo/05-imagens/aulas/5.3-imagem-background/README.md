# Imagens de fundo HTML

Quase todos os elementos HTML podem receber uma imagem de fundo.

Para adicionar uma uma imagem de fundo em um elemento HTML, utilizamos o atributo `style` e a propriedade CSS `background-image`:

No exemplo abaixo, definimos uma imagem de fundo no elemento `<p>`

``` html
<p style="background-image: url('imagens/logo.png');">Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industry'sstandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
</p>
```

Também podemos especificar a imagem no elemento `<style>`, na seção `<head>` 

``` html
<style>
p {
  background-image: url('logo.png');
}
</style>
```

---

### Imagem de fundo em uma página

Para definir que uma página inteira tenho uma imagem de fundo:

``` html
<style>
    body {
        background-image: url('imagens/img-05.jpg');
    }
</style>
```

---

### Fundo de repetição

Se a imagem de fundo for menor que o elemento, ela se repetirá, horizontal e verticalmente, até chegar ao final do elemento

Para evitar que a imagem de fundo se repita, deveremos utilizar a propriedade CSS `background-repeat` com o valor `no-repeat`.

```html
<style>
p {
    background-image: url('imagens/logo.png');
    background-repeat: no-repeat;
}
</style>
```

----

### Capa de fundo

Para definir que uma imagem cubra todo o elemento, mantendo suas proporções originais, podemos utilizar a propriedade `background-size` com o valor `cover`.

E para garantir que todo o elemento esteja sempre coberto, podemos utilizar a propriedade `background-attachment` com o valor `fixed`.

``` html
<style>
    body {
        background-image: url('imagens/img-05.jpg');
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;
    }
</style>
```

***

> **PRÓXIMO AULA:** [Elemento `<picture>`](../5.4-elemento-picture)

***


> **FONTE DO CONTEÚDO**:
>
> - [W3Schools - Imagem background ](https://www.w3schools.com/html/html_images_background.asp)