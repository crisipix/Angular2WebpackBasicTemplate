// Extra variables that live on Global that will be replaced by webpack DefinePlugin
declare var Environment: string;
declare var PROD_API_URL: string;

export interface GlobalEnvironment {
    Environment: string;
    PROD_API_URL: string;
}

export class GlobalConfig implements GlobalEnvironment {
    Environment: string;
    PROD_API_URL: string;
    constructor() {
        this.Environment = Environment;
        this.PROD_API_URL = PROD_API_URL;
    }
}
