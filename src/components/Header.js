import { FaMoon, FaSun } from "react-icons/fa";
export default function Header({handleToggleDarkMode, darkmode}) {
    const icons= darkmode ? <FaSun/> : <FaMoon/>
  return (
    <div className="container mx-auto flex items-center justify-between">
    <h1 className="text-5xl font-bold text-green-900 py-6">Notes</h1>
    <button
          className="toggle my-6 p-2 text-xl rounded-full bg-green-600 hover:bg-green-900 transition duration-500 text-green-50"
          onClick={() =>
            handleToggleDarkMode((flip) => !flip)
          }
        >
          {icons}
        </button>
    </div>
  )
}
