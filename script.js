   document.querySelectorAll('.navbar ul li a').forEach(function (link) {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelectorAll('.navbar ul li a').forEach(function (l) { l.classList.remove('act'); });
                this.classList.add('act');
            });
        });

        document.getElementById('searchInput').addEventListener('input', function () {
            var val = this.value.toLowerCase();
            document.querySelectorAll('#cattleFeed .c-card').forEach(function (card) {
                var name = card.getAttribute('data-name').toLowerCase();
                card.style.display = (val === '' || name.includes(val)) ? '' : 'none';
            });
        });

        document.querySelectorAll('.c-btn').forEach(function (btn) {
            btn.addEventListener('click', function (e) {
                e.stopPropagation();
                var orig = this.textContent;
                this.textContent = "✓ Qo'shildi";
                this.classList.add('added');
                var self = this;
                setTimeout(function () {
                    self.textContent = orig;
                    self.classList.remove('added');
                }, 1800);
            });
        });

        document.querySelectorAll('.c-fav').forEach(function (fav) {
            fav.addEventListener('click', function (e) {
                e.stopPropagation();
                this.textContent = this.textContent === '♡' ? '❤️' : '♡';
            });
        });

        var feed = document.getElementById('cattleFeed');
        var scrollAmt = 480;

        document.getElementById('scrollLeft').addEventListener('click', function () {
            feed.scrollBy({ left: -scrollAmt, behavior: 'smooth' });
        });

        document.getElementById('scrollRight').addEventListener('click', function () {
            feed.scrollBy({ left: scrollAmt, behavior: 'smooth' });
        });