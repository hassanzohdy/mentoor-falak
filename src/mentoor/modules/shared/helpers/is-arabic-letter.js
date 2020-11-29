String.prototype.startsWithArabic = function () {
  return this.trim().charAt(0).match(ARABIC_PATTERN);
};

String.prototype.includesArabic = function () {
  return this.match(ARABIC_PATTERN);
};