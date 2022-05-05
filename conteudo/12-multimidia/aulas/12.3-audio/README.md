# Áudio

O elemento `<audio>` é usado para reproduzir um arquivo de áudio em uma página da web.

###### exemplo:

```html
<audio controls>
    <source src="horse.ogg" type="audio/ogg">
    <source src="horse.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
</audio>
```

---

### Como funciona

O atributo `controls` adiciona controles de áudio, como reproduzir, pausar e volume.

O elemento `<source>` permite especificar arquivos de áudio alternativos que o navegador pode escolher. O navegador usará o primeiro formato reconhecido.

---

### Reprodução automática

Podemos utilizar o atributo `autoplay` para um áudio iniciar automaticamente.

###### exemplo:

```html
<audio controls autoplay>
    ...
```

Podemos utilizar o atributo `muted` para os áudios com reprodução automática iniciarem mudo.

```html
<audio controls autoplay muted>
    ...
```

***

> **PRÓXIMA AULA:** [Plug-ins](../12.4-plug-ins)

***


> **FONTE DO CONTEÚDO**:
>
> - [W3Schools - Áudio](https://www.w3schools.com/html/html5_audio.asp)