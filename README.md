# React: Local Storage, Eventos e estado global
[Visualizar projeto online](https://dsfilter.vercel.app/)
## Desafio DSFilter
Você deverá criar um projeto ReactJS, usando o Vite, estruturado em componentes. Você deve usar o script abaixo para implementar a base de dados de produtos, 
bem como a função que busca os produtos por preço:

https://gist.github.com/acenelio/fa7d03cb660b35cd9986623f1f07aeb3

![image](https://github.com/Tleofreitas/DSFilter/assets/88738577/33edb708-1d6e-4b80-a1f6-4903a2328ef5)

O corpo da tela deve ser um componente (na imagem abaixo: ListingBody) que possui dois filhos: o card de filtro, e o card de listagem. Você DEVE implementar um
evento para fazer o componente de filtro notificar os parâmetros de filtragem dos produtos:

![image](https://github.com/Tleofreitas/DSFilter/assets/88738577/09e539e1-f605-43c5-a48c-73fa4d4afaa1)

No cabeçalho DEVE aparecer o número de produtos listados. Esse número DEVE observar e reagir às mudanças na listagem. Para isto, mantenha um estado global 
utilizando a Context API.

![image](https://github.com/Tleofreitas/DSFilter/assets/88738577/6874a14f-a638-4e9d-9300-e2817cb1b9d0)

Checklist:
1) O projeto deve conter os componentes principais (pode haver outros conforme você quiser):
- Cabeçalho
- Corpo da tela de listagem
- Card de filtro
- Card de listagem
2) A lista de produtos deve ser passada como Prop para o card de listagem.
3) O card de filtro deve emitir um evento onFilter(min, max). Este evento serve para comunicar os preços mínimo e máximo sempre que o formulário for submetido.
4) Context API utilizada para manter o estado global do número de produtos mostrados na tela. Sempre que for feita uma nova filtragem e o número de produtos
listados mudar, o número deve ser atualizado no cabeçalho.

Criar conforme design Figma abaixo:

[Ver o layout no figma...](https://www.figma.com/file/s21JDtjv3cRyUfetFYAzIJ/DSFilter)

---
## *Dúvidas? Contate-me*
Me envie uma mensagem no [WhatsApp](https://api.whatsapp.com/send?phone=5511951221949)

---
## *Contribuintes* 🔥👊
Este projeto foi desenvolvido durante o curso Formação Desenvolvedor Moderno da escola [DevSuperior](https://devsuperior.com.br), sobe orientação do tutor [Nelio Alves](https://www.linkedin.com/in/nelio-alves/?originalSubdomain=br).
