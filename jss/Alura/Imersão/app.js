function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    // Inicializa uma string vazia para armazenar o HTML dos resultados
    let resultados = "";
  
    // Itera sobre cada dado da pesquisa e constrói o HTML
    for (let dado of dados) {
      // Cria um novo elemento div para cada resultado
      resultados += `<div class="item-resultado">
        // Adiciona um título com um link para o dado
        <h2>
          <a href="#" target="_blank">${dado.titulo}</a>
        </h2>
        // Adiciona uma descrição
        <p class="descricao-meta">${dado.descricao}</p>
        // Adiciona um link para mais informações
        <a href="${dado.link}" target="_blank"> Mais informações</a>
      </div>`;
    }
  
    // Atualiza o conteúdo da seção com os resultados gerados
    section.innerHTML = resultados;
  }
