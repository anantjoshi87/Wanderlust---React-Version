import { Field, FieldLabel } from "@/components/ui/field";
import { Progress } from "@/components/ui/progress";

export function CompletionBar({ progress = 0 }) {
  return (
    <Field className="w-full max-w-sm">
      <FieldLabel htmlFor="progress-upload">
        <span>Completion</span>
        <span className="ml-auto">{progress}%</span>
      </FieldLabel>
      <Progress value={progress} id="progress-upload" />
    </Field>
  );
}
