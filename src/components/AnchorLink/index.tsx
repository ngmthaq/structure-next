import React from "react";
import { useRouter } from "next/router";
import { Element } from "@/helpers/element.helper";

const AnchorLink: React.FC<AnchorLinkPropType> = ({ children, path, className, loading }) => {
  const ref = React.createRef<HTMLAnchorElement>();
  const router = useRouter();

  React.useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener("click", (e) => {
        e.preventDefault();
        Element.openSpinnerLoading();
        router.push(path).then(() => {
          Element.closeSpinnerLoading();
        });
      });
    }
  }, [ref]);

  return (
    <a href={path} className={className} ref={ref}>
      {children}
    </a>
  );
};

export default AnchorLink;

export type AnchorLinkPropType = {
  children: React.ReactNode;
  path: string;
  className?: string;
  loading?: boolean;
};
