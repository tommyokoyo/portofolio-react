import { CreditCard, Landmark, LayoutDashboard } from "lucide-react";

const menuItems = [
    { id: "Home", label: "Home", icon: LayoutDashboard },
    { id: "About", label: "About", icon: Landmark },
    { id: "Blogs", label: "Blogs", icon: CreditCard },
    { id: "Projects", label: "Projects", icon: CreditCard }
]

interface SideBarContentProps {
    activeTab: string,
    setActiveTab: (tab: string) => void,
    setSideBarOpen: (sideBarStatus: boolean) => void
}

export const SideBarContent: React.FC<SideBarContentProps> = ({ activeTab, setActiveTab, setSideBarOpen }) => {
    return (
        <div className="flex flex-col bg-slate-700/30 h-full text-gray-500">
            <div className="p-8">
                <div className="font-bold tracking-wider">
                    OKOYO
                </div>
            </div>

            <nav className="border-black flex-1 px-4 space-y-4 overflow-y-auto no-scrollbar pb-4">
                {/* <p className="px-4 text-xs font-semibold uppercase tracking-wider mb-2 mt-2">Menu</p> */}
                {menuItems.map((item) => (
                    <button 
                    className={` border border-slate-700 flex items-center gap-3 w-full px-4 py-3 rounded-xl transition-all duration-200 font-medium text-gray-500 group relative overflow-hidden ${activeTab === item.id ? "bg-slate-200/40 text-gray-900" : "hover:bg-slate-300"}`}
                    onClick={ () => {setActiveTab(item.id); setSideBarOpen(false)}}
                    key={item.id}>
                        {item.label}
                    </button>
                ))}
            </nav>
        </div>
    )
}