import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer"; 
import { useParams } from "react-router";

const ViewPage = () =>{
    const Params = useParams();
    const { ProductId } = Params;
    
return (
    <div>
        <Navbar />
            <main>
                <p>View Page</p>
            </main>
        <Footer />
    </div>
)

}

export default ViewPage;