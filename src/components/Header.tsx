import { CreditCard, Landmark, LayoutDashboard, Menu } from "lucide-react";

interface HeaderProps {
    activeTab: string
    setSideBarOpen: (sideBarOpen: boolean) => void,
    setActiveTab: (tab: string) => void
}

const menuItems = [
    { id: "Home", label: "Home", icon: LayoutDashboard },
    { id: "About", label: "About", icon: Landmark },
    { id: "Blogs", label: "Blogs", icon: CreditCard },
    { id: "Projects", label: "Projects", icon: CreditCard }
]

export const Header: React.FC<HeaderProps> = ({ activeTab, setSideBarOpen, setActiveTab }) => {
    return (
        <header className="h-20 sticky top-0 z-10 px-7 lg:px-10 flex items-center justify-between bg-slate-50/90 dark:bg-transparent">
            <div className="flex items-center gap-4">
                <button 
                onClick={() => setSideBarOpen(true)}
                className="lg:hidden p-2 hover:bg-slater-100 rounded-lg text-slate-500">
                    <Menu  />
                </button>
            </div>

            <div className={`hidden lg:flex gap-10 items-center px-4 py-3 font-medium group relative overflow-hidden
                `}>
                {menuItems.map((item) => (
                    <button 
                    className={`px-4 text-slate-700 dark:text-slate-300/80 rounded-md ${activeTab === item.id ? "hover:bg-slate-400/10 underline px-2 py-2" : "hover:bg-slate-400/20 px-2 py-2"}`}
                    onClick={() => setActiveTab(item.id)}>
                        {item.label}
                    </button>
                ))}
            </div>
        </header>
    )
}