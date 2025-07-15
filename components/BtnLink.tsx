'use client';

const BtnLink = ({clearAll}:{clearAll: () => void}) => {
   
    return (
        <button
            className="text-(--clr-slate-700) text-left text-base font-medium underline leading-(--lh-150) hover:text-(--clr-slate-900) cursor-pointer"
            type="button"
            onClick={clearAll}>
            Clear All
        </button>
    );
};

export default BtnLink;
