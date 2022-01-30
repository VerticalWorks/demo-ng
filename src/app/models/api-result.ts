import { Dob } from './dob';
import { Id } from './id';
import { Location } from './location';
import { Login } from './login';
import { Name } from './name';
import { Person } from './person';
import { Picture } from './picture';
import { Registered } from './registered';


export interface ApiResult {
    gender: string;
    name: Name;
    location: Location;
    email: string;
    login: Login;
    dob: Dob;
    registered: Registered;
    phone: string;
    cell: string;
    id: Id;
    picture: Picture;
    nat: string;
}


