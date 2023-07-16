/* eslint-disable @typescript-eslint/no-unused-vars */
import { CustomArrowProps } from 'react-slick';

type SLickButtonFixProps = {
  children: React.ReactNode;
} & CustomArrowProps;

export function SlickButtonFix({
  currentSlide,
  slideCount,
  children,
  ...props
}: SLickButtonFixProps) {
  return <span {...props}>{children}</span>;
}

SlickButtonFix;
