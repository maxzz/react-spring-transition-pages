import { TestForms } from './1-test-forms';
import { TestPages } from './2-test-pages';

export function SectionMain() {
    return (
        <div className="h-full flex flex-col gap-4">
            <TestForms />
            <TestPages />
        </div>
    );
}
