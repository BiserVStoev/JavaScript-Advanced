function wikiParser(selector) {
    let text = $(selector).text();

    let formattedText = text
        .replace(/===([^='\[]+?)===/g, (m, gr) => `<h3>${gr}</h3>`)
        .replace(/==([^='\[]+?)==/g, (m, gr) => `<h2>${gr}</h2>`)
        .replace(/=([^='\[]+?)=/g, (m, gr) => `<h1>${gr}</h1>`)
        .replace(/'''([^'=\[]+?)'''/g, (m, gr) => `<b>${gr}</b>`)
        .replace(/''([^'=\[]+?)''/g, (m, gr) => `<i>${gr}</i>`)
        .replace(/\[\[([^\[\]]+?)\|([^\[\]]+?)]]/g, (m, gr1, gr2) => `<a href="/wiki/${gr1}">${gr2}</a>`)
        .replace(/\[\[([^\[\]]+?)]]/g, (m, gr) => `<a href="/wiki/${gr}">${gr}</a>`);

    $(selector).html(formattedText);
}