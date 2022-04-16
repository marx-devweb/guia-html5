# Caminhos de arquivos

> Um caminho de arquivo descreve a localização de um arquivo na estrutura de pastas de um site.

---

### Exemplos de caminho de arquivo

| Caminho                           | Descrição                                                    |
| --------------------------------- | ------------------------------------------------------------ |
| `<img src="picture.jpg">`         | O arquivo "picture.jpg" está localizado na mesma pasta da página atual |
| `<img src="images/picture.jpg">`  | O arquivo "picture.jpg" está localizado na pasta de imagens na pasta atual |
| `<img src="/images/picture.jpg">` | O arquivo "picture.jpg" está localizado na pasta de imagens na raiz da web atual |
| `<img src="../picture.jpg">`      | O arquivo "picture.jpg" está localizado na pasta um nível acima da pasta atual |

Os caminhos de arquivo são usados ao vincular a arquivos externos, como:

- Paginas web
- Imagens
- Folhas de estilo
- JavaScript

---

### Caminhos de arquivo absolutos

Um caminho de arquivo absoluto é o URL completo para um arquivo:

```` html
<img src="https://www.w3schools.com/images/picture.jpg" alt="Mountain">
````

---

### Caminhos de arquivo relativos

Um caminho de arquivo relativo aponta para um arquivo relativo à página atual.

```` html
<img src="/images/picture.jpg" alt="Mountain">
````

---

### Melhor prática

É uma prática recomendada usar caminhos de arquivo relativos (se possível).

Ao usar caminhos de arquivo relativos, suas páginas da web não serão vinculadas ao seu URL base atual. Todos os links funcionarão em seu próprio computador (localhost), bem como em seu domínio público atual e em seus futuros domínios públicos.

---

> **PRÓXIMA AULA:** [Elemento head](../2.12-elemento-head)

***


> **FONTE DO CONTEÚDO**:
>
> - [W3Schools - Caminhos de arquivos](https://www.w3schools.com/html/html_filepaths.asp)

