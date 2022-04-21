# Links HTML - Cores Diferentes

Por padrão, aparece assim (em todos os navegadores):

- Um link não visitado está sublinhado e azul
- Um link visitado é sublinhado e roxo
- Um link ativo está sublinhado e vermelho

Pode-mós alterar as cores do estado do link usando CSS:

###### código CSS:

``` css
a:link {
  color: green;
  background-color: transparent;
  text-decoration: none;
}

a:visited {
  color: pink;
  background-color: transparent;
  text-decoration: none;
}

a:hover {
  color: red;
  background-color: transparent;
  text-decoration: underline;
}

a:active {
  color: yellow;
  background-color: transparent;
  text-decoration: underline;
}
```

###### código html:

``` html
<a href="html_images.asp" target="_blank">HTML Images</a> 
```



---

### Botões de link

###### código CSS:

``` css
a:link,
a:visited {
    background-color: #f44336;
    color: white;
    padding: 15px 25px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
}
a:hover,
a:active {
    background-color: red;
}
```

###### código html:

``` html
<a href="https://www.w3schools.com/" target="_blank">Este é um botão personalizado</a>
```



***

> **PRÓXIMO AULA:** [Marcadores de Links](../4.3-marcadores-de-links)

***


> **FONTE DO CONTEÚDO**:
>
> - [W3Schools - Links HTML - Cores Diferentes](https://www.w3schools.com/html/html_links_colors.asp)