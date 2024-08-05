const HTMLConstruct = (() => {
    const helper = (fn, tags) => new Proxy(fn, {
        get(target, key) {
            tags.push(key);
            return helper(fn, tags);
        },
        apply(target, thisArg, argArray) {
            const head = document.createElement(tags[0]);
            let element = head;

            for(let i = 1; i < tags.length; i++) {
                element = element.appendChild(document.createElement(tags[i]));
            }
            element.append(...argArray);

            return head;
        }
    });

    return new Proxy({}, {
        get(target, key) {
            return helper(() => {}, [key])
        }
    })
})()

document.body.appendChild(HTMLConstruct.span('foo')); // -> <span>foo</span>
document.body.appendChild(HTMLConstruct.div.span('bar')); // -> <div><span>bar</span></div>

document.body.appendChild(HTMLConstruct.div.p(
    HTMLConstruct.span('bar'),
    HTMLConstruct.div.span('baz')
)); // -> <div><p><span>bar</span><span>baz</span></p></div>
