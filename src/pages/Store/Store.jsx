import {Cards, Store_Hero} from "../../components/index";
import data from "../../data/data";
import './store.css';

const Home = () => {
    return(
        <section id="store" className="">
            <section id="title__section" className="d-flex flex-column text-center my-2">
                <h1 className="xxl-fs mt-3">Tienda</h1>
                <Store_Hero/>
            </section>
            <section id="products" className="d-flex flex-column py-4">
                <div className="row justify-content-center gap-3">
                    {data.products.map((item,index) => {
                        return(
                            <Cards
                                img={item.img}
                                short_title={item.short_title}
                                title={item.title}
                                price={item.price}
                                desc={item.desc}
                                key={index}
                                item={item}
                            />
                        )
                    })}
                </div>
            </section>
        </section>
    )
}

export default Home