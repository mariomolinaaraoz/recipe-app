import {useCart} from "react-use-cart";

const Cards = (props) => {
    const {addItem} = useCart ();
    return (
        <div className="col-sm-12 col-md-5 col-xl-4 col-xxl-3">
            <div id="card-products" className="card">
                <div className="card-body p-0">
                    <img id="card-products-img"
                        src={props.img}
                        alt={props.title}
                        className=""
                        loading="lazy"
                    />
                    <h1 id="card-products-title" className="fw-semibold">
                        {props.title}
                    </h1>
                    <p id="card-products-description" className="">
                        {props.desc}
                    </p>
                    <div id="card-products-price-ranking" class="d-flex justify-content-between align-items-center p-0 pt-2">
                        <h3 id="price" className="fw-semibold">${props.price}</h3>
                        <h3 id="ranking" className="">⭐⭐⭐⭐⭐ 4.9</h3>
                    </div>
                    <div class="d-flex justify-content-between px-0" style={{marginTop:"16px"}}>
                        <button className="btn btn-light border-dark shadow md-fs" style={{width:"224px",height:"40px"}}>More details</button>
                        <button className="btn btn-dark pt-1 ps-2" style={{width:"40px",height:"40px", fontSize:"20px"}}><i class="bi bi-cart4"></i></button>
                    </div>
                </div>                
            </div>
        </div>
    )
}

export default Cards;  