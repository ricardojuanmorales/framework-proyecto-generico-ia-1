import Ajv2020 from "ajv/dist/2020.js";
import addFormats from "ajv-formats";
import projectSchema from "./project.schema.json";
import stateSchema from "./framework-state.schema.json";
import portfolioSchema from "./portfolio.schema.json";
import decisionSchema from "./decision.schema.json";
import transferSchema from "./transfer.schema.json";
import knowledgeInvocationSchema from "./knowledge-invocation.schema.json";
import caleidoscopeEventSchema from "./caleidoscope-event.schema.json";
import commonKnowledgeItemSchema from "./common-knowledge-item.schema.json";
import packageSchema from "./package.schema.json";

const ajv = new Ajv2020({ allErrors: true, strict: true, validateFormats: true });
addFormats(ajv);
for (const schema of [
  stateSchema,
  portfolioSchema,
  decisionSchema,
  transferSchema,
  knowledgeInvocationSchema,
  caleidoscopeEventSchema,
  commonKnowledgeItemSchema,
  projectSchema,
]) {
  ajv.addSchema(schema);
}

const projectValidator = ajv.getSchema(String(projectSchema.$id));
const commonKnowledgeItemValidator = ajv.getSchema(String(commonKnowledgeItemSchema.$id));
const knowledgeInvocationValidator = ajv.getSchema(String(knowledgeInvocationSchema.$id));
const caleidoscopeEventValidator = ajv.getSchema(String(caleidoscopeEventSchema.$id));
if (!projectValidator) throw new Error("PROJECT_SCHEMA_NOT_REGISTERED");
if (!commonKnowledgeItemValidator) throw new Error("COMMON_KNOWLEDGE_SCHEMA_NOT_REGISTERED");
if (!knowledgeInvocationValidator) throw new Error("KNOWLEDGE_INVOCATION_SCHEMA_NOT_REGISTERED");
if (!caleidoscopeEventValidator) throw new Error("CALEIDOSCOPE_EVENT_SCHEMA_NOT_REGISTERED");
const packageValidator = ajv.compile(packageSchema);

export const validateProject = (value: unknown): boolean => Boolean(projectValidator(value));
export const validatePackage = (value: unknown): boolean => Boolean(packageValidator(value));
export const validateCommonKnowledgeItem = (value: unknown): boolean => Boolean(commonKnowledgeItemValidator(value));
export const validateKnowledgeInvocation = (value: unknown): boolean => Boolean(knowledgeInvocationValidator(value));
export const validateCaleidoscopeEvent = (value: unknown): boolean => Boolean(caleidoscopeEventValidator(value));
