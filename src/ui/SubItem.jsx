import { NavLink } from "react-router-dom";

export function SubItem({ itemName }) {
  return (
    <li className="pt-4 pb-1 border-b-[1px] border-slate-400" onClick={onLeave}>
      <NavLink to="campus/school">{itemName}</NavLink>
    </li>
  );
}
