import { useEffect, useState } from "react";
import { useRecipe } from "../../context/Context";
// import { Modal_ShowRecipe } from './Modal_ShowRecipe';

function ListRecipe() {
    const [newValueTitle, setNewValueTitle]=useState("")
    // mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
    const { recipe, getRecipe, loading, updateRecipe, deleteRecipe } = useRecipe();
    
    useEffect( () => {
        getRecipe();
    }, []);
    // mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
    return (
        <div className="container">
        <div className="card">
            <div className="azt33 card-header">
                <span className="azt34 lg-fs fw-bold" id="ph">
                {loading
                    ?   "Loading"
                    :   recipe.length === 0
                    ?   "No se encontraron recetas"
                    :   'Listado de Recetas'}
                </span>
            </div>

            <div className="card-body">

                <table id="table" className="table table-hover table-sm sm-fs">
                    <thead id="table_head" className="table-light">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Título</th>
                        <th scope="col">Subtítulo</th>
                        <th scope="col" className="azt">Ranking</th>
                        <th scope="col" className="text-center">Acción</th>
                    </tr>
                    </thead>

                    <tbody id="table_body" className="table-group-divider">
                        {
                        recipe.map((recipe,index) =>{ 
                            return (
                                <tr key={recipe.id}>
                                    <td>{index+1}</td>
                                    <td>{recipe.title}</td>
                                    <td>{recipe.subtitle}</td>
                                    <td className="azt">{recipe.ranking}</td>
                                    <td className="text-center">
                                            {/*   SHOW MODAL   SHOW MODAL   SHOW MODAL   SHOW MODAL   SHOW MODAL   SHOW MODAL   SHOW MODAL   SHOW MODAL*/}
                                        <button 
                                            className="btn btn-outline-primary border-0 btn-sm"
                                            data-bs-toggle="modal" 
                                            data-bs-target="#showModal"
                                            // onClick={() => Modal_ShowRecipe(recipe, recipe.id)}
                                        >
                                            <i className="bi bi-eye"></i>
                                        </button>
                                        <div className="modal fade" id="showModal" tabIndex="-1" aria-labelledby="showModalLabel" aria-hidden="true">
                                                <div className="modal-dialog">
                                                    <div className="card">
                                                        <img src={recipe.imgUrl} loading="lazy" style={{objectFit: "cover"}}/>
                                                        <div className="card-header">
                                                            <div className="d-flex justify-content-between align-items-baseline">
                                                                <ul className="list-group list-group-flush mt-1">
                                                                    <li className="list-group-item bg-light lg-fs border-0 py-0 ps-0">{recipe.title}</li>
                                                                    <li className="list-group-item bg-light md-fs border-0 py-0 ps-0">{recipe.subtitle}</li>
                                                                </ul>
                                                                <ul className="list-group list-group-flush text-end mt-1">
                                                                    <li className="list-group-item bg-light md-fs border-0 py-0 ps-0">
                                                                        {recipe.folder} <span className="ms-2 text-success"><i className="bi bi-circle-fill"></i></span>
                                                                    </li>
                                                                    <li className="list-group-item bg-light md-fs border-0 py-0 ps-0">
                                                                        <span className="text-warning">{recipe.ranking}</span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>

                                                        <div className="card-body bg-light sm-fs">

                                                            <div className="text-center text-secondary mt-2"><strong><u>Tener en cuenta</u></strong></div>

                                                            <div className="d-flex justify-content-between">
                                                                <ul className="list-group list-group-flush mt-0" style={{ width: "10rem"}}>
                                                                    <li className="bg-light list-group-item">Rinde: {recipe.portions}</li>
                                                                    <li className="bg-light list-group-item">Preparación: {recipe.preparation}</li>
                                                                    <li className="bg-light border-bottom list-group-item">Ingredientes: {recipe.ingredients_Qty}</li>          
                                                                </ul>
                                                                <ul className="list-group list-group-flush mt-0" style={{ width: "10rem"}}>
                                                                    <li className="bg-light list-group-item">Costo: {recipe.cost}</li>
                                                                    <li className="bg-light list-group-item">Cocción: {recipe.cooking}</li>
                                                                    <li className="bg-light border-bottom list-group-item">En freezer: {recipe.freezer}</li>          
                                                                </ul>
                                                            </div>

                                                            <div className="text-start text-secondary md-fs mt-2"><strong><u>Materiales</u></strong></div>
                                                            <div className="text-start mt-1">{recipe.materials}</div>

                                                            <div className="text-start text-secondary md-fs mt-2"><strong><u>{recipe.title_1}</u></strong></div>
                                                            <div className="text-start mt-1"><strong>Ingredientes:</strong> {recipe.ingredients_1}</div>
                                                            <div className="text-start mt-2"><strong>Preparación:</strong> {recipe.recipe_1}</div>

                                                            <div className="text-start text-secondary md-fs mt-2"><strong><u>{recipe.title_2}</u></strong></div>
                                                            <div className="text-start mt-1"><strong>Ingredientes:</strong> {recipe.ingredients_2}</div>
                                                            <div className="text-start mt-2"><strong>Preparación:</strong> {recipe.recipe_2}</div>
                                                            
                                                            <div className="text-start text-secondary md-fs mt-2"><strong><u>{recipe.title_3}</u></strong></div>
                                                            <div className="text-start mt-0"><strong>Ingredientes:</strong> {recipe.ingredients_3}</div>
                                                            <div className="text-start mt-2"><strong>Preparación:</strong> {recipe.recipe_3}</div>

                                                        </div>

                                                        <div className="card-footer text-end">
                                                            <button type="button" className="btn btn-secondary btn-sm sm-fs" data-bs-dismiss="modal">Cerrar</button>
                                                        </div>
                                                    </div>
                                                </div>
                                        </div>
                                            {/*   EDIT MODAL   EDIT MODAL   EDIT MODAL   EDIT MODAL   EDIT MODAL   EDIT MODAL   EDIT MODAL*/}
                                        <button
                                            className="btn btn-outline-success border-0 btn-sm mx-1"
                                            data-bs-target="#updateModal"
                                            data-bs-toggle="modal"
                                        >
                                            <i className="bi bi-pencil"></i>
                                        </button>
                                        <div className="modal fade" id="updateModal" tabIndex="-1" aria-labelledby="updateModalLabel" aria-hidden="true">
                                                <div className="modal-dialog">
                                                    <div className="modal-content">
                                                            <img src={recipe.imgUrl} loading="lazy" style={{objectFit: "cover"}}/>
                                                            <div className="modal-header bg-light d-flex justify-content-between">
                                                                    <ul className="list-group list-group-flush mt-1">
                                                                        <li className="list-group-item bg-light lg-fs border-0 py-0 ps-0">                                                                                                                                                         
                                                                                <button 
                                                                                    className="btn btn-outline-primary border-0 btn-sm sm-fs ms-1"
                                                                                    data-bs-target="#updateModal_1"
                                                                                    data-bs-toggle="modal"
                                                                                    data-bs-dismiss="modal"
                                                                                    >
                                                                                    <i className="bi bi-pencil"></i>
                                                                                </button>
                                                                                {recipe.title}
                                                                        </li>
                                                                        <li className="list-group-item bg-light md-fs border-0 py-0 ps-0">{recipe.subtitle}</li>
                                                                    </ul>
                                                                    <ul className="list-group list-group-flush text-end mt-1">
                                                                        <li className="list-group-item bg-light md-fs border-0 py-0 ps-0">
                                                                            {recipe.folder} <span className="ms-2 text-success"><i className="bi bi-circle-fill"></i></span>
                                                                        </li>
                                                                        <li className="list-group-item bg-light md-fs border-0 py-0 ps-0">
                                                                            <span className="text-warning">{recipe.ranking}</span>
                                                                        </li>
                                                                    </ul>
                                                            </div>

                                                            <div className="modal-body bg-light sm-fs">

                                                                <div className="text-center text-secondary my-2"><strong><u>Tener en cuenta</u></strong></div>

                                                                <div className="d-flex justify-content-between">
                                                                    <ul className="list-group list-group-flush mt-0" style={{ width: "10rem"}}>
                                                                        <li className="bg-light list-group-item">Rinde: {recipe.portions}</li>
                                                                        <li className="bg-light list-group-item">Preparación: {recipe.preparation}</li>
                                                                        <li className="bg-light border-bottom list-group-item">Ingredientes: {recipe.ingredients_Qty}</li>          
                                                                    </ul>
                                                                    <ul className="list-group list-group-flush mt-0" style={{ width: "10rem"}}>
                                                                        <li className="bg-light list-group-item">Costo: {recipe.cost}</li>
                                                                        <li className="bg-light list-group-item">Cocción: {recipe.cooking}</li>
                                                                        <li className="bg-light border-bottom list-group-item">En freezer: {recipe.freezer}</li>          
                                                                    </ul>
                                                                </div>

                                                                <div className="text-start text-secondary md-fs mt-4"><strong><u>Materiales</u></strong></div>
                                                                <div className="text-start mt-2">{recipe.materials}</div>

                                                                <div className="text-start text-secondary md-fs mt-4"><strong><u>{recipe.title_1}</u></strong></div>
                                                                <div className="text-start mt-2"><strong>Ingredientes:</strong> {recipe.ingredients_1}</div>
                                                                <div className="text-start mt-2"><strong>Preparación:</strong> {recipe.recipe_1}</div>

                                                                <div className="text-start text-secondary md-fs mt-4"><strong><u>{recipe.title_2}</u></strong></div>
                                                                <div className="text-start mt-2"><strong>Ingredientes:</strong> {recipe.ingredients_2}</div>
                                                                <div className="text-start mt-2"><strong>Preparación:</strong> {recipe.recipe_2}</div>
                                                                
                                                                <div className="text-start text-secondary md-fs mt-4"><strong><u>{recipe.title_3}</u></strong></div>
                                                                <div className="text-start mt-2"><strong>Ingredientes:</strong> {recipe.ingredients_3}</div>
                                                                <div className="text-start mt-2"><strong>Preparación:</strong> {recipe.recipe_3}</div>

                                                            </div>

                                                            <div className="modal-footer text-end">
                                                                <button 
                                                                    type="button" 
                                                                    className="btn btn-secondary btn-sm sm-fs" 
                                                                    data-bs-dismiss="modal"
                                                                >
                                                                    Cerrar
                                                                </button>
                                                            </div>
                                                    </div>
                                                </div>
                                        </div>
                                        <div className="modal modal-sm fade" id="updateModal_1" tabIndex="-1" aria-labelledby="updateModal_1Label" aria-hidden="true">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-body">
                                                        <div className="d-flex flex-column justify-content-center my-auto">
                                                            {/* <div className="form-floating mb-1"> */}
                                                                <input
                                                                    type="text"
                                                                    id="floatingInput"
                                                                    autoComplete="off"
                                                                    className="form-control md-fs"
                                                                    name="new_value"
                                                                    value={newValueTitle}
                                                                    placeholder="ingrese nuevo valor"
                                                                    onChange={(e) =>
                                                                        setNewValueTitle(e.target.value)
                                                                    }
                                                                />
                                                                {/* <label htmlFor="floatingInput" className="md-fs"> */}
                                                                    {/* {recipe.title} */}
                                                                {/* </label> */}
                                                            {/* </div> */}
                                                        </div>
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button 
                                                            className="btn btn-secondary btn-sm sm-fs" 
                                                            data-bs-target="#updateModal" 
                                                            data-bs-toggle="modal" 
                                                            data-bs-dismiss="modal"
                                                        >
                                                            Cerrar
                                                        </button>
                                                        <button 
                                                            className="btn btn-primary btn-sm sm-fs"
                                                            data-bs-dismiss="modal"
                                                            onClick={() => updateRecipe(recipe.id, {title: newValueTitle})}
                                                        >
                                                            Modificar
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                            {/*   DELETE MODAL   DELETE MODAL   DELETE MODAL   DELETE MODAL   DELETE MODAL   DELETE MODAL   DELETE MODAL*/}
                                        <button 
                                            type="button" 
                                            className="btn btn-outline-danger border-0 btn-sm" 
                                            data-bs-toggle="modal" 
                                            data-bs-target="#deleteModal"
                                        >
                                            <i className="bi bi-trash"></i>
                                        </button>
                                        <div className="modal modal-sm fade" id="deleteModal" tabIndex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h1 className="modal-title md-fs" id="exampleModalLabel">Esta seguro de eliminar?</h1>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <div className="d-flex flex-row justify-content-between my-auto">
                                                            <img className="me-3" src={recipe.imgUrl} alt={recipe.title} width="40%" height="auto" loading="lazy"/>
                                                            <div className="d-flex flex-column text-center align-items-center py-auto">
                                                                <span className="mb-2 fw-semibold">{recipe.title}</span>
                                                                <span className="mb-2">{recipe.subtitle}</span>
                                                                <span className="">{recipe.ranking}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button 
                                                            type="button" 
                                                            className="btn btn-secondary btn-sm sm-fs" 
                                                            data-bs-dismiss="modal"
                                                        >
                                                            Cerrar
                                                        </button>
                                                        <button 
                                                            type="button" 
                                                            className="btn btn-danger btn-sm sm-fs"
                                                            data-bs-dismiss="modal"
                                                            onClick={() => deleteRecipe(recipe.id)}
                                                        >
                                                            Eliminar
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            );})}
                    </tbody>
                </table>                
            </div>
        </div>
  </div>  
);
}
export default ListRecipe;