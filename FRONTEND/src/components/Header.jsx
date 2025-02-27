// import "./Header.css"; // Import the CSS file

export default function Header() {
    return (
        <header className="header bg-yellow-600 text-white text-[24px] flex justify-between items-center p-4 text-bold">
            <h1 className="logo">SmartCanteen</h1>
            <nav className="nav flex gap-4">
                <a href="/">Home</a>
                <a href="/menu">Menu</a>
                <a href="/orders">Orders</a>
                <a href="/rewards">Rewards</a>
                <a href="/support">Support</a>
            </nav>
        </header>
    );
}
