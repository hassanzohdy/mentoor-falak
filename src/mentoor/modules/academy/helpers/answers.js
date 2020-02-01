/**
 * Return an object that determines which css class to use based on the given answer status 
 * @param {G} status 
 */
const answerStatusClass = status => ({
    'badge-warning': status === 'pending',
    'badge-danger': status === 'rejected',
    'badge-success': status === 'approved'
});