import type { ActionDefinition, JsonSchema } from "../../core/types.ts";

import { defineProviderAction } from "../../core/provider-definition.ts";
import { graphhopperGeneratedActionSchemas } from "./generated.ts";

const service = "graphhopper";

export type GraphhopperActionName = (typeof graphhopperGeneratedActionSchemas)[number]["name"];

export const graphhopperActions: ActionDefinition[] = graphhopperGeneratedActionSchemas.map((actionSchema) =>
  defineProviderAction(service, {
    name: actionSchema.name,
    description: actionSchema.description,
    requiredScopes: actionSchema.requiredScopes,
    providerPermissions: actionSchema.providerPermissions,
    inputSchema: actionSchema.inputSchema as JsonSchema,
    outputSchema: actionSchema.outputSchema as JsonSchema,
  }),
);
