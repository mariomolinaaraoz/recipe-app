import { useEffect } from "react";
import { useRecipe } from "../../context/Context";
import { Modal_ShowRecipe } from './Modal_ShowRecipe';
import { Modal_DeleteRecipe } from './Modal_DeleteRecipe';

function ListRecipe() {
    // mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
    const { recipe, getRecipe, loading, updateRecipe, deleteRecipe } = useRecipe();

    const h=(as) => {
        console.log("Button Clicked: ");
        updateRecipe(as, {state: false});
      }
    
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
                                        <button 
                                            className="btn btn-outline-primary border-0 btn-sm"
                                            onClick={() => Modal_ShowRecipe(recipe, recipe.id)}
                                        >
                                            <i className="bi bi-eye"></i>
                                        </button>
                                        <button 
                                            className="btn btn-outline-success border-0 btn-sm mx-1"
                                            onClick={() => h(recipe.id)}
                                        >
                                            <i className="bi bi-pencil"></i>
                                        </button>
                                        <button 
                                            className="btn btn-outline-danger border-0 btn-sm"
                                            onClick={() => Modal_DeleteRecipe(recipe, recipe.id)}
                                        >
                                            <i className="bi bi-trash"></i>
                                        </button>
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