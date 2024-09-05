import headerAvatar from "../assets/images/avatar.png";
import "./SideBar.css"
function SideBar() {
    return(
        <div className="sidebar">
            <img className="sidebar__avatar" src={headerAvatar} alt="Default"/>
            <p className="sidebar__username">Place holder </p>
        </div>
    );
}

export default SideBar