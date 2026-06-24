import { useNavigate, Link } from "react-router-dom" // Perbaikan: Tambahkan Link di sini
import { useState } from "react"
import { BikeIcon, ChevronDownIcon, MapPinIcon, MenuIcon, PackageIcon, SearchIcon, ShoppingCartIcon, UserIcon, XIcon } from "lucide-react"

const Navbar = () => {
    const user: any = { name: "Rangga Prasetya", email: "rangga@gmail.com", isAdmin: true }
    const { cartCount, setIsCartOpen } = {
        cartCount: 5,
        setIsCartOpen: (_data: any) => { }
    }
    const [searchQuery, setSearchQuery] = useState("")
    const [userMenuOpen, setUserMenuOpen] = useState(false) // Perbaikan: Gunakan boolean false (tanpa kutip)
    const navigate = useNavigate()

    return (
        <nav className="bg-white sticky top-0 z-50 border-b border-app-border">
            {/* Perbaikan: lg:px8 menjadi lg:px-8 */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 gap-4">
                {/* Logo  */}
                <Link to='/' className="flex items-center gap-2 text-[22px] font-medium shrink-0">
                    <BikeIcon size={24} /> Insta Cart
                </Link>

                <div className="w-full flex items-center justify-end gap-4 lg:gap-10">
                    {/*Nav Links - Dekstop */}
                    <div className="hidden md:flex items-center gap-6 text-sm text-zinc-600">
                        <Link to='/'>Home</Link>
                        <Link to='/products'>Products</Link>
                        <Link to='/deals' className="text-app-orange">Deals</Link>
                    </div>

                    {/* Search */}
                    <form className="hidden sm:flex flex-1 max-w-sm text-xs sm:text-sm">
                        <div className="relative w-full">
                            {/* Perbaikan: top 1/2 - translate-y-1/2 menjadi top-1/2 -translate-y-1/2 */}
                            <SearchIcon className="absolute left-2.5 top-1/2 -translate-y-1/2 size-4 text-zinc-500" />
                            {/* Perbaikan: self closing input & tambahkan spasi sebelum className */}
                            <input
                                type="text"
                                placeholder="Search for groceries...."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-8 p-2 bg-orange-50 rounded-full ring ring-app-orange/15 focus:ring-app-orange/30"
                            />
                        </div>
                    </form>

                    {/* Right Actions */}
                    <div className="flex items-center gap-3">
                        {/* Cart */}
                        <button className="relative p-2 rounded-xl" onClick={() => setIsCartOpen(true)}>
                            <ShoppingCartIcon className="size-5 text-zinc-900" />
                            {cartCount > 0 && (
                                <span className="absolute -top-1 right-1 size-4 bg-app-orange text-white text-[10px] rounded-full flex-center">
                                    {cartCount}
                                </span>
                            )}
                        </button>

                        {/* User */}
                        <div className="relative">
                            {user ? (
                                <button className="flex items-center gap-2 p-2">
                                    <div className="size-7 rounded-full bg-green-950 text-white flex-center">
                                        {user.name.charAt(0).toUpperCase()}
                                    </div>
                                    <ChevronDownIcon className="size-3 text-zinc-500" />
                                </button>
                            ) : (
                                <div className=" flex-center gap-2">
                                    <Link to='/Login' className="hidden md:flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-screen-950 rounded-full hover:bg-screen-950-light transition-colors">
                                        <UserIcon size={16} />Sign In
                                    </Link>
                                    {userMenuOpen ? <XIcon className="md:hidden" onClick={() => setUserMenuOpen(!userMenuOpen)} /> : <MenuIcon className="md:hidden" onClick={() => setUserMenuOpen(!userMenuOpen)} />}
                                </div>
                            )}

                            {userMenuOpen && (
                                <>
                                    <div className="fixed inset-0 z-40" onClick={() => setUserMenuOpen(false)} />
                                    <div className="absolute right-0 mt-2.5 w-56 bg-white rounded-xl shadow-lg border border-app-border py-2 z-50 animate-fade-in">
                                        {user && (
                                            <div className="px-4 py-2 border-b border-app-border">
                                                <p className="text-sm font-medium text-zinc-900">{user?.name}</p>
                                                <p className="text-xs text-zinc-500">{user?.email}</p>
                                            </div>
                                        )}
                                        <div onClick={() => setUserMenuOpen(false)}>
                                            {!user && <Link to='/login' className="dropdown-link"><UserIcon size={16} />Sign In</Link>}

                                            {user && <Link to='/orders' className="dropdown-link"><PackageIcon size={16} />My Orders</Link>}

                                            {user && <Link to='/addreses' className="dropdown-link"><MapPinIcon size={16} />Adresses</Link>}

                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar