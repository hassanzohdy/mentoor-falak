/**
 * Get user image, or return default image instead
 * 
 * @param   object user
 * @returns string
 */
function userImage(user) {
    return user.image || assets('images/avatar.png');
}

/**
 * Get full name of the user
 * 
 * @param   object user
 * @returns string
 */
function userName(user) {
    return user.name;
    return `${user.name.first} ${user.name.last}`;
}

/**
 * Get user affiliate url
 * 
 * @param   object user
 * @returns string
 */
function affiliateUrl(user) {
    return url(`/register?invitationCode=${user.invitationCode}`);
}