/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  var domainGenerate = {
    pronoun: ["the", "our", "your"],
    adj: ["great", "big", "best", "first", "perfect"],
    noun: ["place", "corner", "experience", "vacation"],
    topLavelDomain: [".com", ".es", ".by", ".de", ".org", ".fr", ".edu"]
  };
  console.log(domainGenerate);

  var firstParraf = document.getElementById("firstParraf");
  var generateButton = document.getElementById("generateButton");
  var myDomain = document.getElementById("myDomain");

  generateButton.addEventListener("click", function() {
    var rundomPronoun = Math.floor(
      Math.random() * domainGenerate.pronoun.length
    );
    var rundomAdj = Math.floor(Math.random() * domainGenerate.adj.length);
    var rundomNoun = Math.floor(Math.random() * domainGenerate.noun.length);
    var rundomTopLavelDomain = Math.floor(
      Math.random() * domainGenerate.topLavelDomain.length
    );

    var resultList = `<li>${domainGenerate.pronoun[rundomPronoun]}${domainGenerate.adj[rundomAdj]}${domainGenerate.noun[rundomNoun]}${domainGenerate.topLavelDomain[rundomTopLavelDomain]}</li>`;
    myDomain.innerHTML += resultList;
  });
};
