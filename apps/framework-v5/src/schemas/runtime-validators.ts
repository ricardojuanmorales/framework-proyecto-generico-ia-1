import Ajv2020 from "ajv/dist/2020.js";
import addFormats from "ajv-formats";
import projectSchema from "./project.schema.json";
import stateSchema from "./framework-state.schema.json";
import portfolioSchema from "./portfolio.schema.json";
import decisionSchema from "./decision.schema.json";
import transferSchema from "./transfer.schema.json";
import packageSchema from "./package.schema.json";

const ajv = new Ajv2020({ allErrors: true, strict: true, validateFormats: true });
addFormats(ajv);
for (const schema of [stateSchema, portfolioSchema, decisionSchema, transferSchema, projectSchema]) {
  ajv.addSchema(schema);
}

const projectValidator = ajv.getSchema(String(projectSchema.$id));
if (!projectValidator) throw new Error("PROJECT_SCHEMA_NOT_REGISTERED");
const packageValidator = ajv.compile(packageSchema);

export const validateProject = (value: unknown): boolean => Boolean(projectValidator(value));
export const validatePackage = (value: unknown): boolean => Boolean(packageValidator(value));
