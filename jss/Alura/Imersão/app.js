function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    let campoPesquisa = document.getElementById("campo-pesquisa").value
  //se campoP estiver vazio
    if (campoPesquisa == ""){
      section.innerHTML = "<p>Resultado não encontrado</p>"
      return;
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
  
    // Itera sobre cada dado da pesquisa e constrói o HTML
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase()

      descricao = dado.descricao.toLowerCase()

      tags = dado.tags.toLowerCase()

      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
        resultados += `<div class="item-resultado">
      <h2>
        <a href="#" target="_blank">${dado.titulo}</a>
      </h2>
     <p class="descricao-meta">${dado.descricao}</p>
      <a href="${dado.link}" target="_blank"> Mais informações</a>
    </div>`;

      }
    }
  
    // Atualiza o conteúdo da seção com os resultados gerados
    section.innerHTML = resultados;
  }
