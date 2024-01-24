//import { authenticationService } from '../_services';
//import { BehaviorSubject } from 'rxjs';
import deviceStorage from '../helpers/deviceStorage'


export async function authHeader() {
    /*
     deviceStorage.getItem('currentUser')
    .then((curr) => { 
        const currentUser = JSON.parse(curr);      
    });
*/

    const currentUser = await deviceStorage.getItem('currentUser');

    if (currentUser && currentUser.token) {
        return  {
            Authorization: `Bearer ${currentUser.token}`
        };

    } else {
        return {};
    }
    /*
    const values = await deviceStorage.getItem('currentUser')
    .then((curr) => { 
        const currentUser = JSON.parse(curr);      
        if (currentUser && currentUser.token) {
            returnVal = {
                Authorization: `Bearer ${currentUser.token}`
            };
    
        } else {
            returnVal = {};
        }
    });
*/


   
}