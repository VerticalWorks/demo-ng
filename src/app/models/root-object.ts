import { ApiResult } from './api-result';
import { Info } from "./info";


export interface RootObject {
    results: ApiResult[];
    info: Info;
}
