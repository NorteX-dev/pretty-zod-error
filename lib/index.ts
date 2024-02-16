import { ZodError } from "zod";
import c from "ansi-colors";

export function logZodError(err: ZodError) {
	return err.issues
		.map((issue, idx) => {
			return `${c.bold(`${idx + 1}.`)} [${c.blue(issue.path.join("."))}]: ${
				issue.message
			} (${c.dim(issue.code)})`;
		})
		.join("\n");
}
