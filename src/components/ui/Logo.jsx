import Link from "./Link";
import { LineSegments } from "@phosphor-icons/react";

function Logo({ link }) {
  return (
    <Link link={link} className="flex-center">
      <figure className="logo flex-center">
        <div className="logo-img flex-center">
          <LineSegments weight="light" className="icon--big" />
        </div>
        <figcaption className="font-mid">Trackify</figcaption>
      </figure>
    </Link>
  );
}

export default Logo;
