export interface MortgageDetails {
    amount: string;
    term: string;
    rate: string;
    type: 'repayment' | 'interest-only';
}

export interface MortgageResult {
    monthlyPayment: string;
    totalRepayment: string;
    totalInterest: string;
}

export function calculateMortgage({
    amount,
    term,
    rate,
    type,
}: MortgageDetails): MortgageResult {
    // Convert input strings to numbers and clean formatting
    const principal = Number(amount.replace(/,/g, ''));
    const years = Number(term);
    const annualRate = Number(rate);

    // Monthly interest rate
    const monthlyRate = annualRate / 100 / 12;
    // Total number of payments
    const numberOfPayments = years * 12;

    let monthlyPayment: number, totalRepayment: number;

    if (type === 'repayment') {
        // Repayment mortgage calculation
        monthlyPayment =
            (principal *
                (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
            (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

        totalRepayment = monthlyPayment * numberOfPayments;
    } else {
        // Interest-only mortgage calculation
        monthlyPayment = principal * monthlyRate;
        totalRepayment = monthlyPayment * numberOfPayments + principal;
    }

    // Format numbers with commas and 2 decimal places
    const formatNumber = (num: number): string => {
        return num.toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        });
    };

    return {
        monthlyPayment: formatNumber(Math.round(monthlyPayment * 100) / 100),
        totalRepayment: formatNumber(Math.round(totalRepayment * 100) / 100),
        totalInterest: formatNumber(
            Math.round((totalRepayment - principal) * 100) / 100
        ),
    };
}
