# Elemento head



O elemento `<head>` é um contêiner para metadados que normalmente definem o título do documento, conjunto de caracteres, estilos, scripts e outras informações de meta.  O seguintes elementos são declarados na seção `<head>`: `<title>`, `<style>`, `<meta>`, `<link>`, `<script>` e `<base>`.

---

### O elemento `<title>`

Este elemento define o título do documento e  é obrigatório em todos os documentos.

``` html
...
<head>
  <title>Elemento head</title>
</head>
...
```

---

### O elemento `<style>`

Este elemento é usado para definir informações de estilo para uma única página HTML:

``` html
...
<style>
    body {
        background-color: powderblue;
    }
    h1 {
        color: red;
    }
    p {
        color: blue;
    }
</style>
...
```

---

### O elemento `<link>`

Este elemento define o relacionamento entre o documento atual e um recurso externo. Ele e usado com mais frequência para vincular a folhas de estilo externas:

``` html
<link rel="stylesheet" href="mystyle.css">
```

---

### O elemento `<meta>`

Este elemento normalmente usado para especificar o conjunto de caracteres, descrição da página, palavras-chave, autor do documento e configurações da janela de visualização.

###### exemplos:

**Defina o conjunto de caracteres usado:**

``` HTML
<meta charset="UTF-8">
```

**Defina palavras-chave para motores de busca:**

``` html
<meta name="keywords" content="HTML, CSS, JavaScript">
```

**Defina uma descrição da sua página da web:**

``` html
<meta name="description" content="Free Web tutorials">
```

**Defina o autor de uma página:**

``` html
<meta name="author" content="John Doe">
```

**Atualize o documento a cada 30 segundos:**

``` html
<meta http-equiv="refresh" content="30">
```

**Configurando a janela de visualização para que seu site fique bem em todos os dispositivos:**

``` html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

----

### Configurando a janela de visualização

A janela de visualização é a área visível do usuário de uma página da web. Varia de acordo com o dispositivo - será menor em um telefone celular do que em uma tela de computador.

```` html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
````

`width=device-width` define a largura da página para seguir a largura da tela do dispositivo (que varia de acordo com o dispositivo).

`initial-scale=1.0` define o nível de zoom inicial quando a página é carregada pela primeira vez pelo navegador.

---

### O elemento `<script>`

Este elemento é usado para definir os códigos JavaScript do lado do cliente.

---

### O elemento `<base>`

Este elemento especifica a URL base e/ou destino para todas as URLs relativas em uma página. Ele deve possuir um atributo href ou target presente, ou ambos. 

Só pode haver um único elemento ``<base>` no documento HTML.

---

> **PRÓXIMA AULA:** [Layout](../2.13-layout)

***


> **FONTE DO CONTEÚDO**:
>
> - [W3Schools - Elemento head](https://www.w3schools.com/html/html_head.asp)

