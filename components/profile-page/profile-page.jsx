import ContentComponent from "./content";
import SidebarComponent from "./sidebar";


export default function ProfilePageComponent() {
    return (
        <>
        <div className="container">
                <div className="sidebar">
                    <SidebarComponent/>
                </div>
                <div className="content">
                    <ContentComponent/>
                </div>
        </div>
        </>
    )
}