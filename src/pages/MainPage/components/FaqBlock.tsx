import classNames from "classnames";
import { useTranslation } from "entities/language/lib";
import { ReactNode } from "react";
import { useHover } from "shared/lib/hooks/useHover";
import { ChatIcon } from "../config/images/ChatIcon";

export const FaqBlock: React.FC<{
  className?: string;
  children: ReactNode;
}> = ({ className, children }) => {
  const { $t } = useTranslation();

  const [refText, isHoveredText] = useHover();
  const [refCircle, isHoveredCircle] = useHover();

  return (
    <div className={classNames(className, "flex  items-center")}>
      {children}
      <div className="flex items-center -mr-[3.25rem]">
        <div
          ref={refText}
          className="cursor-pointer text-lg text-light text-right pr-4"
        >
          <div className={"font-light"}>
            {$t("pages.main.supportText.line1")}
          </div>
          <div
            className={classNames(
              "font-medium",
              (isHoveredText || isHoveredCircle) && "text-accent"
            )}
          >
            {$t("pages.main.supportText.line2")}
          </div>
        </div>
        <ChatIcon
          ref={refCircle}
          isHovered={isHoveredCircle}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};
