type CardItemProps<T extends React.ElementType = "div"> = {
  as?: T;
  children?: React.ReactNode;
  className?: string;
  translateX?: number | string;
  translateY?: number | string;
  translateZ?: number | string;
  rotateX?: number | string;
  rotateY?: number | string;
  rotateZ?: number | string;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export function CardItem<T extends React.ElementType = "div">({
  as,
  children,
  className,
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  ...props
}: CardItemProps<T>) {
  const Component = (as || "div") as React.ElementType;

  const ref = useRef<HTMLElement>(null);
  const [isMouseEntered] = useMouseEnter();

  useEffect(() => {
    if (!ref.current) return;

    ref.current.style.transform = isMouseEntered
      ? `translateX(${translateX}px)
         translateY(${translateY}px)
         translateZ(${translateZ}px)
         rotateX(${rotateX}deg)
         rotateY(${rotateY}deg)
         rotateZ(${rotateZ}deg)`
      : `translateX(0px)
         translateY(0px)
         translateZ(0px)
         rotateX(0deg)
         rotateY(0deg)
         rotateZ(0deg)`;
  }, [
    isMouseEntered,
    translateX,
    translateY,
    translateZ,
    rotateX,
    rotateY,
    rotateZ,
  ]);

  return React.createElement(
    Component,
    {
      ref,
      className: cn(
        "w-fit transition duration-200 ease-linear",
        className
      ),
      ...props,
    },
    children
  );
}