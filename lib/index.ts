import { ZodError } from "zod";
import c from "ansi-colors";

type Options = {
	withIndex: boolean;
	noColors: boolean;
	errorCode: boolean;
};

const defaultOpts = { withIndex: true, noColors: false, errorCode: true };

export function prettifyZodError(err: ZodError, opts: Options = defaultOpts) {
	const pretty = err.issues
		.map((issue, idx) => {
			const segments = [];
			if (opts.withIndex) segments.push(`${c.bold(`${idx + 1}.`)}`);
			segments.push(`[${c.blue(issue.path.join("."))}]:`);
			segments.push(issue.message);
			if (opts.errorCode) segments.push(`(${c.dim(issue.code)})`);
			if (opts.noColors) segments.map((s) => c.stripColor(s));
			return segments.join(" ");
		})
		.join("\n");
	return pretty;
}

export function logPrettyZodError(err: ZodError, opts: Options = defaultOpts) {
	console.log(prettifyZodError(err, opts));
}
