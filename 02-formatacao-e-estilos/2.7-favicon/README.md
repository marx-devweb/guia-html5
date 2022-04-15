# Favicon

> Um favicon é uma pequena imagem exibida ao lado do título da página na guia do navegador.

Para adicionar um favicon no site,  primeiramente deveremos salvar uma imagem favicon no diretório raiz do servidor web ou criar uma pasta no diretório raiz chamada images . Um nome comum para uma imagem favicon é "favicon.ico".

Em seguida, adicionaremos um elemento `<link>` no arquivo "index.html", após o elemento `<title>`, assim: 

`````html
<head>
  <title>Favicon</title>
  <link rel="icon" type="image/x-icon" href="/images/favicon.ico">
</head>
...
`````

---

> **PRÓXIMA AULA:** [Elementos Block e Inline](../2.8-elementos-block-e-inline)

***


> **FONTE DO CONTEÚDO**:
>
> - [W3Schools - Favicon](https://www.w3schools.com/html/html_favicon.asp)

