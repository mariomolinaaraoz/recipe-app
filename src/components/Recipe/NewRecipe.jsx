import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRecipe } from "../../context/Context";

const recipe = {
  folder: "Escuela", // type: text
  title: "", // type: text
  subtitle: "", // type: text, allow Nullable
  state: true, // type: bool, default Value: true
  ranking: 0, // type: numeric, allow Nullable
  category_1: "", // type: text, allow Nullable
  category_2: "", // type: text,
  category_3: "", // type: text,

  portions: 0, // type: numeric, allow Nullable
  preparation: 0, // type: numeric, allow Nullable
  ingredients_Qty: 0, // type: numeric, allow Nullable
  cooking: 0, // type: numeric, allow Nullable
  freezer: 0, // type: numeric, allow Nullable
  cost: "", // type: text, allow Nullable

  materials: "", // type: text, allow Nullable

  title_1: "", // type: text, allow Nullable
  ingredients_1: "", // type: text, allow Null
  recipe_1: "", // type: text, allow Nullable
  title_2: "", // type: text, allow Nullable
  ingredients_2: "", // type: text, allow Nullable
  recipe_2: "", // type: text, allow Nullable
  title_3: "", // type: text, allow Nullable
  ingredients_3: "", // type: text, allow Nullable
  recipe_3: "", // type: text, allow Nullable
  imgUrl: "", // type: varchar, allow Nullable
};

