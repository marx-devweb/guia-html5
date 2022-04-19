# Guia de estilo

Um código HTML consistente, limpo e organizado torna mais fácil para outras pessoas lerem e entenderem seu código.

Abaixo algumas práticas para manter um bom código HTML.

----

### Sempre declarar o tipo de documento

O tipo de documento correto:

``` html
<!DOCTYPE html>
```

---

### Usar nomes de elementos em minúsculas

Recomenda-se usar nomes de elementos em letras minúsculas, porque:

- Misturar nomes maiúsculos e minúsculos parece ruim
- Os desenvolvedores normalmente usam nomes em minúsculas
- Minúsculas parecem mais limpas
- Minúsculas são mais fáceis de escrever

---

### Fechar todos os elementos HTML

É sempre importante fechar todos os elementos HTML (por exemplo, o elemento `<p>`).

###### boa prática:

``` html
<section>
  <p>Esse é um parágrafo.</p>
  <p>Esse é outro parágrafo.</p>
</section>
```

###### prática ruim:

``` html
<section>
  <p>Esse é um parágrafo.
  <p>Esse é outro parágrafo.
</section>
```

---

### Usar nomes de atributos em minúsculas

HTML permite misturar letras maiúsculas e minúsculas em nomes de atributos, mas é sempre recomendado usar sempre letras minúsculas. 

---

### Sempre citar valores de atributo

HTML permite valores de atributo sem aspas, mas é recomendado citar valores de atributo com aspas, porque:

- Os desenvolvedores normalmente citam valores de atributos
- Os valores cotados são mais fáceis de ler
- Você DEVE usar aspas se o valor contiver espaços

###### boa prática:

``` html
<table class="striped">
```

----

### Sempre especificar `alt`, `width` e `height` para imagens

É sempre bom especificar o atributo `alt` para as imagens, pois se a imagem não poder ser exibida ele exibirá uma descrição da imagem.

Além disso, sempre devemos definir o `width` e `height` das imagens, pois o navegador pode reservar espaço para a imagem antes de carregar.

###### boa prática:

``` html
<img src="html5.gif" alt="HTML5" style="width:128px; height:128px">
```

---

### Espaços e sinais de igual

HTML permite espaços em torno de sinais de igual. Mas sem espaço é mais fácil de ler e agrupa melhor as entidades.

---

### Evitar longas linhas de código

Ao usar um editor de HTML, NÃO é conveniente rolar para a direita e para a esquerda para ler o código HTML.

Tente evitar linhas de código muito longas.

---

### Evitar linhas em branco e recuo sem motivo

Não adicione linhas em branco, espaços ou recuos sem motivo.

Para facilitar a leitura, adicione linhas em branco para separar blocos de código grandes ou lógicos.

Para facilitar a leitura, adicione dois espaços de recuo. Não use a tecla tab.

---

### Nunca pular o elemento `<title>`

Es elemento e sem necessário em HTML, pois ele contém o titulo de uma página é e muito importante para a otimização de mecanismos de busca (SEO). 

---

### Nunca omitir os elementos `<html>` e `<body>`?

HTML permite que uma pagina seja validada sem esses dois elementos, no entanto sempre devemos declara-lós. A não declaração desses dois elementos pode produzir erros em navegadores mais antigos e também pode travar software DOM e XML.

---

### Nunca omitir o elemento `<head>`?

HTML a omissão desta tag, mas e sempre recomendado o uso dela.

---

### Fechar o elementos HTML vazios

Em HTML, é opcional fechar elementos vazios, mas sé queremos que o software XML/XHTML acesse nossa página, devemos sempre manter a barra de fechamento (/), pois ela é obrigatória em XML e XHTML.

###### boa prática:

``` html
<meta charset="utf-8" />
```

---

### Adicionar o atributo lang

Sempre devemos incluir o atributo `lang` dentro da tag `<html>`, isso ajudar os motores de busca e navegadores.

###### boa prática:

``` html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    ...
```

---

### Metadados

Para garantir a interpretação adequada e a indexação correta do mecanismo de pesquisa, tanto o idioma quanto a codificação de caracteres devem ser definidos o mais cedo possível em um documento HTML:

###### boa prática:

``` html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Page Title</title>
</head>
```

---

### Configuração da janela de visualização

A janela de visualização é a área visível do usuário de uma página da web. Varia de acordo com o dispositivo - será menor em um telefone celular do que em uma tela de computador.

Devemos incluir o elemento abaixo em todas a páginas da web.

``` html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

Isso fornece ao navegador instruções sobre como controlar as dimensões e o dimensionamento da página.

---

### Comentários 

Comentários curtos devem ser escritos em uma linha

Comentários que se estendem por mais de uma linha devem ser escritos assim:

``` html
<!--
  Este é um exemplo de comentário longo. Este é um exemplo de comentário longo.
  Este é um exemplo de comentário longo. Este é um exemplo de comentário longo.
-->
```

---

### Usar nomes de arquivo em minúsculas

Alguns servidores web (Apache, Unix) diferenciam maiúsculas de minúsculas sobre nomes de arquivos: "london.jpg" não pode ser acessado como "London.jpg".

Outros servidores web (Microsoft, IIS) não diferenciam maiúsculas de minúsculas: "london.jpg" pode ser acessado como "London.jpg".

Sendo assim, e recomendado sempre utilizar letras minúsculas para evitar problemas com ao carregar nossas páginas.

---

> **PRÓXIMA AULA:** [Entidades](../2.17-entidades)

***


> **FONTE DO CONTEÚDO**:
>
> - [W3Schools - Guia de estilo](https://www.w3schools.com/html/html5_syntax.asp)

