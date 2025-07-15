import Image from 'next/image';

const EmptyResult = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-y-(--space-200)">
            <Image
                src="/assets/images/illustration-empty.svg"
                alt="empty"
                width={192}
                height={192}
            />
            <h2 className="text-(--clr-white) text-(length:--fs-24) font-bold leading-(--lh-125)">
                Results shown here
            </h2>
            <p className="text-(--clr-slate-300) text-(length:--fs-16) text-center font-medium leading-(--lh-150)">
                Complete the form and click “calculate repayments” to see what
                your monthly repayments would be.
            </p>
        </div>
    );
};

export default EmptyResult;
