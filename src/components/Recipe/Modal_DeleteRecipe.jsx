var modalWrap=null;

export function Modal_DeleteRecipe(recipe, id) {
    // Do not create muliple modal boxes
    if (modalWrap!== null){
        modalWrap.remove();
    }
    modalWrap=document.createElement('div');
    modalWrap.innerHTML=`
        <div class="modal fade" tabindex="-1">
            <div class="modal-dialog modal-sm">
                <div class="card">
                    <img src=${recipe.imgUrl} loading="lazy" style={{objectFit: "cover"}}/>
                    <div class="card-header">
                        <div class="d-flex justify-content-between align-items-baseline">
                            <ul class="list-group list-group-flush mt-1">
                                <li class="list-group-item bg-light lg-fs border-0 py-0 ps-0">${recipe.title}</li>
                                <li class="list-group-item bg-light md-fs border-0 py-0 ps-0">${recipe.subtitle}</li>

                                <div class="d-flex justify-content-between">
                                    <ul class="list-group list-group-flush mt-0" style={{ width: "10rem"}}>
                                        <li class="list-group-item bg-light md-fs border-0 py-0 ps-0">
                                            ${recipe.folder} <span class="ms-2 text-success"><i class="bi bi-circle-fill"></i></span>
                                        </li>
                                        <li class="bg-light list-group-item">Rinde: ${recipe.portions}</li>
                                    </ul>
                                    <ul class="list-group list-group-flush mt-0" style={{ width: "10rem"}}>
                                        <li class="list-group-item bg-light md-fs border-0 py-0 ps-0">
                                            <span class="text-warning">${recipe.ranking}</span>
                                        </li>
                                        <li class="bg-light list-group-item">Costo: ${recipe.cost}</li>
                                    </ul>
                                </div>
                            </ul>
                        </div>
                    </div>

                    <div class="card-footer text-end">
                        <span class="text-danger md-fs mt-2">Esta seguro de eliminar esta receta?</span>
                        <div class="d-flex flex-row justify-content-between mt-2">
                            <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="modal">Cerrar</button>
                            <button type="button" class="btn btn-danger btn-sm" onClick="deleteRecipe(recipe.id)" data-bs-dismiss="modal">Eliminar</button>
                        </div>                        
                    </div>
                </div>                  
            </div>
        </div>
    `;
    document.body.append(modalWrap);
    var modal = new bootstrap.Modal(modalWrap.querySelector('.modal')); //Provided by Boostrap 5
    modal.show();
}
