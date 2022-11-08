import {Link, Outlet} from 'react-router-dom'

function Dashboard() {

  return (
    <div className="container my-4 rounded bg-light">
      <div className="row">
        <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 my-2 mx-auto">
          <div className="card">
            <div className="azt33 card-header">
              <span className="azt34 lg-fs fw-bold">Recetas</span>
            </div>
          
            <div className="card-body">
              <ul className="list-group">
                <li className="list-group-item d-flex justify-content-between align-items-start">
                  <div className="ms-1 me-auto">
                    <div className="fw-bold md-fs"><Link className="text-muted" to='profile'>Escuela</Link></div>
                      <span className="sm-fs">Content for list item</span>
                    </div>
                    <div className="border-0 badge bg-primary rounded-pill" to='new_recipe'>114</div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                  <div className="ms-1 me-auto">
                    <div className="fw-bold md-fs"><Link className="text-muted" to='profile'>Propias</Link></div>
                    <span className="sm-fs">Content for list item</span>
                  </div>
                  <div className="border-0 badge bg-primary rounded-pill">40</div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                  <div className="ms-1 me-auto">
                    <div className="fw-bold md-fs"><Link className="text-muted" to='profile'>Tradicionales</Link></div>
                    <span className="sm-fs">Content for list item</span>
                  </div>
                  <div className="border-0 badge bg-primary rounded-pill">22</div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                  <div className="ms-1 me-auto">
                    <div className="fw-bold md-fs"><Link className="btn btn-primary btn-sm w-100" to='new_recipe'>Agregar nueva receta</Link></div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8 my-2 mx-auto">
          <Outlet/>
        </div>
      </div>
      <hr/>      
    </div>
  );
}

export default Dashboard; 