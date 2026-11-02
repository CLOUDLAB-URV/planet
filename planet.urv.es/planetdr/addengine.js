function addEngine(name)
{
  if ((typeof window.sidebar == "object") && (typeof window.sidebar.addSearchEngine == "function")) {
    window.sidebar.addSearchEngine(
      "http://planet.urv.es/planetdr/" + name + ".src",
      "http://planet.urv.es/planetdr/" + name + ".gif", name, 'Reference' );
  } else {
    alert("You will need a browser which supports Sherlock to install this plugin.");
  }
}