import { ResultService } from './result.service';
export declare class ResultController {
    private readonly resultService;
    constructor(resultService: ResultService);
    findOne(id: number): Promise<{
        resultId: number;
    }>;
}
