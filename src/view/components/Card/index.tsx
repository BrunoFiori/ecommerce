import React from "react";
import CardContent from "../CardContent";
import CardFooter from "../CardFooter";
import CardHeader from "../CardHeader";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className }) => {
  const childrenArray = React.Children.toArray(children);

  const header = childrenArray.find(
    (child) => React.isValidElement(child) && child.type === CardHeader
  );
  const content = childrenArray.find(
    (child) => React.isValidElement(child) && child.type === CardContent
  );
  const footer = childrenArray.find(
    (child) => React.isValidElement(child) && child.type === CardFooter
  );
  return (
    <div
      className={`${className} w-full flex m-2.5 rounded-lg cursor-pointer shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 bg-white relative`}
    >
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center px-2.5 py-8 w-full h-full">
          {header}
          <div className="grid grid-cols-1 gap-4 px-2.5">{content}</div>
        </div>
        <div className="flex flex-col justify-end items-center px-2.5 pb-8 w-full bottom-0">
          {footer}
        </div>
      </div>
    </div>
  );
};

export default Card;
