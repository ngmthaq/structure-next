import { FC, createRef, useEffect } from "react";
import { useRouter } from "next/router";
import { Element } from "@/helpers/element.helper";

const AnchorLink: FC<AnchorLinkPropType> = ({ children, path, className, loading }) => {
  const ref = createRef<HTMLAnchorElement>();
  const router = useRouter();

  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener("click", (e) => {
        e.preventDefault();
        if (router.pathname !== path) {
          if (loading) Element.openProgressLoading();
          setTimeout(() => {
            router.push(path).then(() => {
              if (loading) Element.closeProgressLoading();
            });
          }, 100);
        }
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
