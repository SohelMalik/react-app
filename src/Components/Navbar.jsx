//1---> 0.2 rem  -->4px
//4---> 1 rem---> 16px

import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { Link} from "react-router-dom";
import { useSearchParams } from "react-router-dom";


const Navbar = () =>{
        const [searchParams, setSearchParams] = useSearchParams();
    const [searchText, setsearchText] = useState(searchParams.get("text")  || "");
      let navigate = useNavigate();

      const handleSearch = () => {
          navigate(`/search?text=${searchText}`);
      }

return (
    <nav className='flex px-6 py-4 justify-between items-center bg-emerald-200'>
        <Link to="/">My App</Link>
        <div>
            <input className="px-2 py-1 border-1 border-amber-800 rounded-lg mr-2"
            value={searchText}
            onChange={(e) => {
                setsearchText(e.target.value);
            }}
            />
            <button 
            onClick={handleSearch}
             className='px-2 py-1 border-1 border-amber-800 rounded-lg bg-amber-700 text-white cursor-pointer'>Search</button>
        </div>
        <div className="h-8 w-8 bg-blue-600 rounded-full">

        </div>
    </nav>
)

}

export default Navbar;