function NewRecipe() {
  const navigate = useNavigate();
  const [newRecipe, setNewRecipe] = useState(recipe);

  // CONTEXT
  const { createRecipe, adding } = useRecipe();

  // FORM SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();
    createRecipe(newRecipe);   
    navigate("/dashboard/list_recipe");
    // window.location.href = "/dashboard/list_recipe";
  };

  const stateChange = (e) => {
    var color_select =
      e == "true" ? "SeaGreen" : e == "false" ? "Red" : "black";

    (document.getElementById("state").style.color = color_select),
      color_select != "black"
        ? (document.getElementById("state").style.fontWeight = "Bold")
        : (document.getElementById("state").style.fontWeight = "Normal");
  };

  const costChange = (e) => {
    var color_select =
      e == "Bajo"
        ? "SeaGreen"
        : e == "Medio"
        ? "Orange"
        : e == "Alto"
        ? "Red"
        : "black";

    (document.getElementById("cost").style.color = color_select),
      color_select != "black"
        ? (document.getElementById("cost").style.fontWeight = "Bold")
        : (document.getElementById("cost").style.fontWeight = "Normal");
  };

  const rankingChange = (e) => {
    var color_select =
      e == "★"
        ? "SaddleBrown"
        : e == "★ ★"
        ? "SandyBrown"
        : e == "★ ★ ★"
        ? "DarkGoldenRod"
        : e == "★ ★ ★ ★"
        ? "GoldenRod"
        : e == "★ ★ ★ ★ ★"
        ? "Gold"
        : "black";

    (document.getElementById("ranking").style.color = color_select),
      color_select != "black"
        ? (document.getElementById("ranking").style.fontWeight = "Bold")
        : (document.getElementById("ranking").style.fontWeight = "Normal");
  };

  return (
    <div className="container">
      <div className="card">
        <div className="azt33 card-header">
          <span className="azt34 lg-fs fw-bold">Agregar Receta</span>
        </div>

        <form onSubmit={handleSubmit} id="formNewRecipe">
          <div name="title" className="my-2 px-3 pt-2">
            <div className="row">
              <div className="title col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8 mx-auto">
                
              </div>

                <div className="folder d-none d-md-block col-sm-6 col-md-6 col-lg-2 col-xl-2 col-xxl-2 mx-auto">
                  <div className="form-floating mb-1">
                    <select
                      id="folder"
                      className="form-control sm-fs text-center"
                      name="folder"
                      required
                      onChange={(e) =>
                        setNewRecipe({ ...newRecipe, folder: e.target.value })
                      }
                    >
                      <option value="Escuela">Escuela</option>
                      <option value="Propias">Propias</option>
                      <option value="Tradicionales">Tradicionales</option>
                    </select>
                    
                    <label htmlFor="floatingInput" className="md-fs">
                      Guardar en:
                    </label>
                  </div>
                </div>
                <div className="state d-none d-md-block col-sm-6 col-md-6 col-lg-2 col-xl-2 col-xxl-2 mx-auto">
                  <div className="form-floating mb-1">
                    <select
                      id="state"
                      className="form-control sm-fs text-center"
                      name="state"
                      required
                      disabled
                      onChange={(e) =>
                        setNewRecipe(
                          { ...newRecipe, state: e.target.value },
                          stateChange(e.target.value)
                        )
                      }
                    >
                      <option value="true">Activa</option>
                      <option value="false">Inactiva</option>
                    </select>
                    <label htmlFor="floatingInput" className="md-fs">
                      Estado:
                    </label>
                  </div>
                </div>

              <div className="d-md-none d-inline-flex m-0 p-0 mx-auto">
                <div className="folder col-5 mx-auto">
                  <div className="form-floating mb-1">
                    <select
                      id="folder"
                      className="form-control sm-fs text-center"
                      name="folder"
                      required
                      disabled
                      onChange={(e) =>
                        setNewRecipe(
                          { ...newRecipe, folder: e.target.value },
                          stateChange(e.target.value)
                        )
                      }
                    >
                      <option value="Escuela">Escuela</option>
                      <option value="Propias">Propias</option>
                      <option value="Tradicionales">Tradicionales</option>
                    </select>
                    
                    <label htmlFor="floatingInput" className="md-fs">
                      Guardar en:
                    </label>
                  </div>
                </div>
                <div className="state col-5 mx-auto">
                  <div className="form-floating mb-1">
                    <select
                      id="state"
                      className="form-control sm-fs text-center"
                      name="state"
                      required
                      disabled
                      onChange={(e) =>
                        setNewRecipe(
                          { ...newRecipe, state: e.target.value },
                          stateChange(e.target.value)
                        )
                      }
                    >
                      <option value="true">Activa</option>
                      <option value="false">Inactiva</option>
                    </select>
                    <label htmlFor="floatingInput" className="md-fs">
                      Estado:
                    </label>
                  </div>
                </div>
              </div>
              <div className="subtitle col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 mx-auto">
                <div className="form-floating mb-1">
                  <input
                    type="text"
                    id="subtitle"
                    autoComplete="off"
                    className="form-control md-fs"
                    name="subtitle"
                    placeholder="Subtitulo receta"
                    onChange={(e) =>
                      setNewRecipe({ ...newRecipe, subtitle: e.target.value })
                    }
                  />
                  <label htmlFor="floatingInput" className="md-fs">
                    Subtítulo:
                  </label>
                </div>
              </div>
              <div className="ranking col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mx-auto">
                <div className="form-floating mb-1">
                  <select
                    id="ranking"
                    className="form-control sm-fs"
                    name="ranking"
                    onChange={(e) =>
                      setNewRecipe(
                        { ...newRecipe, ranking: e.target.value },
                        rankingChange(e.target.value)
                      )
                    }
                  >
                    <option value="★">★</option>
                    <option value="★ ★">★ ★</option>
                    <option value="★ ★ ★">★ ★ ★</option>
                    <option value="★ ★ ★ ★">★ ★ ★ ★</option>
                    <option value="★ ★ ★ ★ ★">★ ★ ★ ★ ★</option>
                  </select>
                  <label htmlFor="floatingInput" className="md-fs">
                    Ranking:
                  </label>
                </div>
              </div>
              <div className="category_1 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mx-auto">
                <div className="form-floating mb-1">
                  <input
                    type="text"
                    id="category_1"
                    autoComplete="off"
                    className="form-control sm-fs"
                    list="datalistcategory_1"
                    name="category_1"
                    placeholder="dulce"
                    required
                    onChange={(e) =>
                      setNewRecipe({ ...newRecipe, category_1: e.target.value })
                    }
                  />
                  <datalist id="datalistcategory_1">
                    <option value="Dulce" />
                    <option value="Salado" />
                    <option value="Postre" />
                    <option value="Agridulce" />
                    <option value="Snack" />
                  </datalist>
                  <label htmlFor="floatingInput" className="md-fs">
                    Categoria 1:
                  </label>
                </div>
              </div>
              <div className="category_2 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mx-auto">
                <div className="form-floating mb-1">
                  <input
                    type="text"
                    id="category_2"
                    autoComplete="off"
                    className="form-control sm-fs"
                    list="datalistcategory_2"
                    name="category_2"
                    placeholder="plato principal"
                    required
                    onChange={(e) =>
                      setNewRecipe({ ...newRecipe, category_2: e.target.value })
                    }
                  />
                  <datalist id="datalistcategory_2">
                    <option value="Entrada" />
                    <option value="Plato Principal" />
                    <option value="Postre" />
                    <option value="Torta" />
                    <option value="Budín" />
                  </datalist>
                  <label htmlFor="floatingInput" className="md-fs">
                    Categoria 2:
                  </label>
                </div>
              </div>
              <div className="category_3 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mx-auto">
                <div className="form-floating">
                  <input
                    type="text"
                    id="category_3"
                    autoComplete="off"
                    className="form-control sm-fs"
                    list="datalistcategory_3"
                    name="category_3"
                    placeholder="no definido"
                    onChange={(e) =>
                      setNewRecipe({ ...newRecipe, category_3: e.target.value })
                    }
                  />
                  <datalist id="datalistcategory_3">
                    <option value="" />
                  </datalist>
                  <label htmlFor="floatingInput" className="md-fs">
                    Categoria 3:
                  </label>
                </div>
              </div>
            </div>
          </div>

                              <hr className="w-75 my-0 mx-auto border border-secondary border-1 opacity-25" />

          <div name="keep_in_mind" className="my-2 px-3 pt-2">
            <div className="row">
              <div className="portions col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4 mx-auto">
                <div className="form-floating mb-1">
                  <input
                    type="number"
                    id="portions"
                    autoComplete="off"
                    className="form-control md-fs"
                    name="portions"
                    placeholder="8"
                    onChange={(e) =>
                      setNewRecipe({ ...newRecipe, portions: e.target.value })
                    }
                  />
                  <label htmlFor="floatingInput" className="md-fs">
                    Porciones (Cant.):
                  </label>
                </div>
              </div>
              <div className="preparation col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4 mx-auto">
                <div className="form-floating mb-1">
                  <input
                    type="number"
                    id="preparation"
                    autoComplete="off"
                    className="form-control md-fs"
                    list="datalistpreparation"
                    name="preparation"
                    placeholder="20min."
                    onChange={(e) =>
                      setNewRecipe({
                        ...newRecipe,
                        preparation: e.target.value,
                      })
                    }
                  />
                  <datalist id="datalistpreparation">
                    <option value="10" />
                    <option value="20" />
                    <option value="30" />
                    <option value="40" />
                    <option value="50" />
                    <option value="60" />
                  </datalist>
                  <label htmlFor="floatingInput" className="md-fs">
                    Preparación (min.):
                  </label>
                </div>
              </div>
              <div className="ingredients_qty col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4 mx-auto">
                <div className="form-floating mb-1">
                  <input
                    type="number"
                    id="ingredients_qty"
                    autoComplete="off"
                    className="form-control md-fs"
                    name="ingredients_qty"
                    placeholder="10"
                    onChange={(e) =>
                      setNewRecipe({
                        ...newRecipe,
                        ingredients_qty: e.target.value,
                      })
                    }
                  />
                  <label htmlFor="floatingInput" className="md-fs">
                    Ingredientes (Cant.):
                  </label>
                </div>
              </div>
              <div className="cooking col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4 mx-auto">
                <div className="form-floating mb-1">
                  <input
                    type="number"
                    id="cooking"
                    autoComplete="off"
                    className="form-control md-fs"
                    list="datalistcooking"
                    name="cooking"
                    placeholder="10min."
                    onChange={(e) =>
                      setNewRecipe({ ...newRecipe, cooking: e.target.value })
                    }
                  />
                  <datalist id="datalistcooking">
                    <option value="10" />
                    <option value="20" />
                    <option value="30" />
                    <option value="40" />
                    <option value="50" />
                    <option value="60" />
                  </datalist>
                  <label htmlFor="floatingInput" className="md-fs">
                    Cocción (min.):
                  </label>
                </div>
              </div>
              <div className="freezer col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4 mx-auto">
                <div className="form-floating mb-1">
                  <input
                    type="number"
                    id="freezer"
                    autoComplete="off"
                    className="form-control md-fs"
                    list="datalistfreezer"
                    name="freezer"
                    placeholder="3meses."
                    onChange={(e) =>
                      setNewRecipe({ ...newRecipe, freezer: e.target.value })
                    }
                  />
                  <datalist id="datalistfreezer">
                    <option value="1" />
                    <option value="2" />
                    <option value="3" />
                    <option value="4" />
                    <option value="5" />
                    <option value="6" />
                  </datalist>
                  <label htmlFor="floatingInput" className="md-fs">
                    Freezer (meses.):
                  </label>
                </div>
              </div>
              <div className="cost col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4 mx-auto">
                <div className="form-floating">
                  <input
                    type="text"
                    id="cost"
                    autoComplete="off"
                    className="form-control md-fs"
                    list="datalistcost"
                    name="cost"
                    placeholder="Medio"
                    onChange={(e) =>
                      setNewRecipe(
                        { ...newRecipe, cost: e.target.value },
                        costChange(e.target.value)
                      )
                    }
                  />
                  <datalist id="datalistcost">
                    <option value="Bajo" />
                    <option value="Medio" />
                    <option value="Alto" />
                  </datalist>
                  <label htmlFor="floatingInput" className="md-fs">
                    Costo:
                  </label>
                </div>
              </div>
            </div>
          </div>

                              <hr className="w-75 my-0 mx-auto border border-secondary border-1 opacity-25" />

          <div name="materials" className="my-2 px-3 pt-2">
            <div className="row">
              <div className="materials col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 mx-auto">
                <div className="form-floating mb-1">
                  <textarea
                    type="text"
                    id="materials"
                    autoComplete="off"
                    className="form-control md-fs"
                    name="materials"
                    placeholder="batidora, ..."
                    onChange={(e) =>
                      setNewRecipe({
                        ...newRecipe,
                        materials: e.target.value,
                      })
                    }
                  ></textarea>
                  <label htmlFor="floatingInput" className="md-fs">
                    Materiales:
                  </label>
                </div>
              </div>
            </div>            
          </div>

                              <hr className="w-75 my-0 mx-auto border border-secondary border-1 opacity-25" />

          <div name="recipe_1_2_3" className="my-2 px-3 pt-2">
            <div className="row">
              <div className="recipe_1 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 mx-auto">
                <div className="accordion" id="accordion">
                  <div className="One accordion-item">
                    <input
                      type="text"
                      id="title_1"
                      autoComplete="off"
                      defaultValue="Receta #1"
                      className="accordion-button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="false"
                      aria-controls="collapseOne"
                      name="title_1"
                      placeholder="Título parte 1 receta"
                      onChange={(e) =>
                        setNewRecipe({ ...newRecipe, title_1: e.target.value })
                      }
                    />
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordion"
                    >
                      <div className="accordion-body">
                        <div className="ingredients_1 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 mx-auto">
                          <div className="form-floating mb-1">
                            <textarea
                              type="text"
                              id="ingredients_1"
                              autoComplete="off"
                              className="form-control md-fs"
                              name="ingredients_1"
                              placeholder="harina 400gr, ..."
                              onChange={(e) =>
                                setNewRecipe({
                                  ...newRecipe,
                                  ingredients_1: e.target.value,
                                })
                              }
                            ></textarea>
                            <label htmlFor="floatingInput" className="md-fs">
                              Ingredientes:
                            </label>
                          </div>
                        </div>
                        <div className="recipe_1 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 mx-auto">
                          <div className="form-floating">
                            <textarea
                              type="text"
                              id="recipe_1"
                              autoComplete="off"
                              className="form-control md-fs"
                              name="recipe_1"
                              placeholder="Mezclar los ingredientes..."
                              onChange={(e) =>
                                setNewRecipe({
                                  ...newRecipe,
                                  recipe_1: e.target.value,
                                })
                              }
                            ></textarea>
                            <label htmlFor="floatingInput" className="md-fs">
                              Preparación:
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="Two accordion-item">
                    <input
                      type="text"
                      id="title_2"
                      autoComplete="off"
                      defaultValue="Receta #2"
                      className="accordion-button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                      name="title_2"
                      placeholder="Título parte 2 receta"
                      onChange={(e) =>
                        setNewRecipe({ ...newRecipe, title_2: e.target.value })
                      }
                    />
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordion"
                    >
                      <div className="accordion-body">
                        <div className="ingredients_2 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 mx-auto">
                          <div className="form-floating mb-1">
                            <textarea
                              type="text"
                              id="ingredients_2"
                              autoComplete="off"
                              className="form-control md-fs"
                              name="ingredients_2"
                              placeholder="harina 400gr, ..."
                              onChange={(e) =>
                                setNewRecipe({
                                  ...newRecipe,
                                  ingredients_2: e.target.value,
                                })
                              }
                            ></textarea>
                            <label htmlFor="floatingInput" className="md-fs">
                              Ingredientes:
                            </label>
                          </div>
                        </div>
                        <div className="recipe_2 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 mx-auto">
                          <div className="form-floating">
                            <textarea
                              type="text"
                              id="recipe_2"
                              autoComplete="off"
                              className="form-control md-fs"
                              name="recipe_2"
                              placeholder="harina 400gr, ..."
                              onChange={(e) =>
                                setNewRecipe({
                                  ...newRecipe,
                                  recipe_2: e.target.value,
                                })
                              }
                            ></textarea>
                            <label htmlFor="floatingInput" className="md-fs">
                              Preparación:
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="Three accordion-item mb-1">
                    <input
                      type="text"
                      id="title_3"
                      autoComplete="off"
                      defaultValue="Receta #3"
                      className="accordion-button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                      name="title_3"
                      placeholder="Título parte 3 receta"
                      onChange={(e) =>
                        setNewRecipe({ ...newRecipe, title_3: e.target.value })
                      }
                    />
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordion"
                    >
                      <div className="accordion-body">
                        <div className="ingredients_3 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 mx-auto">
                          <div className="form-floating mb-1">
                            <textarea
                              type="text"
                              id="ingredients_3"
                              autoComplete="off"
                              className="form-control md-fs"
                              name="ingredients_3"
                              placeholder="harina 400gr, ..."
                              onChange={(e) =>
                                setNewRecipe({
                                  ...newRecipe,
                                  ingredients_3: e.target.value,
                                })
                              }
                            ></textarea>
                            <label htmlFor="floatingInput" className="md-fs">
                              Ingredientes:
                            </label>
                          </div>
                        </div>
                        <div className="recipe_3 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 mx-auto">
                          <div className="form-floating">
                            <textarea
                              type="text"
                              id="recipe_3"
                              className="form-control md-fs"
                              name="recipe_3"
                              placeholder="harina 400gr, ..."
                              onChange={(e) =>
                                setNewRecipe({
                                  ...newRecipe,
                                  recipe_3: e.target.value,
                                })
                              }
                            ></textarea>
                            <label htmlFor="floatingInput" className="md-fs">
                              Preparación:
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

                              <hr className="w-75 my-0 mx-auto border border-secondary border-1 opacity-25" />

          <div name="imgUrl" className="my-2 px-3 pt-2">
            <div className="imgUrl col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 mx-auto">
              <div className="form-floating mb-2">
                <input
                  type="file"
                  id="imgUrl"
                  autoComplete="off"
                  className="form-control md-fs"
                  name="imgUrl"
                  placeholder="image"
                  onChange={(e) =>
                    setNewRecipe({ ...newRecipe, imgUrl: e.target.value })
                  }
                />
                <label htmlFor="floatingInput" className="md-fs">
                  Nombre archivo imagen:
                </label>
              </div>
            </div>
          </div>

                              <hr className="w-75 my-0 mx-auto border border-secondary border-1 opacity-25" />

          <div name="submit" className="text-center mb-2 px-3 pt-2">
            <Link type="button" className="btn btn-secondary sm-fs me-4" to="/dashboard/list_recipe">
              Cancelar
            </Link>
            <button
              disabled={adding}
              type="submit"
              className="btn btn-primary w-50 sm-fs"
            >
              {adding ? "Guardando..." : "Guardar Receta"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewRecipe;
