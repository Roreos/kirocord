import type { ExtensionConfiguration } from "../config";
import { CONFIG_KEYS } from "../constants";

export const getApplicationId = (config: ExtensionConfiguration) => {
    const applicationIds = new Map([
        ["Kiro", "1395076707911733340"], // Using a unique ID for Kiro
        ["Custom", config.get(CONFIG_KEYS.App.Id)!]
    ]);

    const currentAppName = config.get(CONFIG_KEYS.App.Name)!;

    let clientId = config.get(CONFIG_KEYS.App.Id)!;
    for (const [appName, id] of applicationIds.entries()) {
        if (currentAppName !== appName) continue;
        clientId = id;
        break;
    }

    return { clientId };
};
