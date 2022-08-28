export interface IEnvironment {
    environment: {
        production: boolean;
        apiUrl: string;
        imports?: any[];
    };
}
