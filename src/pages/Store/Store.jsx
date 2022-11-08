import {Cards, Store_Hero} from "../../components/index";
import data from "../../data/data";
import './store.css';

const Home = () => {
    return(
        <div className="container">
            <span className="title__section xxl-fs my-3">Shop page</span>
            <Store_Hero/>
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