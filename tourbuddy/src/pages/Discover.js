import Bottom from "../componets/Bottom";
import list from "./data";
import Cards from "./Cards";

const Discover=(handleClick)=>{
    
        return (
            <div>
                
                <section>{
                    list.map((item)=>(
                        <Cards item={item} key={item.id} handleClick={handleClick}/>
                    ))
                    }
                        
                </section>
                
            <Bottom/>
            </div>
        );
   
}

export default Discover;