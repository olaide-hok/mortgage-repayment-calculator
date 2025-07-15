'use client';

interface RadioProps {
    name: string;
    label: string;
    value: string;
    checked: boolean;
    onChange: (value: string) => void;
}

const Radio = ({label, name, value, checked, onChange}: RadioProps) => {
    const borderAndBgColor = checked
        ? 'border-(--clr-lime) bg-[#d8db2f26]'
        : 'border-(--clr-slate-700)';
    return (
        <div
            className={`border border-solid ${borderAndBgColor} flex gap-x-(--space-200) px-(--space-200) py-(--space-150) rounded-sm cursor-pointer text-(--clr-slate-900) font-bold leading-(--lh-150)`}>
            <input
                className="rounded-full"
                type="radio"
                name={name}
                id="radio"
                value={value}
                checked={checked}
                onChange={() => onChange(value)}
            />
            <label htmlFor="radio">{label}</label>
        </div>
    );
};

export default Radio;
