import { RiSearch2Line } from "react-icons/ri";

export default function SearchBar() {
    return (
        <form className="max-w-prose w-full p-2 my-6 flex items-center justify-between flex-wrap gap-2 border border-slate-200 rounded-sm">
            <div className="flex items-center w-full">
                <input type="search" name="search" id="search" className="bg-slate-50 border py-2 px-4 outline-primary w-full" required/>
            </div>
            <div className="flex items-center justify-center gap-2 sm:self-center">
                <select id="categories" className="md:w-full">
                    <option className="block p-2" value="character" selected>Characters</option>
                    <option value="location">Locations</option>
                    <option value="episode">Episodes</option>
                </select>
                <button type="submit" className="btn--primary btn--icon-only btn--32 btn--round h-full" aria-label="search">
                    <span className="icon text-white">
                        <RiSearch2Line aria-hidden="true" focusable="false"/>
                    </span>
                </button>
            </div>
        </form>
    )
}