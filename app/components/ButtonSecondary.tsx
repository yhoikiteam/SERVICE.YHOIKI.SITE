// components/Button.js
export default function ButtonSecondary({ children}) {
    return (
        <button
            className="bg-gray-300 px-7 py-2 rounded-full"
        >
            {children}
        </button>
    );
}
