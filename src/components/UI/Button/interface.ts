import { ButtonHTMLAttributes } from "react";

export default interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    background?: 'green' | 'background' | 'lightest_gray';
    color?: 'detail' | 'green' | 'gray';
}
