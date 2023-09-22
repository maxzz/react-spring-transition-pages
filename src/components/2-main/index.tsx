import { TestForms } from './1-test-forms';
import { TestPages } from './2-test-pages';
import { PagesRouter } from './3-test-router';

export function SectionMain() {
    return (
        <div className="h-full flex flex-col gap-4">
            <TestForms />
            <TestPages />
            <PagesRouter />
        </div>
    );
}
