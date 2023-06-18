import React from "react";
import { useRouter } from "next/router";

const AnchorLink: React.FC<AnchorLinkPropType> = ({ children, path, className, loading }) => {
  const ref = React.createRef<HTMLAnchorElement>();
  const router = useRouter();

  React.useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener("click", (e) => {
        e.preventDefault();
        router.push(path).then(() => {});
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
