console.log("wertyu");
const ul = document.getElementById("news");

createNode = (element) => {
  return document.createElement(element);
};

append = (parent, el) => {
  return parent.appendChild(el);
};


fetch('static/data.json').then(res => {
  return res.json();
}).then((data) => {
  if (data.length > 0) {
    console.log(data, "lenth");
    return data.map((article) => {
      console.log('article', article)
      let li = createNode("li"),
        div = createNode("div"),
        img = createNode("img"),
        imgWrapper = createNode("div"),
        cardtext = createNode("div"),
        cntSource = createNode("span"),
        timeago = createNode("span"),
        p1 = createNode("p"),
        p2 = createNode("p"),
        h4 = createNode("h4"),
        runtime = createNode("p"),
        score = createNode("span"),
        specsList = createNode("ul"),
        std = createNode("li"),
        min = createNode("li"),
        max = createNode("li"),
        avg = createNode("li"),
        p1p2 = createNode("div"),
        header = createNode("div"),
        hr = createNode("hr"),
        item1 = createNode("div"),
        item2 = createNode("div"),
        item3 = createNode("div"),
        item4 = createNode("div"),
        text1 = createNode("span"),
        text2 = createNode("span"),
        text3 = createNode("span"),
        text4 = createNode("span");

      div.setAttribute("class", "news-card");
      cardtext.setAttribute("class", "card-text");
      imgWrapper.setAttribute("class", "card-img");
      cntSource.setAttribute("class", "source");
      timeago.setAttribute("class", "time");
      specsList.setAttribute("class", "specs_list");
      header.setAttribute("class", "card_header");

      h4.innerHTML = (article.name);
      p1 = (article["sub-title"].name);
      p2 = (article["sub-title"].count);
      p1p2.innerHTML = `${p1} : ${p2}`;
      runtime.innerHTML = `Running since : ${article.runtime}`;
      std.innerHTML = `${article.times[0]}`;
      min.innerHTML = ` ${article.times[1]}`;
      max.innerHTML = ` ${article.times[2]}`;
      avg.innerHTML = ` ${article.times[3]}`;
      text1.innerHTML = `std`;
      text2.innerHTML = `min`;
      text3.innerHTML = `max`;
      text4.innerHTML = `avg`;

      append(ul, li);
      append(li, div);
      append(div, cardtext);
      append(cardtext, header)
      append(header, h4);
      append(header, p1p2);
      append(cardtext, hr);
      append(cardtext, runtime);
      append(cardtext, specsList);
      append(specsList, item1);
      append(specsList, item2);
      append(specsList, item3);
      append(specsList, item4);
      append(item1, text1);
      append(item1, std);
      append(item2, text2);
      append(item2, min);
      append(item3, text3);
      append(item3, max);
      append(item4, text4);
      append(item4, avg);
    });
  }
});


