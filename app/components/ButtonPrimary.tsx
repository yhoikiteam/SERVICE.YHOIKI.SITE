import classNames from 'classnames';
// components/Button.js
export default function ButtonPrimary({ children, classNames}) {
    return (
        <button
            className={`bg-green-600 text-white px-7 py-2 rounded-full ${classNames}`}
        >
            {children}
        </button>
    );
}
