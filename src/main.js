const div = dom.create('<div>newDiv</div>');
console.log(div);

dom.after(test, div);

const div2 = dom.create('<div id="parent"></div>')
dom.wrap(test, div2)

dom.empty(window.empty)

dom.attr(test, 'title', 'hi, i am geek')

dom.style(test, {border: '1px solid red'})

dom.class.add(test, 'red')

const one = dom.find('#test')[0]

console.log(dom.find('.green', one)[0])