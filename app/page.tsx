'use client';

import {useState} from 'react';
import BtnLink from '@/components/BtnLink';
import Button from '@/components/Button';
import EmptyResult from '@/components/EmptyResult';
import Input from '@/components/Input';
import Radio from '@/components/Radio';
import Result from '@/components/Result';
import {calculateMortgage, MortgageDetails, MortgageResult} from '@/lib/utils';

interface MortgageForm {
    amount: string;
    term: string;
    rate: string;
    type: string | 'repayment' | 'interest-only';
}

export default function Home() {
    const [mortgageForm, setMortgageForm] = useState<MortgageForm>({
        amount: '',
        term: '',
        rate: '',
        type: '',
    });

    const clearAll: () => void = () => {
        setMortgageForm({
            amount: '',
            term: '',
            rate: '',
            type: '',
        });
    };

    const [errors, setErrors] = useState<Record<string, string>>({});

    const validateForm = (): boolean => {
        const newErrors: Record<string, string> = {};

        if (!mortgageForm.amount) {
            newErrors.amount = 'This field is required';
        }
        if (!mortgageForm.term) {
            newErrors.term = 'This field is required';
        }
        if (!mortgageForm.rate) {
            newErrors.rate = 'This field is required';
        }
        if (!mortgageForm.type) {
            newErrors.type = 'This field is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const [result, setResult] = useState<MortgageResult | undefined>();

    const handleFieldChange = (field: string, value: string) => {
        setMortgageForm((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        const data = calculateMortgage(mortgageForm as MortgageDetails);
        setResult(data);
    };

    return (
        <div className="bg-(--clr-white) md:m-(--space-500) md:rounded-3xl  overflow-hidden">
            <div className="flex flex-col lg:flex-row md:w-[43rem] lg:w-[63rem]">
                {/* Calculator */}
                <form
                    onSubmit={handleSubmit}
                    className="calculator-wrapper bg-(--clr-white) flex flex-col gap-y-(--space-300) px-(--space-300) py-(--space-400) md:p-(--space-500) md:gap-y-(--space-500) lg:flex-1">
                    <div className="header flex flex-col justify-start gap-y-(--space-100)  md:justify-between md:flex-row">
                        <h1 className="text-(--clr-slate-900) text-(length:--fs-24) font-bold leading-(--lh-125)">
                            Mortgage Calculator
                        </h1>
                        <BtnLink clearAll={clearAll} />
                    </div>

                    {/* Inputs */}
                    <div className="flex flex-col gap-y-(--space-300)">
                        <Input
                            prefix
                            prefixLabel="£"
                            label="Mortgage Amount"
                            name="amount"
                            value={mortgageForm.amount}
                            handleChange={handleFieldChange}
                            error={errors.amount}
                        />

                        <div className="flex flex-col gap-y-(--space-300) md:flex-row md:justify-between md:gap-x-[1.5rem]">
                            <Input
                                suffix
                                label="Mortgage Term"
                                name="term"
                                suffixLabel="years"
                                value={mortgageForm.term}
                                handleChange={handleFieldChange}
                                error={errors.term}
                            />
                            <Input
                                suffix
                                label="Interest Rate"
                                suffixLabel="%"
                                name="rate"
                                value={mortgageForm.rate}
                                handleChange={handleFieldChange}
                                error={errors.rate}
                            />
                        </div>

                        {/* Radio Inputs */}
                        <div className="flex flex-col gap-y-(--space-150)">
                            <p className="text-(--clr-slate-700) text-(length:--fs-16) font-medium leading-(--lh-500)">
                                Mortgage Type
                            </p>
                            <Radio
                                label="Repayment"
                                name="morgage-type"
                                value="repayment"
                                checked={mortgageForm.type === 'repayment'}
                                onChange={(value) =>
                                    handleFieldChange('type', value)
                                }
                            />
                            <Radio
                                label="Interest Only"
                                name="morgage-type"
                                value="interest-only"
                                checked={mortgageForm.type === 'interest-only'}
                                onChange={(value) =>
                                    handleFieldChange('type', value)
                                }
                            />
                            {errors.type && (
                                <p className="error-text text-(--clr-red) text-(length:--fs-14) font-medium leading-(--lh-150)">
                                    {errors.type}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Button */}
                    <Button label="Calculate Repayments" type="submit" />
                </form>

                {/* Result  */}
                <div className="result flex items-center justify-center bg-(--clr-slate-900) py-(--space-400) px-(--space-300) md:p-(--space-500) lg:flex-1 lg:rounded-bl-[5rem]">
                    {result ? <Result result={result} /> : <EmptyResult />}
                </div>
            </div>
        </div>
    );
}
