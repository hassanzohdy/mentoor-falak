/**
 * Round number with given precision
 * 
 * @param   Number value
 * @param   Number precision
 * @returns Number;
 */
function round(value, precision = 1) {
  var multiplier = Math.pow(10, precision || 0);
  return Math.floor(value * multiplier) / multiplier;
}


/**
 * Get badge based on given status
 * 
 * @param   {string} status
 * @returns object 
 */
function getStatusBadge(status) {
  return {
    'badge-info': status == 'active',
    'badge-warning': status == 'pending',
    'badge-success': status == 'approved',
    'badge-danger': status == 'rejected',
  };
}


/**
 * Check if the given string path is a an image
 * 
 * @param  {string} string
 * @returns boolean 
 */
function isImage(string) {
    return [
        'jpg',
        'png',
        'jpeg',
        'gif',
        'ico',
        'webp',
        'svg',
        'bmp'
    ].includes(String(string).extension().toLowerCase());
}