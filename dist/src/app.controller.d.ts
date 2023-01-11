import { AwsService } from './aws.service';
export declare class AppController {
    private readonly awsService;
    constructor(awsService: AwsService);
    getHello(): string;
}
