&lt;a href="/"&gt;HOME&lt;/a&gt; : &lt;a href="/pictures/"&gt;PICTURES&lt;/a&gt; : &lt;span class="active"&gt;HOLIDAYS&lt;/span&gt;

const ignoreWords = ["the","of","in","from","by","with","and", "or", "for", "to", "at", "a"];

function generateBC(url, separator) {
    const arr = url.replace(/((\/index|\?|#).*)|(^http(s)?:\/\/)|(\/$)/g, '').split('/');
    const urlArray = arr.map((item, index) => {
        if (!index) {
            return {
                name: 'HOME',
                href: arr.length === 1 ? '' : '/',
            };
        }

        let name = item;
        if (item.length > 30) {
            name = item.split('-')
                .filter((word) => !ignoreWords.includes(word))
                .map((word) => word[0])
                .join('')
                .toUpperCase();
        }

        if (index === arr.length - 1) {
            return {
                name: name.replace(/\.(html|htm|php|asp).*/gi, '').toUpperCase().replace(/-/g, ' '),
            };
        }

        if (index > 0) {
            let i = index;
            let href = '';
            while(i) {
                href = `/${arr[i]}${href}`;
                i--;
            }

            return {
                name: name.toUpperCase().replace(/-/g, ' '),
                href: href + '/',
            };
        }


    });
    return urlArray.map((item) => {
        if (item.href) {
            return `<a href="${item.href}">${item.name}</a>`
        } else {
            return `<span class="active">${item.name}</span>`
        }
    }).join(separator);
}
