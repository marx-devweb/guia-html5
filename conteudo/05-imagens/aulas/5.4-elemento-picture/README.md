# O elemento HTML `<picture>`

Este elemento permite exibir imagens diferentes para diferentes dispositivos ou tamanhos de tela.

Junto com o elemento `<picture>`, temos um ou mais elementos `<source>`. Este elemento, junto com o atributo `srcset` refere diferentes imagens. 

Desta forma, o navegador pode escolher a imagem que melhor se adapta à visualização e/ou dispositivo através do atributo `media`.

``` html
<picture>
    <source media="(min-width: 650px)" srcset="imagens/img_food.jpg">
    <source media="(min-width: 465px)" srcset="imagens/img_car.jpg">
    <img src="imagens/img_girl.jpg" style="width:auto;">
</picture>
```

***

> **PRÓXIMO CONTEÚDO:** [Tabelas](/conteudo/06-tabelas)

***


> **FONTE DO CONTEÚDO**:
>
> - [W3Schools - O elemento HTML `<picture>`](https://www.w3schools.com/html/html_images_picture.asp)