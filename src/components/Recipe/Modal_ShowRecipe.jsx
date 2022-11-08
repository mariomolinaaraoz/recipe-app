var modalWrap=null;

export function Modal_ShowRecipe(recipe, id) {
    // Do not create muliple modal boxes
    if (modalWrap!== null){
        modalWrap.remove();
    }
    modalWrap=document.createElement('div');
    modalWrap.innerHTML=`
        <div class="modal fade" tabindex="-1">
            <div class="modal-dialog modal-dialog-scrollable">
                <div class="card">
                    <img src=${recipe.imgUrl} loading="lazy" style={{objectFit: "cover"}}/>
                    <div class="card-header">
                        <div class="d-flex justify-content-between align-items-baseline">
                            <ul class="list-group list-group-flush mt-1">
                                <li class="list-group-item bg-light lg-fs border-0 py-0 ps-0">${recipe.title}</li>
                                <li class="list-group-item bg-light md-fs border-0 py-0 ps-0">${recipe.subtitle}</li>
                            </ul>
                            <ul class="list-group list-group-flush text-end mt-1">
                                <li class="list-group-item bg-light md-fs border-0 py-0 ps-0">
                                    ${recipe.folder} <span class="ms-2 text-success"><i class="bi bi-circle-fill"></i></span>
                                </li>
                                <li class="list-group-item bg-light md-fs border-0 py-0 ps-0">
                                    <span class="text-warning">${recipe.ranking}</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="card-body bg-light sm-fs">

                        <div class="text-center text-secondary mt-2"><strong><u>Tener en cuenta</u></strong></div>

                        <div class="d-flex justify-content-between">
                            <ul class="list-group list-group-flush mt-0" style={{ width: "10rem"}}>
                                <li class="bg-light list-group-item">Rinde: ${recipe.portions}</li>
                                <li class="bg-light list-group-item">Preparación: ${recipe.preparation}</li>
                                <li class="bg-light border-bottom list-group-item">Ingredientes: ${recipe.ingredients_Qty}</li>          
                            </ul>
                            <ul class="list-group list-group-flush mt-0" style={{ width: "10rem"}}>
                                <li class="bg-light list-group-item">Costo: ${recipe.cost}</li>
                                <li class="bg-light list-group-item">Cocción: ${recipe.cooking}</li>
                                <li class="bg-light border-bottom list-group-item">En freezer: ${recipe.freezer}</li>          
                            </ul>
                        </div>

                        <div class="text-center text-secondary mt-2"><strong><u>Materiales</u></strong></div>
                        <div class="mt-2">${recipe.materials}</div>

                        <div class="text-center text-secondary mt-2"><strong><u>${recipe.title_1}</u></strong></div>
                        <div class="mt-2"><strong>Ingredientes:</strong> ${recipe.ingredients_1}</div>
                        <div class="mt-2"><strong>Preparación:</strong> ${recipe.recipe_1}</div>

                        <div class="text-center text-secondary mt-2"><strong><u>${recipe.title_2}</u></strong></div>
                        <div class="mt-2"><strong>Ingredientes:</strong> ${recipe.ingredients_2}</div>
                        <div class="mt-2"><strong>Preparación:</strong> ${recipe.recipe_2}</div>
                        
                        <div class="text-center text-secondary mt-2"><strong><u>${recipe.title_3}</u></strong></div>
                        <div class="mt-2"><strong>Ingredientes:</strong> ${recipe.ingredients_3}</div>
                        <div class="mt-2"><strong>Preparación:</strong> ${recipe.recipe_3}</div>

                    </div>

                    <div class="card-footer text-end">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    </div>
                </div>                  
            </div>
        </div>
    `;
    document.body.append(modalWrap);
    var modal = new bootstrap.Modal(modalWrap.querySelector('.modal')); //Provided by Boostrap 5
    modal.show();
}
