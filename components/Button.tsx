import Image from 'next/image';
import React from 'react';

interface BtnProps {
    label: string;
    type: 'submit' | 'reset' | 'button' | undefined;
}
const Button = ({label, type}: BtnProps) => {
    return (
        <button
            className="btn bg-(--clr-lime) font-bold leading-(--lh-125) flex items-center justify-center gap-x-3 px-(--space-500) py-4 rounded-full cursor-pointer md:w-[19.625rem]"
            type={type}>
            <Image
                width={24}
                height={24}
                src="/assets/images/icon-calculator.svg"
                alt="arrow"
            />
            <p>{label}</p>
        </button>
    );
};

export default Button;
