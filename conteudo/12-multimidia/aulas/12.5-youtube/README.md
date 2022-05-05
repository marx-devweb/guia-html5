# Vídeos do YouTube

A maneira mais fácil de reproduzir vídeos em HTML é usar o YouTube.

---

### Reproduzindo um vídeo do YouTube em HTML

- Enviar o vídeo para o YouTube;
- Anotar o ID do vídeo;
- Definir um elemento `<iframe>` na página da web;
- Deixar o atributo `src` apontar para o URL do vídeo;
- Usar os atributos `width` e `height` para especificar a dimensão do player;
- Adicionar quaisquer outros parâmetros ao URL (veja abaixo):

###### exemplo:

```html
<iframe width="420" height="315" src="https://www.youtube.com/embed/tgbNymZ7vqY"</iframe>
```

---

### Reprodução automática do YouTube + Silenciar

Para iniciar um vídeo do Youtube automaticamente e silenciado, podemos adicionar `autoplay=1` seguido de `mute=1`, conforme exemplo abaixo:

###### exemplo:

```html
<iframe width="420" height="315" src="https://www.youtube.com/embed/tgbNymZ7vqYautoplay=1&mute=1">
</iframe>
```

---

### Loop do YouTube

Para deixar um vídeo com loop, podemos adicionar `loop=1`;

###### exemplo:

```html
<iframe width="420" height="315" src="https://www.youtube.com/embed/tgbNymZ7vqY?playlist=tgbNymZ7vqY&loop=1"></iframe>
```

---

### Controles do YouTube

Para exibir os controles no player do vídeo, utilizamos `controls=1` ;

```html
<iframe width="420" height="315" src="https://www.youtube.com/embed/tgbNymZ7vqY?controls=1"></iframe>
```


***

> **PRÓXIMO CONTEÚDO:** [API](/conteudo/13-api)

***


> **FONTE DO CONTEÚDO**:
>
> - [W3Schools - Vídeos do YouTube](https://www.w3schools.com/html/html_youtube.asp)