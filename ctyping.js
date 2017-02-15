(function ($) {
  $.fn.ctyping = function (value, min, max) {
    return this.each(function () {
      var $this = $(this);
      var values = value.split("");
      var count = 0;

      function add() {
        $this.append(values[count]);
        count++;

        if (count !== values.length) {
          setTimeout(add, Math.floor(Math.random() * (++max - min)) + min);
        }
      }

      setTimeout(add, Math.floor(Math.random() * (++max - min)) + min);
    });
  };
})(jQuery);
