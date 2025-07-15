interface InputProps {
    name: string;
    label: string;
    prefix?: boolean;
    suffix?: boolean;
    suffixLabel?: string;
    prefixLabel?: string;
    value: string;
    handleChange: (field: string, value: string) => void;
    error: string;
}

const Input = ({
    name,
    label,
    prefix,
    prefixLabel,
    suffix,
    suffixLabel,
    value,
    handleChange,
    error,
}: InputProps) => {
    const bgAndTextColor = error
        ? 'bg-(--clr-red) text-(--clr-white)'
        : 'bg-(--clr-slate-100) text-(--clr-slate-700)';

    const borderColor = error
        ? 'border-(--clr-red)'
        : 'border-(--clr-slate-500)';

    if (prefix && prefixLabel) {
        return (
            <div className="input-container flex flex-col gap-y-3 w-full">
                <label
                    className="label text-(--clr-slate-700) font-medium leading-(--lh-150) text-(length:--fs-16)"
                    htmlFor={name}>
                    {label}
                </label>
                <div
                    className={`border border-solid ${borderColor} flex rounded-sm`}>
                    <span className={`prefix ${bgAndTextColor} font-bold`}>
                        {prefixLabel}
                    </span>
                    <input
                        className="input-field text-(--clr-slate-900) font-bold leading-(--lh-125) w-full pl-4"
                        type="text"
                        id={name}
                        value={value}
                        onChange={(e) => handleChange(name, e.target?.value)}
                    />
                </div>
                {error && (
                    <p className="error-text text-(--clr-red) text-(length:--fs-14) font-medium leading-(--lh-150)">
                        {error}
                    </p>
                )}
            </div>
        );
    }

    if (suffix && suffixLabel) {
        return (
            <div className="input-container flex flex-col gap-y-3 w-full">
                <label
                    className="label text-(--clr-slate-700) font-medium leading-(--lh-150) text-(length:--fs-16)"
                    htmlFor={name}>
                    {label}
                </label>
                <div
                    className={`border border-solid ${borderColor} flex rounded-sm`}>
                    <input
                        className="input-field text-(--clr-slate-900) font-bold leading-(--lh-125) w-full pl-4"
                        type="text"
                        id={name}
                        value={value}
                        onChange={(e) => handleChange(name, e.target.value)}
                    />
                    <span className={`prefix ${bgAndTextColor} font-bold`}>
                        {suffixLabel}
                    </span>
                </div>
                {error && (
                    <p className="error-text text-(--clr-red) text-(length:--fs-14) font-medium leading-(--lh-150)">
                        {error}
                    </p>
                )}
            </div>
        );
    }

    return null;
};

export default Input;
