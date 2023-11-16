import { MdSearch } from "react-icons/md";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";

function Buttons() {
  return (
    <div className="flex items-center justify-center gap-2 text-primary text-2xl">
      <button className="items-center justify-center p-8 rounded-4 bg-tint-1 hidden lg:flex">
       <Link>
        <MdSearch />
       </Link>
      </button>
      <button className="flex items-center justify-center p-8 rounded-4 bg-tint-1">
        <Link to='/cart'>
          <AiOutlineShoppingCart />
        </Link>
      </button>
      <button className="flex items-center justify-center p-8 rounded-4 bg-tint-1">
        <Link>
          <AiOutlineUser />
        </Link>
      </button>
    </div>
  );
}

export default Buttons;
