import { NavLink } from "react-router-dom";

export function SubItem() {
  return (
    <li className="pt-4 pb-1 border-b-[1px] border-slate-400">
      <NavLink to="campus/school">School</NavLink>
    </li>
  );
}
