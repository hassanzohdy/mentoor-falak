String.prototype.startsWithArabic = function () {
  return this.trim().charAt(0).match(ARABIC_PATTERN);
};