import Link from "next/link";

const Icon = ({ text, url, children, count, numberOfItems }) => {
  return (
    <Link href={url}>
      <a className="text-center relative">
        <div className="text-2xl font-normal">{children}</div>
        <div className="text-primary text-xs leading-3">{text}</div>
        {count && (
          <span className="absolute right-0 -top-1 w-5 h-5 rounded-full flex  justify-center bg-primary text-white text-xs">
            {numberOfItems}
          </span>
        )}
      </a>
    </Link>
  );
};

export default Icon;
