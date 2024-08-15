import { applicationUILinks } from "./links";

function SectionLinks() {
  return (
    <ul className="text-sm text-neutrals-200 border-l border-neutrals-400/30 space-y-3 ml-1">
      {applicationUILinks.map((link) => (
        <li className="pl-3" key={link.lable}>
          <a href={link.href} className="cursor-pointer">
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default SectionLinks;
