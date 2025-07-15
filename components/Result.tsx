import {MortgageResult} from '@/lib/utils';

interface ResultProps {
    result: MortgageResult;
}

const Result = ({result}: ResultProps) => {
    const {monthlyPayment, totalRepayment} = result;

    return (
        <div className="flex flex-col gap-y-(--space-300) md:gap-y-(--space-500)">
            <div className="result-desc flex flex-col gap-y-(--space-200)">
                <h3 className="text-(--clr-white) text-(length:--fs-24) font-bold leading-(--lh-125)">
                    Your results
                </h3>
                <p className="text-(--clr-slate-300) text-(length:--fs-16) font-medium leading-(--lh-500)">
                    Your results are shown below based on the information you
                    provided. To adjust the results, edit the form and click
                    “calculate repayments” again.
                </p>
            </div>

            {/* result card */}
            <div className="result-card flex flex-col gap-y-(--space-200) md:gap-y-(--space-400) py-(--space-300) px-(--space-200) md:p-(--space-400) rounded-lg">
                <div className="result-value">
                    <p className="text-(--clr-slate-300) text-(length:--fs-16) font-medium leading-(--lh-500)">
                        Your monthly repayments
                    </p>
                    <p className="text-(--clr-lime) text-[length:2.5rem] font-bold">
                        £{monthlyPayment}
                    </p>
                </div>

                <hr />

                <div className="repay flex flex-col gap-y-(--space-100)">
                    <p className="text-(--clr-slate-300) text-(length:--fs-16) font-medium leading-(--lh-500)">
                        Total you&apos;ll repay over the term
                    </p>
                    <p className="text-(--clr-white) text-(length:--fs-24) font-bold leading-(--lh-125)">
                        £{totalRepayment}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Result;
