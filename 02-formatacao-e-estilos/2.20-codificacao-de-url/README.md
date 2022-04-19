# URL - Uniform Resource Locators

Um Uniform Resource Locator (URL) é usado para endereçar um documento (ou outros dados) na web.

Um endereço da web como `https://www.w3schools.com/html/default.asp` segue estas regras de sintaxe:

``` 
scheme://prefix.domain:port/path/filename
```

###### Explicação:

- **scheme**: define o **tipo** de serviço de Internet (o mais comum é **http ou https** )
- **prefix**: define um **prefixo** de domínio (o padrão para http é **www** )
- **domain**: define o **nome de domínio** da Internet (como w3schools.com)
- **port**: define o **número da porta** no host (o padrão para http é **80** )
- **path**: define um **caminho** no servidor (se omitido será o diretório raiz do site)
- **filename**: define o nome de um documento ou recurso

---

### Esquemas de URL comuns

A tabela abaixo lista alguns esquemas comuns:

| Esquema | Abreviatura de                                               | Usado para                               |
| ------- | ------------------------------------------------------------ | ---------------------------------------- |
| http    | Hyper Text Transfer Protocol (Protocolo de Transferência de Hipertexto) | Páginas comuns da web. Não criptografado |
| https   | Secure Hyper Text Transfer Protocol (Protocolo de transferência de hipertexto seguro) | Páginas seguras da web. Criptografado    |
| ftp     | File Transfer Protocol (Protocolo de transferência de arquivos) | Download ou upload de arquivos           |
| file    |                                                              | Um arquivo no seu computador             |

---

### Codificação de URL

Os URLs só podem ser enviados pela Internet usando o [conjunto de caracteres ASCII](https://www.w3schools.com/charsets/ref_html_ascii.asp), se a URL estiver fora deste conjunto, deverá ser convertida.

---

> **PRÓXIMA AULA:** [HTML vs XHTML](../2.21-html-vs-xhtml)

***


> **FONTE DO CONTEÚDO**:
>
> - [W3Schools - URL - Uniform Resource Locators](https://www.w3schools.com/html/html_urlencode.asp)

