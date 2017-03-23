import { User } from '../user/models/user';

export function generateUser() {
    let user = new User();
    user.username = 'Chris';
    user.entitlements = generateEntitlements();
}

export function generateEntitlements() {

    //return [];
    return ['tagging', 'tree', 'samples', 'forms', 'left', 'right','handson']
}