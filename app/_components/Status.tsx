import {Section} from "@/app/_components/Section";
import {
    Card
} from "@/components/ui/card";

export default function Status() {
    return (
        <Section className="flex max-md:flex-col items-start gap-4">
            <Card className="flex-[2] p-4 flex flex-col gap-2">
                Side projects
            </Card>

            <div className="flex-1 space-y-2">
                <Card className="p-4">
                    Work
                </Card>
                <Card className="p-4">
                    Contact me
                </Card>
            </div>
        </Section>
    );
};