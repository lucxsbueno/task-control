import './App.css';

function App() {
  return (
    <div className="bg-color full-height">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
          <a class="navbar-brand" href="#">Atividades</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">Link</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled">Link disabled</a>
              </li>
            </ul>
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

      <div className="container mt-4">
        <h1 className="fs-3">Controle de atividades</h1>
      </div>

      <div className="container mt-4 border rounded-3 bg-light bg-shadow">
        <div className="row">
          <div className="col-md-4 default-padding">
            <div className="row">
              <h2 className="fs-6">Adicionar uma nova atividade</h2>
            </div>

            <hr className="border" />

            <form>
              <div class="form-group">
                <label for="title">Atividade</label>
                <input type="text" class="form-control" id="title" placeholder="Consertar o teclado mecânico" />
              </div>
              <div class="form-group mt-3">
                <label for="description">Descreva a atividade</label>
                <textarea class="form-control" id="description" rows="3" placeholder="As teclas W e S estão apresentando problemas, quando são clicadas funciona só uma vez."></textarea>
              </div>
              <div class="form-group mt-3">
                <label for="type">Tipo de atividade</label>
                <select multiple class="form-control" id="type">
                  <option>Desenvolvimento</option>
                  <option>Atendimento</option>
                  <option>Manutenção</option>
                  <option>Manutenção urgente</option>
                </select>
              </div>
              <div class="form-group mt-3 d-flex flex-row-reverse flex-end align-items-center">
                <div>
                  <a href="" className="d-inline-block text-success" style={{marginRight: 20}}>Limpar formulário</a>
                  <button type="button" class="btn btn-success">Adicionar</button>
                </div>
              </div>
            </form>
          </div>

          <div className="col-md-8 default-padding">
            <div className="row">
              <div className="col-6">
                <h2 className="fs-6">Todas as atividades</h2>
              </div>

              <div className="col-6 d-flex flex-row justify-content-end">
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                  <label class="form-check-label" for="inlineCheckbox1">Concluídas</label>
                </div>

                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                  <label class="form-check-label" for="inlineCheckbox1">Em aberto</label>
                </div>
              </div>
            </div>

            <hr className="border" />

            <table class="table table-responsive table-striped table-hover">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </div> {/** Atividades */}
        </div> {/** Bloco inteiro */}
      </div> {/** Background branco */}
    </div>
  );
}

export default App;
