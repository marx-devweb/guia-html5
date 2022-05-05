# Vídeo

O elemento HTML `<video>` mostra um vídeo em uma página da web.

###### exemplo:

```html
<video width="320" height="240" controls>
    <source src="movie.mp4" type="video/mp4">
    <source src="movie.ogg" type="video/ogg">
    Seu navegador não suporta a tag de vídeo.
</video>
```

---

### Como funciona

O atributo`controls` adiciona controles de vídeo, como reproduzir, pausar e volume.

O elemento `<source>` permite especificar arquivos de vídeo alternativos que o navegador pode escolher. O navegador usará o primeiro formato reconhecido.

O texto entre as tags `<video>` e `</video>` só será exibido em navegadores que não suportam o elemento `<video>`.

---

### Reprodução automática

O atributo `autoplay` faz um vídeo reproduzir automaticamente.

###### exemplo:

```html
<video width="320" height="240" autoplay>
    ...
```

Podemos utilizar o atributo `muted` para os vídeos com reprodução automática iniciarem mudo.

###### exemplo:

```html
<video width="320" height="240" autoplay muted>
    ...
```

***

> **PRÓXIMA AULA:** [Áudio](../12.3-audio)

***


> **FONTE DO CONTEÚDO**:
>
> - [W3Schools - Vídeo](https://www.w3schools.com/html/html5_video.asp)