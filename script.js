let input = document.getElementById("input");
let needBtn = document.getElementById("addNeed");
let haveBtn = document.getElementById("addHave");
let NeedItems = document.querySelector(".need-items");
let HaveItems = document.querySelector(".have-items");

needBtn.onclick = () => {
  let value = input.value;
  if ($(input).val() == "") {
    return;
  }
  const newNeed = $("<div>");
  newNeed.addClass("item");
  newNeed.append(
    '<div><input type="checkbox" name="item" /> ' +
      value +
      "</div>" +
      '<a href="#">&#10006;</a>'
  );
  $(NeedItems).append(newNeed);
  $(input).val("");
};

haveBtn.onclick = () => {
  let value = input.value;
  if ($(input).val() == "") {
    return;
  }
  const newHave = $("<div>");
  newHave.addClass("item");
  newHave.append(
    '<div><input type="checkbox" name="item" checked/> ' +
      value +
      "</div>" +
      '<a href="#">&#10006;</a>'
  );
  $(HaveItems).append(newHave);
  $(input).val("");
};

$(NeedItems).on("click", "div a", function (event) {
  $(event.target).parent("div").remove();
});

$(HaveItems).on("click", "div a", function (event) {
  $(event.target).parent("div").remove();
});

$(NeedItems).on("click", "div div input", function (event) {
  $(HaveItems).append($(event.target).parent("div").parent("div"));
});

$(HaveItems).on("click", "div div input", function (event) {
  $(NeedItems).append($(event.target).parent("div").parent("div"));
});
