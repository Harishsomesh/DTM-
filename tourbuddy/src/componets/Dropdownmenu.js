import { useState } from "react";
import './Dropdownmenu.css';
import { Link } from "react-router-dom";
const Dropdownmenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="Dropdownmenu">
            <button onClick={() => setIsOpen(!isOpen)}>
                Menu
            </button>
            {isOpen && (
                <div className="dropdown">
                    <Link className='menu-buttons-1' to="/Profile"><button>profile</button></Link>
                    <Link className='menu-buttons-1' to="/Help"><button>help</button></Link>
                </div>
            )}
        </div>
    );
};



export default Dropdownmenu;