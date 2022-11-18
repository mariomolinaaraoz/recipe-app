import {Cards, Store_Hero} from "../../components/index";
import data from "../../data/data";
import './store.css';

const Home = () => {
    return(
        <div className="Store container">

        <div className="title__section d-flex flex-column text-center my-2">
            <span className="xxl-fs mt-3">Tienda</span>
            <Store_Hero/>
        </div>
            <div className="container py-4">
                <div className="row">
                    {data.products.map((item,index) => {
                        return(
                            <Cards 
                                img={item.img}
                                title={item.title}
                                price={item.price}
                                desc={item.desc}
                                key={index}
                                item={item}
                            />
                        )
                    })}                  

                </div>
            </div>
        </div>
    )
}

export default Home